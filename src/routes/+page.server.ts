import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ }) => {
  // console.log("url from homepage is", url)
  // if (!locals.user) {
  //   throw redirect(302, '/login')
  // }
};