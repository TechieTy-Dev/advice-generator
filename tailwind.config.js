/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				cyan: "hsl(193, 38%, 86%)",
				green: "hsl(150, 100%, 66%)",
				darkblue: "hsl(218, 23%, 16%)",
				dgblue: "hsl(217, 19%, 24%)",
				gblue: "hsl(217, 19%, 38%)",
			},
		},
	},
	plugins: [],
};
