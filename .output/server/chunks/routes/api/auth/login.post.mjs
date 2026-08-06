import { d as defineEventHandler, r as readBody, u as useRuntimeConfig, s as sendRedirect, a as setCookie } from '../../../nitro/nitro.mjs';
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
  console.log("body", body);
  try {
    return $fetch("/login", {
      method: "POST",
      baseURL: useRuntimeConfig().apiBase,
      body
    }).then(async (response) => {
      if (response && response.hasOwnProperty("error") && response.error === true) {
        await sendRedirect(event, "/dashboard/login");
      } else if (response && response.hasOwnProperty("full_name") && response.full_name) {
        setCookie(event, "access_token", crypto.randomUUID(), optionsCookie);
        return response;
      } else {
        return false;
      }
    }).catch(async (error) => {
      console.error(error);
      return Error(error.message);
    });
  } catch (error) {
    console.error(error);
    return false;
  }
});

export { login_post as default };
