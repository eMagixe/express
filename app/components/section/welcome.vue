<script setup lang="ts">
import type { Direction } from '#shared/types/global'

const directions = ref<Direction[]>([])

await useFetch('/api/direction/all', {
	key: 'directions',
	method: 'GET'
}).then(({ data }: any): void => {
	if (data.value) {
		directions.value = data.value as Direction[]
	}
})
</script>
<template>
	<div class="welcome-section w-full mx-auto mb-10">
		<UContainer class="h-[calc(100vh-100px)] min-h-160 flex flex-col justify-start gap-5 pt-10">
			<h1
				class="font-medium text-[clamp(1.5rem,2.5vw,3rem)] text-white text-center w-full"
			>
				Такси межгород Кумертау — Уфа
			</h1>
			<NuxtLink
				class="lg:hidden button-gradient w-60 h-15 mx-auto my-5 flex items-center justify-center gap-3"
				icon="i-lucide-phone-call"
				@click="useCall().openModalCall('+791****6833')"
			>
				<UIcon name="i-lucide-phone-call" size="18" />
				Вызвать
			</NuxtLink>
			<div class="cities-list w-full flex flex-row justify-center items-center gap-10">
				<UPricingPlan
					v-for="direction in directions"
					class="not-sm:not-last:hidden not-lg:first:hidden p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80"
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
			<div
				class="flex flex-col md:flex-row justify-between items-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] mx-5"
			>
				<p class="text-sm text-white">* требуется дополнительная оплата</p>
				<NuxtLink class="text-primary underline flex flex-row justify-center items-center gap-2" to="/directions"><UIcon name="i-lucide-split"/> Основные направления</NuxtLink>
			</div>
			<div
				class="not-sm:hidden text-[clamp(1rem,3vw,2rem)] pt-10 mx-auto text-white text-center w-2/3"
			>
				Быстро и с комфортом доставим вас в нужное место в любое время дня и ночи
			</div>
		</UContainer>
	</div>
</template>

<style scoped>
.welcome-section {
	@media (min-width: 1122px) {
		background:
			linear-gradient(rgba(10, 11, 8, 1) 0%, rgba(10, 11, 8, 0) 50%, rgba(10, 11, 8, 1) 98%),
			url('/images/webp/resize/16-9.webp') no-repeat center;
		background-size: cover;
	}

	@media (max-width: 1122px) and (min-width: 783px) {
		background:
			linear-gradient(rgba(10, 11, 8, 1) 0%, rgba(10, 11, 8, 0) 50%, rgba(10, 11, 8, 1) 98%),
			url('/images/webp/resize/5-4.webp') no-repeat center;
		background-size: cover;
	}

	@media (max-width: 783px) and (min-width: 573px) {
		background:
			linear-gradient(rgba(10, 11, 8, 1) 0%, rgba(10, 11, 8, 0) 50%, rgba(10, 11, 8, 1) 98%),
			url('/images/webp/resize/4-5.webp') no-repeat center;
		background-size: cover;
	}

	@media (max-width: 573px) {
		background:
			linear-gradient(rgba(10, 11, 8, 1) 0%, rgba(10, 11, 8, 0) 50%, rgba(10, 11, 8, 1) 98%),
			url('/images/webp/resize/9-16.webp') no-repeat center;
		background-size: cover;
	}
}

.cities-list {
	font-style: italic;
	font-size: 32px;
	color: #ffc400;

	span {
		color: white;
	}
}
</style>