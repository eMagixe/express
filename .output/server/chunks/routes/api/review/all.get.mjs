import { d as defineEventHandler, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
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

const all_get = defineEventHandler(async (event) => {
  return $fetch("/reviews", {
    method: "GET",
    baseURL: useRuntimeConfig().apiBase
  }).then((data) => {
    return data;
  }).catch((error) => {
    return {
      error
    };
  });
});

export { all_get as default };
//# sourceMappingURL=all.get.mjs.map
