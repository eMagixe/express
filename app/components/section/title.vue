<script setup lang="ts">
const {title} = defineProps<{
	title: string
}>()
</script>

<template>
	<h2 class="w-full border-b border-b-white text-[22px] md:text-[36px] lg:text-[48px] text-center">{{ title }}</h2>
</template>