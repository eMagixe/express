// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },
	modules: ['@nuxt/ui'],
	css: ['/assets/css/main.css'],
	debug: false,
	runtimeConfig: {
		apiBase: 'https://tidideckasast.beget.app/webhook'
	},
	ui: {
		colorMode: false,
		experimental: {
			componentDetection: true
		}
	},
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com'
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com'
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap'
				}
			],
			script: [
				{
					src: '/js/yandex-metrika.js'
				}
			]
		}
	}
})
