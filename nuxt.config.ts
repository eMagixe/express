// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },
	modules: ['@nuxt/ui'],
	css: ['/assets/css/main.css'],
	debug: false,
	vite: {
		build: {
			cssCodeSplit: true,
			minify: 'esbuild'
		}
	},
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
