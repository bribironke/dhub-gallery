import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import { Fields, db, type iStatus } from "$lib";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(302, '/')
  }
};

const profile: Action = async ({ request, locals }) => {
  const data = await request.formData()
  const username = data.get(Fields.USERNAME)
  const email = data.get(Fields.EMAIL)
  const address = data.get(Fields.ADDRESS)
  const phoneNumber = data.get(Fields.PHONENUMBER)
  
  
  if (typeof username !== 'string' || username.length < 1) {
    const status: iStatus = { message: "Username field cannot be empty", type: "error" } 
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
    const status: iStatus = { message: "Phone Number field cannot be empty", type: "error" } 
    return fail(400, { invalid: true, status })
  }
 

  const update = { username, email, address, phoneNumber }

  try {
    // if (user)
    await db.user.update({
      where: { email: locals.user.email }, data: update
    })
  } catch (error: any) {
    let status: iStatus = { message: error.message, type: "error" }
    if (error.code === "P2002") {
      status = { message: "Username already exist. Change to another", type: "error" } 
    }
    console.log("error message", error.code)
    return fail(400, { invalid: true, status })
  }
 
  const status: iStatus = { message: "Successfully updated profile", type: "success" }
  return { status }
}

export const actions: Actions = {
  profile
};