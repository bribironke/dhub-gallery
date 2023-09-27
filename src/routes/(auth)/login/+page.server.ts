import { fail, redirect } from "@sveltejs/kit";
import bcrypt from 'bcrypt'
import type { Action, Actions, PageServerLoad } from './$types'

import { Fields, db } from "$lib";

export const load: PageServerLoad = async ({ locals }) => {
  if(locals.user) {
    throw redirect(302, "/")
  }
};

const login: Action = async ({ cookies, request, locals }) => {
  const data = await request.formData()
  const email = data.get(Fields.EMAIL)
  const password = data.get(Fields.PASSWORD)

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    !email ||
    !password
  ) {
    return fail(400, { invalid: true })
  }

  const user = await db.user.findUnique({
    where: { email }
  })

  if (!user) {
    return fail(400, { credentials: true })
  }

  const userPassword = await bcrypt.compare(password, user.passwordHash)

  if (!userPassword) {
    return fail(400, { credentials: true })
  }

  const authenticatedUser = await db.user.update({
    where: { username: user.username },
    data: {
      userAuthToken: crypto.randomUUID()
    }
  })

  cookies.set('session', authenticatedUser.userAuthToken, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30
  })

  console.log("from login, locals.user.redirectUrl", locals)

  throw redirect(302, "/")
}

export const actions: Actions = {
  login
};