import { Attributes, DataTypes, Events } from "$lib/interfaces/enums";

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