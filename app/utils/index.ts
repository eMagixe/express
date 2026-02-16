// To track calls from the website, we send them to Telegram
export const sendCallToTelegram = async (phone: string) => {
	await useFetch('/api/call/send', {
		method: 'POST',
		body: {
			phone,
			date: new Date().toLocaleDateString('ru-RU')
		}
	})
}
