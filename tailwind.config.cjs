module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extends: {},
		fontFamily: {
			inter: ['inter', 'sans-serif'],
			poppins: ['poppins', 'serif'],
			'fira-mono': ['fira-mono']
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	// daisyUI config (optional)
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#12100B',
					secondary: '#D926AA',
					accent: '#1FB2A5',
					neutral: '#191D24',
					'base-100': '#2A303C',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272',

				}
			}
		]
	}
};