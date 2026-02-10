<script setup lang="ts"></script>

<template>
	<div class="welcome-section w-full pt-10 mx-auto">
		<UContainer class="h-[calc(100vh-100px)] min-h-160 flex flex-col justify-start gap-20">
			<div class="cities-list w-full flex flex-col justify-center items-center gap-2">
				<div class="flex text-[clamp(1.25rem,3vw,2.5rem)] justify-center items-center gap-1">
					КУМЕРТАУ
					<UIcon name="i-lucide-arrow-right" class="h-6 w-6" />
					УФА
					<UIcon name="i-lucide-arrow-right" class="h-6 w-6" />
					КУМЕРТАУ
				</div>
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
			<div
				class="font-medium text-[clamp(1.25rem,3vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]"
			>
				Круглосуточные перевозки
			</div>
			<NuxtLink
				class="lg:hidden button-gradient w-80 h-20 mx-auto my-10 uppercase flex items-center justify-center gap-3"
				icon="i-lucide-phone-call"
				to="tel:+79177666833"
			>
				<UIcon name="i-lucide-phone-call" size="18" />
				Вызвать
			</NuxtLink>
			<div
				class="font-thin text-[clamp(1rem,3vw,2rem)] text-white text-center lg:text-left underline decoration-1 underline-offset-5"
			>
				быстро и с комфортом
			</div>
		</UContainer>
	</div>
</template>

<style scoped></style>
