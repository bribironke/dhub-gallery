import { browser } from "$app/environment";
import {  Others, initial, lsSet } from "$lib";
import type { iStatus } from "$lib/interfaces";
import { writable } from "svelte/store";

export const statusStore = writable<iStatus>(initial)

statusStore.subscribe(val => {
  console.log("is browser", browser)
})