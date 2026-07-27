<script setup lang="ts">
import * as v from 'valibot'

const schema = v.object({
	name: v.pipe(v.string(), v.minLength(1, 'Название не может быть пустым')),
	price: v.pipe(v.string(), v.minLength(1, 'Цена не может быть пустой'))
})

const props = defineProps<{ direction: any }>()

const form = reactive({
	id: props.direction.id,
	name: props.direction.name,
	price: props.direction.price
})

const emit = defineEmits(['close'])
const loading = ref<boolean>(false)

const onSubmit = async () => {
	loading.value = true
	await $fetch(`/api/direction/${props.direction.id}`, {
		method: 'PUT',
		body: {
			...form
		}
	})
		.then(() => {
			emit('close')
		})
		.finally(() => (loading.value = false))
}
</script>

<template>
	<div class="flex flex-col justify-center items-center">
		<UForm :schema="schema" :state="form" class="w-full flex flex-col gap-5" @submit="onSubmit">
			<UFormField label="Название" name="name">
				<UInput class="w-full mt-2" size="xl" v-model="form.name" />
			</UFormField>
			<UFormField label="Цена" name="price">
				<UInput placeholder="Цена" class="w-full mt-2" size="xl" v-model="form.price" />
			</UFormField>

			<UButton class="button-gradient h-10 flex justify-center items-center" type="submit">Сохранить</UButton>
		</UForm>
	</div>
</template>
