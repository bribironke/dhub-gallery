import { browser } from "$app/environment";
import type { DateTimeFormatOptions, TStatus, iCData, iStatus } from "$lib/interfaces";
import { Attributes, DataTypes, Events } from "$lib/interfaces/enums";
import Info__SvelteComponent_ from "$lib/components/icons/Info.svelte";
import Alert__SvelteComponent_ from "$lib/components/icons/Alert.svelte";
import Error__SvelteComponent_ from "$lib/components/icons/Error.svelte";
import Success__SvelteComponent_ from "$lib/components/icons/Success.svelte";
export const btnClasses = [
  "flex",
  "items-center",
  "p-2",
  "sm:p-0",
  "sm:justify-center",
  "text-xs",
  "font-medium",
  "text-gray-700",
  "bg-white",
  "relative",
  "rounded-lg",
  "dark:bg-dmpaperx2",
  "focus:outline-none",
  "dark:text-gray-100",
  "dark:border-gray-600",
  "dark:hover:text-white",
  "dark:hover:bg-dmpaperx3",
  "shadow-custom",
  "cursor-pointer"
]
const clickHandler = (evt: Event, mobileNavRef: HTMLElement) => {
  const target = evt.target as HTMLElement;
  const type = target.getAttribute(Attributes.DATATYPE);

  switch (type) {
    case DataTypes.CLOSEMOBILENAV:
      console.log('closing mobile nav');
      mobileNavRef && mobileNavRef.classList.toggle('translate-x-[150%]');
      break;
    case DataTypes.HAMBURGER:
      console.log('closing mobile nav');
      mobileNavRef && mobileNavRef.classList.toggle('translate-x-[150%]');
      break;

    default:
      break;
  }
}

export const addMobileNavListener = (mobileNavRef: HTMLElement) => {
  console.log("adding mobile nav listener")
  addEventListener(Events.CLICK, (evt) => clickHandler(evt, mobileNavRef));
}

export const removeMobileNavListener = (mobileNavRef: HTMLElement) => {
  console.log("removing mobile nav listener")
  removeEventListener(Events.CLICK, (evt) => clickHandler(evt, mobileNavRef));
}


export const imageBlobUrl = async (imageUrl: string): Promise<string> => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

export const getRedirectUrl = (url: URL) => {
  const page = url.searchParams.get("page")
  return page ? `/${page}` : "/"
}

export const lsGet = (key: string) => browser && JSON.parse(localStorage.getItem(key) as string)

export const lsSet = (key: string, data: any) => browser && localStorage.setItem(key, JSON.stringify(data))

export const initial: iStatus = { message: "Successfully signed in", type: "success" }

export const icon = (status: TStatus) => {
  switch (status) {
    case "alert": return Alert__SvelteComponent_;
    case "info": return Info__SvelteComponent_;
    case "error": return Error__SvelteComponent_;
    case "success": return Success__SvelteComponent_;
    default: return Info__SvelteComponent_
  }
}

export const color = (status: TStatus) => {
  switch (status) {
    case "alert": return "bg-light-orange text-dark-orange";
    case "info": return "bg-light-blue text-dark-blue";
    case "error": return "bg-light-red text-dark-red";
    case "success": return "bg-light-green text-dark-green";
    default: return "bg-light-blue text-dark-blue"
  }
}

export const formatDate = (date: any) => {
  const options: DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  return formattedDate;
};