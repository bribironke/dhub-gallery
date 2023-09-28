import type { Handle } from "@sveltejs/kit"; 
import { db, initial, type iStatus } from "$lib";
import { statusStore } from "$lib/stores";

export const handle: Handle = async ({ event, resolve }) => {
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
    }
    // const status: iStatus = { message: "Successfully signed in", type: "success" }
    // statusStore.update(_ => status)
  }

  return await resolve(event)
}