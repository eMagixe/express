export const utils = {
	// To track calls from the website, we send them to Telegram
	sendCallToTelegram: async (phone: string) => {
		await $fetch('/api/call/send', {
			method: 'POST',
			body: {
				phone,
				date: new Date().toLocaleDateString('ru-RU')
			}
		})
	},
	isArray: (data: any) => {
		return data && Array.isArray(data)
	}
}
