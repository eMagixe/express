import { C as executeAsync } from '../nitro/nitro.mjs';
import { u as useAuth } from './useAuth-Sd47jkYL.mjs';
import { e as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
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
import 'vue';
import './asyncData-jKiWvY6r.mjs';
import 'perfect-debounce';
import './state-tqLlnwND.mjs';
import 'vue-router';
import '@iconify/vue';
import 'unhead/scripts';
import '@vueuse/core';
import 'valibot';
import 'tailwindcss/colors';
import 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const auth = defineNuxtRouteMiddleware(async (to) => {
  let __temp, __restore;
  const user = useAuth();
  const isAuth = ([__temp, __restore] = executeAsync(() => user.checkAuth()), __temp = await __temp, __restore(), __temp);
  if (isAuth) {
    return true;
  } else {
    if (to.path !== "/dashboard/login") {
      return navigateTo("/dashboard/login");
    }
  }
});

export { auth as default };
