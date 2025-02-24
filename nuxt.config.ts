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

	runtimeConfig: {
		public: {
			EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY,
			EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
			EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
		},
	},

	nitro: {
		preset: 'static',
		prerender: { routes: ['/', '/news/1', '/news/2', '/news/3', '/news/4'] },
	},

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
