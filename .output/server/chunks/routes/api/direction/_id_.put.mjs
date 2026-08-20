import { d as defineEventHandler, r as readBody, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
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

const _id__put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await $fetch("/update-direction", {
    method: "PUT",
    baseURL: useRuntimeConfig().apiBase,
    body
  }).then((data) => {
    return data;
  }).catch((error) => {
    return {
      error
    };
  });
});

export { _id__put as default };
