import { $ as $fetch$2 } from '../virtual/entry.mjs';
import { u as useState } from './state-CjjX6iZP.mjs';

//#region app/composables/useCall.ts
var useCall = () => {
	const order = useState("orderUid", () => {
		return {
			uid: crypto.randomUUID().split("-").shift(),
			phone: "",
			modalVisible: false,
			callEnabled: true,
			timeOut: void 0
		};
	});
	function openModalCall(phone) {
		order.value.modalVisible = true;
		order.value.phone = phone;
	}
	async function sendData() {
		if (order.value.phone && order.value.uid && order.value.callEnabled) {
			order.value.callEnabled = false;
			await $fetch$2("/api/call/send", {
				method: "POST",
				body: {
					phone: order.value.phone,
					orderUid: order.value.uid,
					date: (/* @__PURE__ */ new Date()).toLocaleDateString("ru-RU")
				}
			});
			order.value.timeOut = setTimeout(() => {
				order.value.callEnabled = true;
				clearTimeout(order.value.timeOut);
			}, 3e3);
		}
	}
	return {
		order,
		openModalCall,
		sendData
	};
};

export { useCall as u };
