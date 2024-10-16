module.exports = {
	theme: {
		fontFamily: {
			sans: 'Lexend',
			lexend: 'Lexend',
			logo: '"Roboto Slab"',
			playfair: 'Playfair',
			bodoni: '"Bodoni Moda"',
		},

		screens: {
			sm: '600px',
			md: '900px',
			lg: '1200px',
			xl: '1600px',
			fh: '1920px',
		},
		extend: {
			colors: {
				gray: {
					50: '#F2F2F2',
					100: '#E8E8E8',
					200: '#CFCFCF',
					300: '#B8B8B8',
					400: '#A1A1A1',
					500: '#8A8A8A',
					600: '#707070',
					700: '#595959',
					800: '#424242',
					900: '#2A2A2A',
					950: '#141414',
				},
				mainbg: '#efe5dc',
			},

			fontWeight: {
				100: '100',
				200: '200',
				300: '300',
				400: '400',
				500: '500',
				600: '600',
				700: '700',
				800: '800',
				900: '900',
			},
		},
	},

	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
}
