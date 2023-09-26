import type { Handle } from "@sveltejs/kit"; 
import { db } from "$lib";

export const handle: Handle = async ({ event, resolve }) => {
  const session = event.cookies.get("session")

  if (!session) {
    return await resolve(event)
  }

  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { username: true, role: true, address: true, email: true, images: true, phoneNumber: true }
  })

  if (user) {
    event.locals.user = {
      name: user.username,
      role: user.role.name,
      address: user.address,
      email: user.email,
      images: user.images,
      phoneNumber: user.phoneNumber
    }
  }

  return await resolve(event)
}