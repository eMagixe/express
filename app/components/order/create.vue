<script setup lang="ts">
import { CalendarDate, Time } from '@internationalized/date'
import { vMaska } from 'maska/vue'
import * as v from 'valibot'
import { minLength } from 'valibot'

const props = defineProps<{ direction?: boolean; from?: string; to?: string }>()

const { orderData, isOrderCreated, isUserValidate, resetOrder, submitOrder } = useOrder()
const { to_cities, from_cities } = useCities()

const ERROR_EMPTY = 'Обязательное поле для заполнения'
const PHONE_FORMAT = 'Неверный формат номера телефона'

const schema = v.object({
	name: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY)),
	phone: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY), minLength(18, PHONE_FORMAT)),
	to: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY)),
	from: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY)),
	to_address: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY)),
	from_address: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY)),
	date: v.pipe(v.any(), v.nonEmpty(ERROR_EMPTY)),
	time: v.pipe(v.any(), v.nonEmpty(ERROR_EMPTY))
})

function useCities() {
	const CITIES = ref(['Кумертау', 'Мелеуз', 'Салават', 'Уфа'])

	const from_cities = computed(() => {
		return CITIES.value
	})

	const to_cities = computed(() => {
		if (orderData.from === 'Уфа') {
			return CITIES.value.filter((i) => i !== 'Уфа')
		} else {
			return CITIES.value.filter((i) => i === 'Уфа')
		}
	})

	return { from_cities, to_cities }
}

function useOrder() {
	const toast = useToast()
	const isOrderCreated = ref(false)
	const isUserValidate = ref(false)
	const defaultTime = new Time(16, 30, 0)
	const [day, month, year] = new Date(Date.now()).toLocaleDateString('ru-RU').split('.')
	const currentDate = new CalendarDate(Number(year), Number(month), Number(day))

	let orderData = reactive<Order>({
		name: '',
		phone: '',
		from: props.from || 'Кумертау',
		from_address: '',
		to: props.to || 'Уфа',
		to_address: '',
		date: shallowRef(currentDate),
		time: shallowRef(defaultTime)
	})

	const clearToCity = (value: string) => {
		if (value === 'Уфа') orderData.to = ''
	}

	watch(() => orderData.from, clearToCity)

	const resetOrder = (): void => {
		orderData.to_address = ''
		orderData.from_address = ''
		orderData.to = ''
		orderData.from = ''
		orderData.name = ''
		orderData.phone = ''
		orderData.date = currentDate
		orderData.time = defaultTime
	}

	const createOrder = async () => {
		await $fetch('/api/order/create', {
			method: 'POST',
			body: {
				...orderData
			}
		})
	}

	const submitOrder = async () => {
		createOrder()
			.then(() => {
				toast.add({ title: 'Ответ', description: 'Заявка была успешно создана', color: 'success' })
				isOrderCreated.value = true
			})
			.catch((response) => {
				console.log('createOrder: ', response)
				toast.add({ title: 'Ответ', description: 'Произошла ошибка при создании заявки', color: 'error' })
			})
	}

	return { submitOrder, resetOrder, orderData, isOrderCreated, isUserValidate }
}
</script>

<template>
	<SectionTitle v-if="!isOrderCreated" title="Сделать заказ" />
	<div v-if="!isOrderCreated" class="flex flex-col justify-center items-center text-sm">
		<p class="text-gray-200 text-center">
			Заполните пожалуйста форму заказа, перед отправкой убедитесь что все данные введены верно
		</p>
		<p class="text-primary text-center">
			* Внимание при доставке до определенного адреса взымается дополнительная плата!
		</p>
	</div>
	<UForm
		v-if="!isOrderCreated"
		class="w-full flex flex-col justify-start items-center pt-5 gap-5"
		:schema="schema"
		:state="orderData"
		@submit="submitOrder"
		id="form-create-order"
	>
		<div class="flex flex-col lg:grid lg:grid-cols-2 justify-start items-center lg:items-start gap-5">
			<UFormField name="name">
				<UInput v-model="orderData.name" color="primary" placeholder="Ф.И.О" size="xl" id="name" />
			</UFormField>
			<UFormField name="phone">
				<UInput
					v-maska="'+7-(###)-###-##-##'"
					v-model="orderData.phone"
					placeholder="+7-(000)-000-00-00"
					icon="i-lucide-phone"
					size="xl"
					id="phone"
				/>
			</UFormField>
			<UFormField name="from">
				<UInputMenu
					v-model="orderData.from"
					:items="from_cities"
					open-on-focus
					color="primary"
					placeholder="Город отправления"
					size="xl"
					id="from"
				/>
			</UFormField>
			<UFormField name="from_address">
				<UInput
					v-model="orderData.from_address"
					color="primary"
					placeholder="Адрес отправления"
					size="xl"
					id="from_address"
				/>
			</UFormField>
			<UFormField name="to">
				<UInputMenu
					v-model="orderData.to"
					:items="to_cities"
					open-on-focus
					color="primary"
					placeholder="Город прибытия"
					size="xl"
					id="to"
				/>
			</UFormField>
			<UFormField name="to_address">
				<UInput
					v-model="orderData.to_address"
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
							id="date-button"
							class="w-full bg-gray-600 h-12 rounded-[26px] border border-white justify-between text-left"
						>
							<NuxtTime v-if="orderData.date" :datetime="new Date(orderData.date)" locale="ru-RU" />
							<p v-else>Выберете дату</p>
						</UButton>

						<template #content>
							<UCalendar v-model="orderData.date" class="p-2" id="date" />
						</template>
					</UPopover>
				</UFormField>

				<UFormField name="time" class="w-[50%] not-sm:w-[320px]">
					<UInputTime
						v-model="orderData.time"
						class="w-full"
						:hour-cycle="24"
						:default-value="orderData.time"
						id="time"
					/>
				</UFormField>
			</div>

			<div class="min-w-[320px] max-w-110 flex flex-col justify-center items-center">
				<UCheckbox
					v-model="isUserValidate"
					label="Подтверждение"
					description="Даю согласие на обработку персональных данных и подтверждаю правильность введенных данных"
					:ui="{
						base: 'h-5 w-5 text-white bg-gray-600 mt-10 m-2',
						description: 'text-primary/70',
						label: 'text-white text-lg'
					}"
					id="check-user-validate"
				/>
			</div>
		</div>
		<div class="w-full flex flex-row justify-center items-center pt-5 mb-20 gap-5">
			<UButton type="submit" class="button-gradient h-16" icon="i-lucide-send" :disabled="!isUserValidate">
				Отправить
			</UButton>
			<UButton class="button-gradient h-16" @click="resetOrder">Очистить</UButton>
		</div>
	</UForm>
	<div v-else>
		<div class="order-created w-full flex flex-col justify-start items-start mb-20 gap-5">
			<h3 class="text-2xl font-bold text-center">Ваша заявка принята.</h3>
			<p class="w-full text-center">Спасибо, водитель свяжеться с вами.</p>
			<p>
				Имя: <b>{{ orderData.name }}</b>
			</p>
			<p>Телефон: {{ orderData.phone }}</p>
			<p>Из: {{ orderData.from }}, {{ orderData.from_address }}</p>
			<p>До: {{ orderData.to }}, {{ orderData.to_address }}</p>
			<p>Дата: {{ orderData.date }}, время: {{ orderData.time }}</p>
		</div>
	</div>
</template>

<style scoped>
.order-created {
	background: linear-gradient(white 0%, #bdbdbd 100%);
	box-shadow:
		0 4px 4px 0 rgba(0, 0, 0, 0.2),
		0 6px 6px 0 rgba(0, 0, 0, 0.19);
	padding: 26px;
	border-radius: 16px;
	backdrop-filter: blur(5px);
}

h2 {
	color: white;
	text-transform: uppercase;
	font-weight: 500;
}
</style>
