<script setup lang="ts"></script>
<template>
	<div class="welcome-section w-full mx-auto mb-10">
		<UContainer class="h-[calc(100vh-100px)] min-h-160 flex flex-col justify-start gap-5 pt-10">
			<div class="cities-list w-full flex flex-row justify-center items-center gap-10">
				<UPricingPlan
					class="p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80"
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
					class="p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] not-md:hidden min-w-80"
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
					class="p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] not-lg:hidden min-w-80"
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
			<div
				class="flex flex-col md:flex-row justify-between items-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] mx-5"
			>
				<p class="text-sm text-white">* требуется дополнительная оплата</p>
				<NuxtLink class="text-primary underline" to="/directions">Список основных направлений</NuxtLink>
			</div>

			<h2
				class="font-medium text-[clamp(1.25rem,3vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]"
			>
				Круглосуточные перевозки
			</h2>
			<NuxtLink
				class="lg:hidden button-gradient w-60 h-15 mx-auto my-5 flex items-center justify-center gap-3"
				icon="i-lucide-phone-call"
				to="tel:+79177666833"
				@click="utils.sendCallToTelegram('+79177666833')"
			>
				<UIcon name="i-lucide-phone-call" size="18" />
				Вызвать
			</NuxtLink>
			<div
				class="not-sm:hidden text-[clamp(1rem,3vw,2rem)] border-t-3 border-t-primary/20 pt-10 text-white text-center lg:text-left w-full lg:w-[60%]"
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
