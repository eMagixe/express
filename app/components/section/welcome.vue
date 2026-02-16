<script setup lang="ts">
import { sendCallToTelegram } from '~/utils'
</script>

<template>
	<div class="welcome-section w-full pt-10 mx-auto">
		<UContainer class="h-[calc(100vh-100px)] min-h-160 flex flex-col justify-start gap-10 pt-10">
			<div class="cities-list w-full flex flex-col justify-center items-center gap-2">
				<h1 class="flex text-[clamp(1.25rem,3vw,2.5rem)] justify-center items-center gap-1">
					КУМЕРТАУ
					<UIcon name="i-lucide-arrow-right" class="h-6 w-6" />
					УФА
					<UIcon name="i-lucide-arrow-right" class="h-6 w-6" />
					КУМЕРТАУ
				</h1>
				<div class="flex text-[clamp(1.25rem,3vw,2.5rem)] justify-center items-center gap-1">
					МЕЛЕУЗ
					<UIcon name="i-lucide-arrow-right" class="h-6 w-6" />
					УФА
					<UIcon name="i-lucide-arrow-right" class="h-6 w-6" />
					МЕЛЕУЗ
				</div>
				<div class="flex text-[clamp(1.25rem,3vw,2.5rem)] justify-center items-center gap-1">
					САЛАВАТ
					<UIcon name="i-lucide-arrow-right" class="h-6 w-6" />
					УФА
					<UIcon name="i-lucide-arrow-right" class="h-6 w-6" />
					САЛАВАТ
				</div>
			</div>
			<h2
				class="font-medium text-[clamp(1.25rem,3vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]"
			>
				Круглосуточные перевозки
			</h2>
			<NuxtLink
				class="lg:hidden button-gradient w-60 h-20 mx-auto my-10 flex items-center justify-center gap-3"
				icon="i-lucide-phone-call"
				to="tel:+79177666833"
				@click="sendCallToTelegram('+79177666833')"
			>
				<UIcon name="i-lucide-phone-call" size="18" />
				Вызвать
			</NuxtLink>
			<div
				class="text-[clamp(1rem,3vw,2rem)] border-t-3 border-t-primary/20 pt-10 text-white text-center lg:text-left w-full lg:w-[60%]"
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
