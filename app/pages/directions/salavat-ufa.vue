<script setup lang="ts">
import type { BreadcrumbItem, PageFeatureProps } from '@nuxt/ui'
import type { Direction } from '#shared/types/global'

const items = ref<BreadcrumbItem[]>([
	{
		label: 'Главная',
		to: '/'
	},
	{
		label: 'Все направления',
		to: '/directions'
	},
	{
		label: 'Салават - Уфа'
	}
])

const features = ref<PageFeatureProps[]>([
	{
		title: 'Расстояние',
		description: '163 км',
		icon: 'i-lucide-arrow-right-left'
	},
	{
		title: 'Расчетное время в пути',
		description: '~ 2 часа 30 мин',
		icon: 'i-lucide-clock'
	},
	{
		title: 'Стоимость',
		description: 'от 1200 руб *',
		icon: 'i-lucide-receipt-russian-ruble'
	}
])

useSeoMeta({
	title: 'Такси Экспресс | направление из Салавата в Уфу',
	description:
		'Такси Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogTitle: 'Такси Экспресс | направление из Салавата в Уфу',
	ogDescription:
		'Такси Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogUrl: 'https://taxi-express.su/directions/salavat-ufa',
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

const direction = computed(() => {
	const [current] = directions.value.filter((direction: Direction) => {
		return direction.slug === 'salavat-ufa'
	})

	if (current) {
		current.features = [
			{
				title: 'Расстояние',
				description: `${current.distance} км`,
				icon: 'i-lucide-arrow-right-left'
			},
			{
				title: 'Расчетное время в пути',
				description: current.time,
				icon: 'i-lucide-clock'
			},
			{
				title: 'Стоимость',
				description: `от ${current.price} руб *`,
				icon: 'i-lucide-receipt-russian-ruble'
			}
		]
		return current
	} else return null
})
</script>

<template>
	<div v-if="direction" class="directions-page">
		<UContainer class="pt-10">
			<UBreadcrumb
				:items="items"
				:ui="{
					link: 'text-white hover:text-primary',
					separatorIcon: 'text-white'
				}"
			/>
		</UContainer>
		<UPageSection
			:title="direction.name"
			:description="direction.description"
			orientation="horizontal"
			:features="direction.features"
			:ui="{
				title: 'text-primary tracking-wider',
				description: 'text-white',
				container: 'py-10 sm:py-10 lg:py-10',
				wrapper: 'text-white flex flex-col justify-start items-start gap-5 h-full w-full',
				links: 'w-full flex flex-col justify-center items-center gap-5',
				footer: 'w-full',
				features: 'text-white'
			}"
		>
			<template #default>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d740479.3925558841!2d55.03231519424448!3d54.001191569699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x43d7fffbafa7009d%3A0x56073e4216dfddeb!2z0KHQsNC70LDQstCw0YIsINCg0LXRgdC_LiDQkdCw0YjQutC-0YDRgtC-0YHRgtCw0L0!3m2!1d53.386043699999995!2d55.925947199999996!4m5!1s0x43d93a259216bce1%3A0xaceec0921eda92cc!2z0KPRhNCwLCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d54.734790999999994!2d55.9578555!5e0!3m2!1sru!2sru!4v1771932003232!5m2!1sru!2sru"
					class="w-full h-full min-h-100 rounded-lg"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</template>
		</UPageSection>
		<UContainer>
			<OrderCreate :direction="true" from="Салават" to="Уфа" />
		</UContainer>
	</div>
</template>
