export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	return $fetch('/add-review', {
		method: 'POST',
		baseURL: useRuntimeConfig().apiBase,
		body
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
