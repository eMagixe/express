<script setup lang="ts"></script>

<template>
	<div class="flex flex-col sm:flex-row justify-center items-center gap-4">
		<div class="flex flex-col gap-2 text-[#FFCC00] text-[24px] italic">
			<a href="tel:+79177666833">
				<UIcon name="i-lucide-phone" size="18" />
				+7 (917) 766-68-33
			</a>
			<a href="tel:+79273242582">
				<UIcon name="i-lucide-phone" size="18" />
				+7 (927) 324-25-82
			</a>
		</div>
		<NuxtLink
			class="button-gradient h-16 flex items-center justify-center gap-3"
			icon="i-lucide-phone-call"
			to="tel:+79177666833"
		>
			<UIcon name="i-lucide-phone-call" size="18" />
			Вызвать
		</NuxtLink>
	</div>
</template>

<style scoped></style>
