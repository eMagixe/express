const e={sendCallToTelegram:async a=>{await $fetch("/api/call/send",{method:"POST",body:{phone:a,date:new Date().toLocaleDateString("ru-RU")}})},isArray:a=>a&&Array.isArray(a)};export{e as u};
