export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	return await $fetch('/update-direction', {
		method: 'PUT',
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
