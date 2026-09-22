import { c as useRoute$1, $ as $fetch$2, n as navigateTo } from '../virtual/entry.mjs';
import { u as useState } from './state-CjjX6iZP.mjs';

//#region app/composables/useCall.ts
var useCall = () => {
	const order = useState("orderUid", () => {
		const uuid = crypto.randomUUID();
		useRoute$1();
		return {
			uid: uuid.split("-").shift(),
			phone: "",
			modalVisible: false,
			callEnabled: true,
			timeOut: void 0,
			route: useRoute$1().path
		};
	});
	async function toCall(phone) {
		order.value.phone = phone;
		order.value.route = useRoute$1().path;
		await sendData();
		await navigateTo(`tel:${phone}`, { external: true });
	}
	async function sendData() {
		if (order.value.phone && order.value.uid && order.value.callEnabled) {
			order.value.callEnabled = false;
			await $fetch$2("/api/call/send", {
				method: "POST",
				body: {
					route: order.value.route,
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
		toCall,
		sendData
	};
};

export { useCall as u };
