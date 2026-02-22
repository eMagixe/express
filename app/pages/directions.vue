<script setup lang="ts"></script>

<template>
	<UContainer class="directions-page h-[calc(100vh-100px)] min-h-160 flex flex-col justify-start gap-5 pt-10">
		<p>Направление</p>
		<h1 class="flex text-[clamp(1.25rem,3vw,2.5rem)] justify-start items-center gap-1">
			КУМЕРТАУ
			<UIcon name="i-lucide-arrow-right" class="h-6 w-6" />
			УФА
		</h1>
		<div>Одно из основных направлений нашего такси</div>
	</UContainer>
</template>

<style scoped>
.directions-page {
	h1 {
		font-style: italic;
		color: #ffc400;

		span {
			color: white;
		}
	}
	color: white;
}
</style>
