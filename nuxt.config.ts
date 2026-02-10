// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxt/ui'],
	css: ['/assets/css/main.css'],
	runtimeConfig: {
		apiBase: 'https://tidideckasast.beget.app/webhook'
	},
	ui: {
		colorMode: false
	},
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				}
			],
			script: [
				{
					src: '/js/yandex-metrika.js',
					tagPosition: 'bodyClose'
				}
			]
		}
	}
})
