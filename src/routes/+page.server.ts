import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, url }) => {
  // console.log("url from homepage is", url)
  // if (!locals.user) {
  //   throw redirect(302, '/login')
  // }
};