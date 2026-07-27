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

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	if (body.password === 'svetaTaxi&Express768!' && body.email === 'svetlwzg@mail.ru') {
		setCookie(event, 'access_token', crypto.randomUUID(), optionsCookie)
		return {
			full_name: 'Администратор',
			phone: '89999999999'
		}
	} else {
		await sendRedirect(event, '/dashboard/login')
	}
})
