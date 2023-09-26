/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
        "dmbg": "#121212",
        "dmpaper": "#1E1E1E",
        "dmpaperx2": "#2E2E2E",
        "dmpaperx3": "#353535",
        "font-fade": "#75757a",
        "officialstores": "#01657d",
        "orange": "#f68b1e",
        "lighter-bg": "#f5f5f5",
        "light-bg": "#eaeded",
        "rating-gray": "#c7c7cd",
        "font-color": "#282828",
        "border-color": "#a3a3a6",
        "dark-green": "#137333",
        "light-green": "#e6f4ea",
        "dark-red": "#a50e0e",
        "light-red": "#fce8e6",
        "dark-orange": "#f68b1e",
        "light-orange": "#fde7db",
        "main": "#EE1E87",
        "secondary": "#492893"
			},
			borderRadius: {
				"sm4": "4px"
			},
			fontSize: {
				'2xs': "10px"
			},
			boxShadow: {
				"custom": "0 2px 5px 0 rgba(0,0,0,0.2)"
			},
			aspectRatio: {
				'16/9': '16 / 9'
			},
			backgroundPosition: {
				"shift": "center center"
			},
			backgroundSize: {
				"113": "113%"
			},
		},
	},
	plugins: [
		require("daisyui")
	],
}
