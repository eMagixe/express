import type { User } from '#shared/types/global'
import { useState } from '#imports'

export const useAuth = () => {
	const state = useState<{ userData: User | null }>('auth', () => {
		return {
			userData: null
		} as any
	})

	const setUser = (userData: User | null) => {
		state.value.userData = userData
		if (import.meta.client) {
			localStorage.setItem('user', JSON.stringify(userData))
		}
	}

	const getUser = () => {
		if (import.meta.client) {
			const localUser = localStorage.getItem('user')
			return state.value.userData || (JSON.parse(localUser || '') as User) || null
		} else {
			return (state.value.userData as User) || null
		}
	}

	const syncLocalUser = () => {
		const localUser = localStorage.getItem('user')
		if (state.value.userData && localUser) return true
		else {
			if (state.value.userData) {
				setUser(state.value.userData)
				return true
			} else if (localUser) {
				setUser(JSON.parse(localUser))
				return true
			} else return false
		}
	}

	const identify = async () => {
		if (import.meta.client) {
			if (syncLocalUser()) {
				return true
			} else {
				return syncLocalUser()
			}
		}
		return false
	}

	const isAuth = computed(() => {
		return !!state.value.userData
	})

	const checkAuth = async () => {
		await identify()
		return isAuth.value
	}

	const login = async (email: string, password: string) => {
		await $fetch('/api/auth/login', {
			method: 'POST',
			body: {
				email,
				password
			}
		})
			.then((data) => {
				setUser(data as User)
			})
			.catch(() => {
				logout()
			})
	}

	const clearData = () => {
		if (import.meta.client) {
			localStorage.removeItem('user')
		}
		clearNuxtData()
		setUser(null)
	}

	const logout = async () => {
		clearData()
		navigateTo('/dashboard/login')
	}

	return {
		checkAuth,
		login,
		logout,
		getUser,
		setUser
	}
}
