import { fail, redirect } from "@sveltejs/kit";
import bcrypt from 'bcrypt'
import type { Action, Actions, PageServerLoad } from './$types'

import { Fields, db, type iStatus, lsSet, Events } from "$lib";

export const load: PageServerLoad = async ({ locals }) => {
  if(locals.user) {
    throw redirect(302, "/")
  }
};

const login: Action = async ({ cookies, request, locals }) => {
  console.log("acting on form")
  const data = await request.formData()
  const email = data.get(Fields.EMAIL)
  const password = data.get(Fields.PASSWORD)

  if (typeof email !== 'string' || email.length < 1) {
    const status: iStatus = { message: "Email field cannot be empty", type: "error" } 
    return fail(400, { invalid: true, status })
  }
  if (typeof password !== 'string' || password.length < 1) {
    const status: iStatus = { message: "Password field cannot be empty", type: "error" } 
    return fail(400, { invalid: true, status })
  }

  const user = await db.user.findUnique({
    where: { email }
  })

  if (!user) {
    const status: iStatus = { message: "User doesn't exist", type: "error" } 
    return fail(400, { credentials: true, status })
  }

  const userPassword = await bcrypt.compare(password, user.passwordHash)

  if (!userPassword) {
    const status: iStatus = { message: "Password mismatch, enter correct password", type: "error" } 
    return fail(400, { credentials: true, status })
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
  console.log("about to sign in")
 
  throw redirect(302, '/')
}

export const actions: Actions = {
  login
};