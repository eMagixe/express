import { u as useState } from './state-DVSaO_PC.mjs';

const useCall = () => {
  const order = useState("orderUid", () => {
    const uuid = crypto.randomUUID();
    return {
      uid: uuid.split("-").shift(),
      modalVisible: false
    };
  });
  async function sendCallToTelegram(phone) {
    order.value.modalVisible = true;
    await $fetch("/api/call/send", {
      method: "POST",
      body: {
        phone,
        orderUid: order.value.uid,
        date: (/* @__PURE__ */ new Date()).toLocaleDateString("ru-RU")
      }
    });
  }
  return {
    order,
    sendCallToTelegram
  };
};

export { useCall as u };
