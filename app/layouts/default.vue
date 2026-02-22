<script setup lang="ts">
useScript('/js/yandex-metrika.js', {
	tagPosition: 'bodyClose'
})
</script>

<template>
	<UApp>
		<SectionHeader />
		<main>
			<NuxtPage />
		</main>
		<LazySectionFooter />
	</UApp>
</template>
