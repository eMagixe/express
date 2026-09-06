export default defineNuxtPlugin(() => {
	const counterId = 111727262
	const date = new Date()

	if (typeof window !== 'undefined') {

		const w = window as any
		w.ym = w.ym || function () { (w.ym.a = w.ym.a || []).push(arguments) }
		w.ym.l = date.getTime()

		const script = document.createElement('script')
		script.async = true
		script.src = 'https://yandex.ru'
		document.head.appendChild(script)

		w.ym(counterId, 'init', {
			clickmap: true,
			trackLinks: true,
			accurateTrackBounce: true,
			webvisor: true
		});

		const router = useRouter();
		router.afterEach((to) => {
			if (typeof w.ym === 'function') {
				w.ym(counterId, 'hit', to.fullPath);
			}
		})
	}
})
