export default defineEventHandler(async (event) => {


	return $fetch('https://tidideckasast.beget.app/webhook/create-order', {
		method: 'POST',
		body: {
			name: 'Test Order 3',
		}
	})
		.then(data => {
			return data
		})
		.catch(error => {
			console.log(error)
			return {}
		})
})