<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import type { Order } from '#shared/types/global'
import { vMaska } from 'maska/vue'
import * as v from 'valibot'

//Form data
const check = ref(false)
const inputDate = useTemplateRef('inputDate')

const dateNow = new Date(Date.now())
const currentDate = new CalendarDate(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDay())
const toast = useToast()

const data = reactive<Order>({
	name: '',
	phone: '',
	from: '',
	from_address: '',
	to: '',
	to_address: '',
	date: shallowRef(currentDate)
})

const schema = v.object({
	name: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	phone: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	to: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	from: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	to_address: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	from_address: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	date: v.pipe(v.any(), v.nonEmpty('Обязательное поле для заполнения'))
})

//Cities
const cities = ref(['Кумертау', 'Мелеуз', 'Салават', 'Уфа'])

const from_cities = computed(() => {
	if (data.to === 'Уфа') {
		return cities.value.filter((i) => i !== 'Уфа')
	} else {
		return cities.value
	}
})

const to_cities = computed(() => {
	if (data.from === 'Уфа') {
		return cities.value.filter((i) => i !== 'Уфа')
	} else {
		return cities.value.filter((i) => i === 'Уфа')
	}
})

//Actions
const reset = (): void => {
	data.to_address = ''
	data.from_address = ''
	data.to = ''
	data.from = ''
	data.name = ''
	data.phone = ''
	data.date = currentDate
}

const createOrder = async () => {
	await $fetch('/api/order/create', {
		method: 'POST',
		body: {
			...data
		}
	})
}

const onSubmit = async () => {
	createOrder()
		.then(() => {
			toast.add({ title: 'Ответ', description: 'Заявка была успешно создана', color: 'success' })
		})
		.catch((response) => {
			console.log(response)
			toast.add({ title: 'Ответ', description: 'Произошла ошибка при создании заявки', color: 'error' })
		})
}
</script>

<template>
	<SectionTitle title="Оставить заявку" />
	<UForm
		class="w-full flex flex-col justify-start items-center pt-5 gap-5"
		:schema="schema"
		:state="data"
		@submit="onSubmit"
	>
		<div class="flex flex-col lg:grid lg:grid-cols-2 justify-start items-center gap-5">
			<UFormField name="name">
				<UInput v-model="data.name" color="primary" placeholder="Ф.И.О" size="xl" />
			</UFormField>
			<UFormField name="phone">
				<UInput
					v-maska="'+7-(###)-###-##-##'"
					v-model="data.phone"
					placeholder="+7-(000)-000-00-00"
					icon="i-lucide-phone"
					size="xl"
				/>
			</UFormField>
			<UFormField name="from">
				<UInputMenu
					v-model="data.from"
					:items="from_cities"
					color="primary"
					placeholder="Город отправления"
					size="xl"
				/>
			</UFormField>
			<UFormField name="from_address">
				<UInput v-model="data.from_address" color="primary" placeholder="Адрес отправления" size="xl" />
			</UFormField>
			<UFormField name="to">
				<UInputMenu
					v-model="data.to"
					:items="to_cities"
					color="primary"
					placeholder="Город прибытия"
					size="xl"
				/>
			</UFormField>
			<UFormField name="to_address">
				<UInput v-model="data.to_address" color="primary" placeholder="Адрес прибытия" size="xl" />
			</UFormField>
			<UFormField name="date">
				<UInputDate ref="inputDate" v-model="data.date">
					<template #trailing>
						<UPopover
							:reference="inputDate?.inputsRef[3]?.$el"
							:ui="{
								content: 'text-white bg-gray-600 w-[320px] sm:w-[440px] rounded-[26px]'
							}"
						>
							<UButton
								color="neutral"
								variant="link"
								size="md"
								icon="i-lucide-calendar"
								aria-label="Выберите дату"
								class="px-0"
							/>

							<template #content>
								<UCalendar v-model="data.date" class="p-2" />
							</template>
						</UPopover>
					</template>
				</UInputDate>
			</UFormField>
			<div class="min-w-[320px] max-w-110 flex flex-col justify-center items-center">
				<UCheckbox
					v-model="check"
					label="Подтверждение"
					description="Даю согласие на обработку персональных данных и подтверждаю правильность введенных данных"
					:ui="{
						base: 'h-5 w-5 text-white bg-gray-600 mt-10 mr-2',
						description: 'text-gray-400',
						label: 'text-white text-lg'
					}"
				/>
			</div>
		</div>
		<div class="w-full flex flex-row justify-center items-center pt-5 mb-20 gap-5">
			<UButton type="submit" class="button-gradient uppercase h-16" icon="i-lucide-send" :disabled="!check">
				Отправить
			</UButton>
			<UButton class="button-gradient uppercase h-16" @click="reset"> Очистить </UButton>
		</div>
	</UForm>
</template>

<style scoped></style>
