<script setup lang="ts">
import * as v from 'valibot'

const auth = useAuth()

const schema = v.object({
	email: v.pipe(v.string(), v.email('Invalid email')),
	password: v.pipe(v.string(), v.minLength(6, 'Must be at least 6 characters'))
})

const form = reactive({
	email: 'svetlwzg@mail.ru',
	password: 'svetaTaxi&Express768!'
})

const onSubmit = async () => {
	const toast = useToast()
	try {
		await auth.login(form.email, form.password)
		toast.add({ title: 'Выполнено', description: 'Вход успешно выполнен.', color: 'success' })
		await navigateTo('/dashboard')
	} catch {
		toast.add({ title: 'Ошибка', description: 'Неверный email или пароль.', color: 'error' })
	}
}

definePageMeta({
	layout: 'empty'
})
</script>

<template>
	<UContainer class="flex flex-col gap-2 items-center justify-center h-screen p-10">
		<UForm :schema="schema" :state="form" class="space-y-4 bg-gray-600/30 p-10 rounded-lg" @submit="onSubmit">
			<UFormField :ui="{ label: 'text-white' }" label="Email" name="email">
				<UInput size="xl" v-model="form.email" />
			</UFormField>

			<UFormField :ui="{ label: 'text-white' }" label="Пароль" name="password">
				<UInput size="xl" v-model="form.password" type="password" />
			</UFormField>

			<UButton size="xl" type="submit"> Войти </UButton>
		</UForm>
	</UContainer>
</template>
