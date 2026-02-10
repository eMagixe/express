// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		[
			'yandex-metrika-module-nuxt3',
			{
				id: '106766232',
				ssr: true,
				webvisor: true,
				clickmap: true,
				ecommerce: 'dataLayer',
				url: '/',
				accurateTrackBounce: true,
				trackLinks: true
			}
		]
	],
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
			]
		}
	}
})
