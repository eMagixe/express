const utils = {
  // To track calls from the website, we send them to Telegram
  sendCallToTelegram: async (phone) => {
    await $fetch("/api/call/send", {
      method: "POST",
      body: {
        phone,
        date: (/* @__PURE__ */ new Date()).toLocaleDateString("ru-RU")
      }
    });
  },
  isArray: (data) => {
    return data && Array.isArray(data);
  }
};

export { utils as u };
