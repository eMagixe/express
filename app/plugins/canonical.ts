export default defineNuxtPlugin(() => {
	const route = useRoute()

	useHead({
		link: [
			{
				rel: 'canonical',
				href: computed(() => {
					// Для dashboard canonical не нужен (закрыт от индексации)
					if (route.path.startsWith('/dashboard')) {
						return undefined
					}
					return `https://taxi-express.su${route.path}`
				})
			}
		]
	})
})
