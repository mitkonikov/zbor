/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#47d6de',
					secondary: '#de4040',
					accent: '#ff6542',
					neutral: '#0d0f18',
          'base-100': '#04232a',
					info: '#00f2ff',
					success: '#03ff7d',
					warning: '#ff9100',
					error: '#ff0303'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
