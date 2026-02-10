<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone, Time } from '@internationalized/date'
import type { Order } from '#shared/types/global'
import { vMaska } from 'maska/vue'
import * as v from 'valibot'
import { minLength } from 'valibot'

const df = new DateFormatter('ru-RU', {
	dateStyle: 'medium'
})

//Form data
const check = ref(false)

const [month, day, year] = new Date(Date.now()).toLocaleDateString('ru-RU').split('.')

const defaultTime = new Time(16, 30, 0)
const currentDate = new CalendarDate(Number(year), Number(month), Number(day))
const toast = useToast()

const data = reactive<Order>({
	name: '',
	phone: '',
	from: 'Кумертау',
	from_address: '',
	to: 'Уфа',
	to_address: '',
	date: shallowRef(currentDate),
	time: shallowRef(defaultTime)
})

const orderCreated = ref(false)

const schema = v.object({
	name: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	phone: v.pipe(
		v.string(),
		v.nonEmpty('Обязательное поле для заполнения'),
		minLength(18, 'Неверный формат номера телефона')
	),
	to: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	from: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	to_address: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	from_address: v.pipe(v.string(), v.nonEmpty('Обязательное поле для заполнения')),
	date: v.pipe(v.any(), v.nonEmpty('Обязательное поле для заполнения')),
	time: v.pipe(v.any(), v.nonEmpty('Обязательное поле для заполнения'))
})

//Cities
const cities = ref(['Кумертау', 'Мелеуз', 'Салават', 'Уфа'])

const from_cities = computed(() => {
	return cities.value
})

watch(
	() => data.from,
	(value) => {
		if (value === 'Уфа') data.to = ''
	}
)

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
	data.time = defaultTime
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
			orderCreated.value = true
		})
		.catch((response) => {
			console.log(response)
			toast.add({ title: 'Ответ', description: 'Произошла ошибка при создании заявки', color: 'error' })
		})
}
</script>

<template>
	<SectionTitle v-if="!orderCreated" title="Оставить заявку" />
	<UForm
		v-if="!orderCreated"
		class="w-full flex flex-col justify-start items-center pt-5 gap-5"
		:schema="schema"
		:state="data"
		@submit="onSubmit"
	>
		<div class="flex flex-col lg:grid lg:grid-cols-2 justify-start items-center gap-5">
			<UFormField name="name">
				<UInput v-model="data.name" color="primary" placeholder="Ф.И.О" size="xl" id="name" />
			</UFormField>
			<UFormField name="phone">
				<UInput
					v-maska="'+7-(###)-###-##-##'"
					v-model="data.phone"
					placeholder="+7-(000)-000-00-00"
					icon="i-lucide-phone"
					size="xl"
					id="phone"
				/>
			</UFormField>
			<UFormField name="from">
				<UInputMenu
					type="button"
					v-model="data.from"
					:items="from_cities"
					color="primary"
					placeholder="Город отправления"
					size="xl"
					id="from"
				/>
			</UFormField>
			<UFormField name="from_address">
				<UInput
					v-model="data.from_address"
					color="primary"
					placeholder="Адрес отправления"
					size="xl"
					id="from_address"
				/>
			</UFormField>
			<UFormField name="to">
				<UInputMenu
					type="button"
					v-model="data.to"
					:items="to_cities"
					color="primary"
					placeholder="Город прибытия"
					size="xl"
					id="to"
				/>
			</UFormField>
			<UFormField name="to_address">
				<UInput
					v-model="data.to_address"
					color="primary"
					placeholder="Адрес прибытия"
					size="xl"
					id="to_address"
				/>
			</UFormField>
			<div class="date-time w-full flex not-sm:flex-col justify-start items-center gap-5">
				<UFormField name="date" class="w-[50%] not-sm:w-[320px]">
					<UPopover>
						<UButton
							icon="i-lucide-calendar"
							class="w-full bg-gray-600 h-12 rounded-[26px] border border-white justify-between text-left"
						>
							{{ data.date ? df.format(data.date.toDate(getLocalTimeZone())) : 'Выберете дату' }}
						</UButton>

						<template #content>
							<UCalendar v-model="data.date" class="p-2" id="date" />
						</template>
					</UPopover>
				</UFormField>
				<UFormField name="time" class="w-[50%] not-sm:w-[320px]">
					<UInputTime class="w-full" :hour-cycle="24" :default-value="data.time" id="time" />
				</UFormField>
			</div>

			<div class="min-w-[320px] max-w-110 flex flex-col justify-center items-center">
				<UCheckbox
					v-model="check"
					label="Подтверждение"
					description="Даю согласие на обработку персональных данных и подтверждаю правильность введенных данных"
					:ui="{
						base: 'h-5 w-5 text-white bg-gray-600 mt-10 m-2',
						description: 'text-primary/70',
						label: 'text-white text-lg'
					}"
					id="check"
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
	<div v-else>
		<div class="order-created w-full flex flex-col justify-start items-start mb-20 gap-5">
			<h3 class="text-2xl font-bold">Заявка была успешно создана</h3>
			<p>
				Имя: <b>{{ data.name }}</b>
			</p>
			<p>Телефон: {{ data.phone }}</p>
			<p>Из: {{ data.from }}, {{ data.from_address }}</p>
			<p>До: {{ data.to }}, {{ data.to_address }}</p>
			<p>Дата: {{ data.date }}, время: {{ data.time }}</p>
			<p class="w-full text-center">Спасибо, вскоре мы свяжеться с вами.</p>
		</div>
	</div>
</template>

<style scoped></style>
