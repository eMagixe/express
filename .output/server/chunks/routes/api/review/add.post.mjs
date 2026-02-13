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

const add_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  return $fetch("/add-review", {
    method: "POST",
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

export { add_post as default };
//# sourceMappingURL=add.post.mjs.map
