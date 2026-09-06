import { n as navigateTo, $ as $fetch$2 } from '../virtual/entry.mjs';
import { c as clearNuxtData } from './asyncData-D23YQ4Dm.mjs';
import { u as useState } from './state-DyBHau4b.mjs';
import { computed } from 'vue';

//#region app/composables/useAuth.ts
var useAuth = () => {
	const state = useState("auth", () => {
		return { userData: null };
	});
	const setUser = (userData) => {
		state.value.userData = userData;
	};
	const getUser = () => {
		return state.value.userData || null;
	};
	const identify = async () => {
		return false;
	};
	const isAuth = computed(() => {
		return !!state.value.userData;
	});
	const checkAuth = async () => {
		await identify();
		return isAuth.value;
	};
	const login = async (email, password) => {
		await $fetch$2("/api/auth/login", {
			method: "POST",
			body: {
				email,
				password
			}
		}).then((data) => {
			setUser(data);
		}).catch(() => {
			logout();
		});
	};
	const clearData = () => {
		clearNuxtData();
		setUser(null);
	};
	const logout = async () => {
		clearData();
		navigateTo("/dashboard/login");
	};
	return {
		checkAuth,
		login,
		logout,
		getUser,
		setUser
	};
};

export { useAuth as u };
