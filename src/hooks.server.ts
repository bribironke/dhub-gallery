import type { Handle } from "@sveltejs/kit"; 
import { db, initial } from "$lib";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.status = initial
  const session = event.cookies.get("session")

  if (!session) {
    return await resolve(event)
  }

  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { username: true, role: true, address: true, email: true, images: true, phoneNumber: true, id: true }
  })

  if (user) {
    event.locals.user = {
      id: user.id,
      name: user.username,
      role: user.role.name,
      address: user.address,
      email: user.email,
      images: user.images,
      phoneNumber: user.phoneNumber
    },
    event.locals.status = {
      type: "success",
      message: "Successfully signed in"
    }
  }

  return await resolve(event)
}