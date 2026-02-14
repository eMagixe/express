export const sendCall = async (phone: string) => {
	await useFetch('/api/call/send', {
		method: 'POST',
		body: {
			phone,
			date: new Date().toLocaleDateString('ru-RU')
		}
	})
}
