<script setup lang="ts">
import {CalendarDate} from '@internationalized/date'

const inputDate = useTemplateRef('inputDate')

const dateNow = new Date(Date.now())
const currentDate = new CalendarDate(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDay())
const date = shallowRef(currentDate)

const check = ref(false)

const data = reactive({
	name: '',
	from: '',
	from_address: '',
	to: '',
	to_address: '',
})

const cities = ref(['Кумертау', 'Мелеуз', 'Салават', 'Уфа'])

const from_cities = computed(() => cities.value.filter(i => i !== data.to))

const to_cities = computed(() => cities.value.filter(i => i !== data.from))

const reset = (): void => {
	data.to_address = ''
	data.from_address = ''
	data.to = ''
	data.from = ''
	data.name = ''
	date.value = currentDate
}
</script>

<template>
	<section class="section-order w-full mx-auto h-screen pt-20">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<SectionTitle title="Сделать заявку"/>
			<div class=" w-full flex flex-col justify-start items-center pt-10 gap-10">
				<UInput
						v-model="data.name"
						color="primary"
						placeholder="Ф.И.О"
						size="xl"
						:ui="{
							base: 'h-12 text-white bg-gray-600 rounded-[26px] w-[320px] sm:w-[440px]',
						}"
				/>
				<UInputMenu
						v-model="data.from"
						:items="from_cities"
						color="primary"
						placeholder="Город отправления"
						size="xl"
						:ui="{
							base: 'h-12 text-white bg-gray-600 rounded-[26px] w-[320px] sm:w-[440px]',
							item: 'text-white bg-gray-600'
						}"
				/>
				<UInput
						v-model="data.from_address"
						color="primary"
						placeholder="Адрес отправления"
						size="xl"
						:ui="{
							base: 'h-12 text-white bg-gray-600 rounded-[26px] w-[320px] sm:w-[440px]',
						}"
				/>
				<UInputMenu
						v-model="data.to"
						:items="to_cities"
						color="primary"
						placeholder="Город прибытия"
						size="xl"
						:ui="{
							base: 'h-12 text-white bg-gray-600 rounded-[26px] w-[320px] sm:w-[440px]',
							item: 'text-white bg-gray-600'
						}"
				/>
				<UInput
						v-model="data.to_address"
						color="primary"
						placeholder="Адрес прибытия"
						size="xl"
						:ui="{
							base: 'h-12 text-white bg-gray-600 rounded-[26px] w-[320px] sm:w-[440px]',
						}"
				/>
				<UInputDate
						ref="inputDate"
						v-model="date"
						:ui="{
							base: 'h-12 text-white bg-gray-600 rounded-[26px] w-[320px] sm:w-[440px] flex justify-center items-center gap-10',
						}"
				>
					<template #trailing>
						<UPopover
								:reference="inputDate?.inputsRef[3]?.$el"
								:ui="{
											content: 'text-white bg-gray-600 w-[320px] sm:w-[440px] rounded-[26px]',
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
								<UCalendar
										v-model="date"
										class="p-2"
								/>
							</template>
						</UPopover>
					</template>
				</UInputDate>
				
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
				
				
				<div class="w-full flex flex-row justify-center items-center pt-5 gap-5">
					<UButton
							class="button-gradient uppercase h-16"
							icon="i-lucide-send"
							:disabled="!check"
					>
						Отправить
					</UButton>
					<UButton
							class="button-gradient uppercase h-16"
							@click="reset"
					>
						Очистить
					</UButton>
				</div>
			</div>
		</UContainer>
	</section>
</template>

<style scoped>

</style>