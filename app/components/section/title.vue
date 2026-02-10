<script setup lang="ts">
const { title } = defineProps<{
	title: string
}>()
</script>

<template>
	<h2 class="w-full text-[clamp(1.25rem,3vw,3rem)] text-center">{{ title }}</h2>
</template>
