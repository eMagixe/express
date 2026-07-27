import { d as defineEventHandler, r as readBody, s as setCookie, a as sendRedirect } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';

const optionsCookie = {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  maxAge: 60 * 60 * 24 * 7
};
const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (body.password === "svetaTaxi&Express768!" && body.email === "svetlwzg@mail.ru") {
    setCookie(event, "access_token", crypto.randomUUID(), optionsCookie);
    return {
      full_name: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440",
      phone: "89999999999"
    };
  } else {
    await sendRedirect(event, "/dashboard/login");
  }
});

export { login_post as default };
