import { useState } from '#imports'

export const useCall = () => {
	const order = useState('orderUid', () => {
		const uuid = crypto.randomUUID()

		return {
			uid: uuid.split('-').shift(),
			modalVisible: false
		}
	})

	async function sendCallToTelegram(phone: string) {
		order.value.modalVisible = true

		await $fetch('/api/call/send', {
			method: 'POST',
			body: {
				phone,
				orderUid: order.value.uid,
				date: new Date().toLocaleDateString('ru-RU')
			}
		})
	}

	return {
		order,
		sendCallToTelegram
	}
}
