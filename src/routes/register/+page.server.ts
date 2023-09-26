import { redirect, fail } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import bcrypt from 'bcrypt'

import { Roles, db } from "$lib";

export const load: PageServerLoad = async () => {
  // todo
};

const register: Action = async ({ request }) => {
  const data = await request.formData()
  const username = data.get("username")
  const password = data.get("password")

  if (
    typeof username !== 'string' ||
    typeof password !== 'string'
  ) {
    return fail(400, { invalid: true })
  }

  const user = await db.user.findUnique({
    where: { username }
  })

  if (user) {
    return fail(400, { user: true })
  }

  await db.user.create({
    data: {
      username,
      passwordHash: await bcrypt.hash(password, 10),
      // The auth token below should be given to all authenticated users anon_key
      userAuthToken: crypto.randomUUID(),
      role: { connect: { name: Roles.USER } }
    }
  })

  throw redirect(303, '/login')
}

export const actions: Actions = {
  register
};