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
				zbor: {
					primary: '#47d6de',
					secondary: '#de4040',
					accent: '#ff6542',
					neutral: '#06313b',
          			'base-100': '#04232a',
          			'base-200': '#005063',
          			'base-300': '#105570',
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
