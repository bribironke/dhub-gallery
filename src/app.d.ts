// See https://kit.svelte.dev/docs/types#app

import type { iImage } from "$lib/interfaces";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				id: string;
				name: string;
				role: string;
				email: string;
				address: string;
				phoneNumber: string;
				images: iImage[];
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
