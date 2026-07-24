export default defineEventHandler(async (event) => {
	return $fetch('/directions', {
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
