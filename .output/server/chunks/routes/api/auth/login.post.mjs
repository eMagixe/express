import { d as defineEventHandler, r as readBody, u as useRuntimeConfig, c as createError, s as setCookie } from '../../../nitro/nitro.mjs';
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
  try {
    return $fetch("/login", {
      method: "POST",
      baseURL: useRuntimeConfig().apiBase,
      body
    }).then(async (response) => {
      if (response && response.hasOwnProperty("error") && response.error === true) {
        if (response.error) {
          throw createError({
            statusCode: 401,
            statusMessage: response.message
          });
        }
      } else if (response && response.hasOwnProperty("full_name") && response.full_name) {
        setCookie(event, "access_token", crypto.randomUUID(), optionsCookie);
        return Promise.resolve(response);
      } else {
        if (response.error === true) {
          throw createError({
            statusCode: 401,
            statusMessage: response.message
          });
        }
      }
    }).catch(async (error) => {
      if (error) {
        throw createError({
          statusCode: 401,
          statusMessage: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
        });
      }
    });
  } catch (error) {
    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435."
      });
    }
  }
});

export { login_post as default };
