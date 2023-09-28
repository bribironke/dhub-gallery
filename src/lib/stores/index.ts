import {  initial } from "$lib";
import type { iStatus } from "$lib/interfaces";
import { writable } from "svelte/store";

export const statusStore = writable<iStatus>(initial)
