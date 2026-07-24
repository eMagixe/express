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
	},
	{
		label: 'Мелеуз - Уфа'
	}
])

useSeoMeta({
	title: 'Такси Экспресс | направление из Мелеуза в Уфу',
	description:
		'Такси Мелеуз - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogTitle: 'Такси Экспресс | направление из Мелеуза в Уфу',
	ogDescription:
		'Такси Мелеуз - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogUrl: 'https://taxi-express.su/directions/meleuz-ufa',
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
		return direction.slug === 'meleuz-ufa'
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
					src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1205311.4411714158!2d54.57891870466356!3d53.8406600240511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x417d6a1a2a059d89%3A0xae2a0a2ef51f97ef!2z0JzQtdC70LXRg9C3LCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d52.9610676!2d55.9282142!4m5!1s0x43d93a259216bce1%3A0xaceec0921eda92cc!2z0KPRhNCwLCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d54.734790999999994!2d55.9578555!5e0!3m2!1sru!2sru!4v1771930987840!5m2!1sru!2sru"
					class="w-full h-full min-h-100 rounded-lg"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</template>
		</UPageSection>
		<UContainer>
			<OrderCreate :direction="true" from="Мелеуз" to="Уфа" />
		</UContainer>
	</div>
</template>
