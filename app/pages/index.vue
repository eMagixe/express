<script setup lang="ts">
useSeoMeta({
	title: 'Такси Экспресс | Межгороднее такси из Кумертау Уфа',
	description:
		'Такси Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogTitle: 'Такси Экспресс | Межгороднее такси из Кумертау Уфа',
	ogDescription:
		'Такси Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogImage: 'https://taxi-express.su/images/preview.png',
	ogUrl: 'https://taxi-express.su/',
	ogType: 'website',
	ogLocale: 'ru_RU',
	twitterCard: 'summary_large_image'
})

useScript('/js/yandex-metrika.js', {
	tagPosition: 'bodyClose'
})
</script>
<template>
	<UApp>
		<SectionHeader />
		<main>
			<SectionWelcome />
			<LazySectionAdvantages />
			<LazySectionReviews />
			<LazySectionQuestions />
			<LazySectionOrder />
		</main>
		<LazySectionFooter />
	</UApp>
</template>
