type CookieSerializeOptions = {
	httpOnly: boolean
	secure: boolean | undefined
	sameSite: boolean | 'lax' | 'strict' | 'none' | undefined
	maxAge: number
}

const optionsCookie: CookieSerializeOptions = {
	httpOnly: true,
	secure: true,
	sameSite: 'lax',
	maxAge: 60 * 60 * 24 * 7
}

type User = {
	full_name: string
	phone: string
}

type Error = {
	error: boolean
	message: string
}

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	try {
		return $fetch('/login', {
			method: 'POST',
			baseURL: useRuntimeConfig().apiBase,
			body
		})
			.then(async (response) => {
				if (response && response.hasOwnProperty('error') && (response as Error).error === true) {
					if ((response as Error).error) {
						throw createError({
							statusCode: 401,
							statusMessage: (response as Error).message
						})
					}
				} else if (response && response.hasOwnProperty('full_name') && (response as User).full_name) {
					setCookie(event, 'access_token', crypto.randomUUID(), optionsCookie)
					return Promise.resolve(response)
				} else {
					if ((response as Error).error === true) {
						throw createError({
							statusCode: 401,
							statusMessage: (response as Error).message
						})
					}
				}
			})
			.catch(async (error) => {
				if (error) {
					throw createError({
						statusCode: 401,
						statusMessage: 'Неверные данные пользователя'
					})
				}
			})
	} catch (error) {
		if (error) {
			throw createError({
				statusCode: 500,
				statusMessage: 'Ошибка сервера. Пожалуйста, попробуйте позже.'
			})
		}
	}
})
