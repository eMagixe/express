<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'
import type { Direction } from '#shared/types/global'

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

const directions = ref<Direction[]>([])

await useLazyFetch('/api/direction/all', {
	key: 'directions',
	method: 'GET'
}).then(({ data }: any): void => {
	if (data.value) {
		directions.value = data.value as Direction[]
	}
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
				v-for="direction in directions"
				orientation="horizontal"
				class="p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px]"
				:title="direction.name"
				description="Пассажирские перевозки"
				:price="`от ${direction.price} руб.`"
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
					label: 'Подробнее',
					to: `/directions/${direction.slug}`,
					trailingIcon: 'i-lucide-arrow-right'
				}"
			/>
		</div>
		<p class="text-sm text-gray-400 text-center mb-10">* требуется дополнительная оплата</p>
	</UContainer>
</template>
