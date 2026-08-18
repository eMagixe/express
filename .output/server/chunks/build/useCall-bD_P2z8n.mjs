import { u as useState } from './state-tqLlnwND.mjs';

const useCall = () => {
  const order = useState("orderUid", () => {
    const uuid = crypto.randomUUID();
    return {
      uid: uuid.split("-").shift(),
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
      await $fetch("/api/call/send", {
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
