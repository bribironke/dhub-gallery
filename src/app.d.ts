// See https://kit.svelte.dev/docs/types#app

import type { iImage, iStatus } from "$lib/interfaces";

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
			},
			status: iStatus,
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
