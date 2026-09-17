<script setup lang="ts">
const props = defineProps({
	classes: String,
})

</script>

<template>
	<div :class="classes">
		<NuxtLink to="/contacts">
			<UIcon name="i-lucide-contact" size="18" />
			Контакты
		</NuxtLink>
		<NuxtLink to="/vacancies">
			<UIcon name="i-lucide-clipboard-list" size="18" />
			Вакансии
		</NuxtLink>
	</div>
</template>
