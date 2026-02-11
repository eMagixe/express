<script setup lang="ts">
useSeoMeta({
	title: 'Такси Экспресс | Межгороднее такси из Кумертау Уфа',
	ogTitle: 'Такси Экспресс | Межгороднее такси из Кумертау Уфа',
	description:
		'Такси Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogDescription:
		'Такси Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	twitterCard: 'summary_large_image'
})
</script>
<template>
	<UApp>
		<SectionHeader />
		<SectionWelcome />
		<LazySectionAdvantages hydrate-on-visible />
		<LazySectionReviews hydrate-on-visible />
		<LazySectionOrder hydrate-on-visible />
		<LazySectionFooter hydrate-on-visible />
	</UApp>
</template>
