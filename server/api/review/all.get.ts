export default defineEventHandler(async (event) => {
	return $fetch('/reviews', {
		method: 'GET',
		baseURL: useRuntimeConfig().apiBase
	})
		.then((data) => {
			return data
		})
		.catch((error) => {
			return {
				error
			}
		})
})
