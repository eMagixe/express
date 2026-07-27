import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware(async (to) => {
	const user = useAuth()
	const isAuth = await user.checkAuth()
	if (isAuth) {
		return true
	} else {
		if (to.path !== '/dashboard/login') {
			return navigateTo('/dashboard/login')
		}
	}
})
