import { useState } from '#imports'

export const useCall = () => {
	const order = useState('orderUid', () => {
		const uuid = crypto.randomUUID()

		return {
			uid: uuid.split('-').shift(),
			phone: '',
			modalVisible: false,
			callEnabled: true,
			timeOut: undefined as any
		}
	})

	function openModalCall(phone: string) {
		order.value.modalVisible = true
		order.value.phone = phone
	}

	async function sendData() {
		if (order.value.phone && order.value.uid && order.value.callEnabled) {
			order.value.callEnabled = false

			await $fetch('/api/call/send', {
				method: 'POST',
				body: {
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
		openModalCall,
		sendData
	}
}
