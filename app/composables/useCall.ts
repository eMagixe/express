import { useState } from '#imports'

export const useCall = () => {
	const order = useState('orderUid', () => {
		const uuid = crypto.randomUUID()
		const route = useRoute()

		return {
			uid: uuid.split('-').shift(),
			phone: '',
			modalVisible: false,
			callEnabled: true,
			timeOut: undefined as any,
			route: useRoute().path
		}
	})

	async function toCall(phone: string) {
		order.value.phone = phone
		order.value.route = useRoute().path
		await sendData()
		await navigateTo(`tel:${phone}`, {
			external: true
		})
	}

	async function sendData() {
		if (order.value.phone && order.value.uid && order.value.callEnabled) {
			order.value.callEnabled = false

			await $fetch('/api/call/send', {
				method: 'POST',
				body: {
					route: order.value.route,
					phone: order.value.phone,
					orderUid: order.value.uid,
					date: new Date().toLocaleDateString('ru-RU')
				}
			})

			order.value.timeOut = setTimeout(() => {
				order.value.callEnabled = true
				clearTimeout(order.value.timeOut)
			}, 3000)
		}
	}

	return {
		order,
		toCall,
		sendData
	}
}
