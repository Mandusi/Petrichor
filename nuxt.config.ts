export default defineNuxtConfig({
	app: {
		head: {
			title: 'Petrichor',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			],
			script: [],
		},
	},

	modules: ['@nuxtjs/tailwindcss'],

	// Component auto import
	components: [
		{
			path: '~/components',
			pathPrefix: false,
			extensions: ['.vue'],
			global: true,
		},
	],

	ssr: false,

	devServer: {
		port: 3030,
	},

	typescript: {
		tsConfig: {
			compilerOptions: {
				declarationDir: 'types',
			},
			include: ['~/types'],
		},
	},

	tailwindcss: {
		configPath: '~/tailwind.config.js',
		editorSupport: true,
		cssPath: ['@/assets/css/style.css', { injectPosition: 'first' }],
	},
})
