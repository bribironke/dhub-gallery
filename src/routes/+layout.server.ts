import { statusStore } from '$lib/stores';
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    user: locals.user,
    status: locals.status
  }
};