import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals }) => {
  // console.log("locals.status from layout.server", locals.status)
  return {
    user: locals.user,
    status: locals.status
  }
};