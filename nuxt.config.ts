// https://nuxt.com/docs/api/configuration/nuxt-config
const year = 31536000

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },
	modules: ['@nuxt/ui', '@nuxt/scripts'],
	css: ['/assets/css/main.css'],
	debug: false,
	runtimeConfig: {
		apiBase: 'https://tidideckasast.beget.app/webhook',
		public: {
			orderVisible: false
		}
	},
	ui: {
		colorMode: false,
		experimental: {
			componentDetection: true
		}
	},
	nitro: {
		routeRules: {
			'/dashboard/**': {
				ssr: false
			},
			'/fonts/**': {
				headers: {
					'Cache-Control': `public, max-age=${year}, s-maxage=${year}`
				}
			},
			'/images/**': {
				headers: {
					'Cache-Control': `public, max-age=${year}, s-maxage=${year}`
				}
			},
			'/js/**': {
				headers: {
					'Cache-Control': `public, max-age=${year}, s-maxage=${year}`
				}
			},
			'/_nuxt/**': {
				headers: {
					'Cache-Control': `public, max-age=${year}, s-maxage=${year}`
				}
			}
		}
	},
	sourcemap: {
		server: false,
		client: false
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'ru'
			},
			meta: [
				{
					name: 'yandex-verification',
					content: 'a20d3bdc1ac81b9a'
				},
				{
					name: 'robots',
					content: 'index, follow'
				}
			],
			script: [
				{
					src: '/js/yandex-metrika.js',
					tagPosition: 'bodyClose',
					defer: true
				}
			],
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.png'
				}
			]
		}
	}
})