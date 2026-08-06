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

	console.log('body', body)

	try {
		return $fetch('/login', {
			method: 'POST',
			baseURL: useRuntimeConfig().apiBase,
			body
		})
			.then(async (response) => {
				if (response && response.hasOwnProperty('error') && (response as Error).error === true) {
					await sendRedirect(event, '/dashboard/login')
				}

				setCookie(event, 'access_token', crypto.randomUUID(), optionsCookie)
				return response
			})
			.catch(async (error) => {
				return Error(error.message)
			})
	} catch (error) {
		console.error(error)
		return false
	}
})
