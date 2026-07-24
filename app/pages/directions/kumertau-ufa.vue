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
		label: 'Кумертау - Уфа'
	}
])

useSeoMeta({
	title: 'Такси Экспресс | направление из Кумертау в Уфу',
	description:
		'Такси Кумертау - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogTitle: 'Такси Экспресс | направление из Кумертау в Уфу',
	ogDescription:
		'Такси Кумертау - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogUrl: 'https://taxi-express.su/directions/kumertau-ufa',
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
		return direction.slug === 'kumertau-ufa'
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
					class="w-full h-full min-h-100 rounded-lg"
					src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1208092.1886191373!2d54.56173983277664!3d53.74399896852182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x417d11bb52a09059%3A0x4687ffa7b692119d!2z0JrRg9C80LXRgNGC0LDRgywg0KDQtdGB0L8uINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvQ!3m2!1d52.7637387!2d55.811568199999996!4m5!1s0x43d93a259216bce1%3A0xaceec0921eda92cc!2z0KPRhNCwLCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d54.734790999999994!2d55.9578555!5e0!3m2!1sru!2sru!4v1771857283209!5m2!1sru!2sru"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</template>
		</UPageSection>
		<UContainer>
			<OrderCreate :direction="true" from="Кумертау" to="Уфа" />
		</UContainer>
	</div>
</template>
