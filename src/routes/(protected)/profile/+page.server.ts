import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import { Fields, db } from "$lib";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(302, '/')
  }
};

const profile: Action = async ({ request }) => {
  const data = await request.formData()
  const username = data.get(Fields.USERNAME)
  const email = data.get(Fields.EMAIL)
  const address = data.get(Fields.ADDRESS)
  const phoneNumber = data.get(Fields.PHONENUMBER)
  
  
  if (
    typeof username !== 'string' ||
    typeof email !== 'string' ||
    typeof address !== 'string' ||
    typeof phoneNumber !== 'string'
  ) {
    return fail(400, { invalid: true })
  }

  const user = await db.user.findUnique({
    where: { email } 
  })

  const update = { ...user, username, email, address, phoneNumber }

  await db.user.update({
    where: { email }, data: update
  })

  throw redirect(303, "/profile") 
}

export const actions: Actions = {
  profile
};