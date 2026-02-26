<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const items = ref<BreadcrumbItem[]>([
	{
		label: 'Главная',
		to: '/'
	},
	{
		label: 'Все направления',
		to: '/directions'
	}
])

useSeoMeta({
	title: 'Такси Экспресс | Все направления',
	description:
		'Страница всех доступных основных направлений нашего такси | Такси Express - быстро, комфортно и надежно',
	ogTitle: 'Такси Экспресс | Все направления',
	ogDescription:
		'Страница всех доступных основных направлений нашего такси | Такси Express - быстро, комфортно и надежно',
	ogUrl: 'https://taxi-express.su/directions',
	ogType: 'website',
	ogLocale: 'ru_RU',
	twitterCard: 'summary_large_image'
})
</script>
<template>
	<UContainer class="flex flex-col justify-start gap-5 pt-10">
		<UBreadcrumb
			:items="items"
			:ui="{
				link: 'text-white hover:text-primary',
				separatorIcon: 'text-white'
			}"
		/>
		<SectionTitle class="text-white" title="Все направления" />

		<div class="cities-list w-full flex flex-col justify-center items-center gap-10">
			<UPricingPlan
				orientation="horizontal"
				class="p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px]"
				title="Кумертау - Уфа"
				description="Пассажирские перевозки"
				price="от 1300 руб."
				:features="[
					'Передача документации и посылок',
					'До аэро - жд вокзалов и больниц',
					'До места указанного заказчиком *',
					'Билеты, отчётные документы, qr-коды'
				]"
				:ui="{
					root: 'ring-0 item-direction',
					title: 'text-primary title',
					description: 'text-white',
					price: 'text-primary',
					featureTitle: 'text-white',
					button: 'button-gradient'
				}"
				:button="{
					label: 'Перейти к заказу',
					to: '/directions/kumertau-ufa',
					trailingIcon: 'i-lucide-arrow-right'
				}"
			/>
			<UPricingPlan
				orientation="horizontal"
				class="p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80"
				title="Мелеуз - Уфа"
				description="Пассажирские перевозки"
				price="от 1300 руб."
				:features="[
					'Передача документации и посылок',
					'До аэро - жд вокзалов и больниц',
					'До места указанного заказчиком *',
					'Билеты, отчётные документы, qr-коды'
				]"
				:ui="{
					root: 'ring-0 item-direction',
					title: 'text-primary title',
					description: 'text-white',
					price: 'text-primary',
					featureTitle: 'text-white',
					button: 'button-gradient'
				}"
				:button="{
					label: 'Перейти к заказу',
					to: '/directions/meleuz-ufa',
					trailingIcon: 'i-lucide-arrow-right'
				}"
			/>
			<UPricingPlan
				orientation="horizontal"
				class="p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80"
				title="Салават - Уфа"
				description="Пассажирские перевозки"
				price="от 1200 руб."
				:features="[
					'Передача документации и посылок',
					'До аэро - жд вокзалов и больниц',
					'До места указанного заказчиком *',
					'Билеты, отчётные документы, qr-коды'
				]"
				:ui="{
					root: 'ring-0 item-direction',
					title: 'text-primary title',
					description: 'text-white',
					price: 'text-primary',
					featureTitle: 'text-white',
					button: 'button-gradient'
				}"
				:button="{
					label: 'Перейти к заказу',
					to: '/directions/salavat-ufa',
					trailingIcon: 'i-lucide-arrow-right'
				}"
			/>
		</div>
		<p class="text-sm text-gray-400 text-center mb-10">* требуется дополнительная оплата</p>
	</UContainer>
</template>
