import { redirect, fail } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import bcrypt from 'bcrypt'

import { Fields, Roles, db, type iStatus } from "$lib";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals.user) {
    throw redirect(302, '/')
  }
};

const register: Action = async ({ request }) => {
  const data = await request.formData()
  const username = data.get(Fields.USERNAME)
  const password = data.get(Fields.PASSWORD)
  const email = data.get(Fields.EMAIL)
  const address = data.get(Fields.ADDRESS)
  const phoneNumber = data.get(Fields.PHONENUMBER)

  if (typeof username !== 'string' || username.length < 1) {
    const status: iStatus = { message: "Username field cannot be empty", type: "error" } 
    return fail(400, { invalid: true, status })
  }
  if (typeof password !== 'string' || password.length < 1) {
    const status: iStatus = { message: "Password field cannot be empty", type: "error" } 
    return fail(400, { invalid: true, status })
  }
  if (typeof email !== 'string' || email.length < 1) {
    const status: iStatus = { message: "Email field cannot be empty", type: "error" } 
    return fail(400, { invalid: true, status })
  }
  if (typeof address !== 'string' || address.length < 1) {
    const status: iStatus = { message: "Address field cannot be empty", type: "error" } 
    return fail(400, { invalid: true, status })
  }
  if (typeof phoneNumber !== 'string' || phoneNumber.length < 1) {
    const status: iStatus = { message: "Phone number field cannot be empty", type: "error" } 
    return fail(400, { invalid: true, status })
  }
  // if (
  //   typeof username !== 'string' ||
  //   typeof password !== 'string' ||
  //   typeof email !== 'string' ||
  //   typeof address !== 'string' ||
  //   typeof phoneNumber !== 'string'
  // ) {
  //   return fail(400, { invalid: true })
  // }

  const userByUsername = await db.user.findUnique({
    where: { username }
  })

  const userByEmail = await db.user.findUnique({
    where: { email }
  })

  if (userByUsername || userByEmail) {
    return fail(400, { user: true })
  }

  await db.user.create({
    data: {
      username,
      address,
      email,
      phoneNumber,
      passwordHash: await bcrypt.hash(password, 10),
      // The auth token below should be given to all authenticated users anon_key
      userAuthToken: crypto.randomUUID(),
      role: { connect: { name: Roles.USER } }
    }
  })

  const status: iStatus = { message: "Successfully registered!", type: "success" } 
  throw redirect(303, '/login')
}

export const actions: Actions = {
  register
};