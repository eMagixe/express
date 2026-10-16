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
		label: 'Из Уфы'
	}
])

useSeoMeta({
	title: 'Такси Экспресс | направление из Уфы в города Башкортостана',
	description:
		'Такси из Уфы | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogTitle: 'Такси Экспресс | направление из Уфы в города Башкортостана',
	ogDescription:
		'Такси из Уфы | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogUrl: 'https://taxi-express.su/directions/from-ufa',
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
	<div class="directions-page">
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
			title="Из Уфы"
			description="до крупных городов Башкортостана"
			orientation="horizontal"
			:ui="{
				title: 'text-primary tracking-wider',
				description: 'text-white',
				container: 'py-10 sm:py-10 lg:py-10',
				wrapper: 'text-white flex flex-col justify-start items-start gap-5 h-full w-full',
				links: 'w-full flex flex-col justify-center items-center gap-5',
				footer: 'w-full',
				features: 'text-white'
			}"
		/>
		<UContainer>
			<div class="w-full flex flex-col justify-center items-center gap-10">
				<UPricingPlan
					v-for="direction in directions"
					orientation="horizontal"
					class="p-10 bg-linear-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full"
					:title="`Уфа - ${direction.name}`"
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
					label: 'Позвонить',
					trailingIcon: 'i-lucide-phone',
					onClick: () => useCall().toCall('+79177666833')
				}"
				/>
				<p class="text-sm text-gray-400 text-center mb-10">* требуется дополнительная оплата</p>
			</div>
		</UContainer>
	</div>
</template>
