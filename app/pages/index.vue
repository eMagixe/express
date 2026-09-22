<script setup lang="ts">
useSeoMeta({
	title: 'Заказать такси из Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа. А так же из Уфы в Кумертау, Мелеуз и Салават',
	description:
		'Такси Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogTitle: 'Заказать такси из Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа. А так же из Уфы в Кумертау, Мелеуз и Салават',
	ogDescription:
		'Такси Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!',
	ogImage: 'https://taxi-express.su/images/preview.png',
	ogUrl: 'https://taxi-express.su',
	ogType: 'website',
	ogLocale: 'ru_RU',
	twitterCard: 'summary_large_image'
})

useHead({
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'LocalBusiness',
				name: 'Такси Экспресс',
				url: 'https://taxi-express.su',
				telephone: '+7-917-766-68-33',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Кумертау',
					addressCountry: 'RU'
				},
				openingHours: 'Mo-Su 00:00-24:00',
				priceRange: '₽'
			})
		},
	]
})
</script>
<template>
	<SectionWelcome />
	<SectionAdvantages />
	<SectionReviews />
	<SectionQuestions />
	<LazySectionOrder />
</template>