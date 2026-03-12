<script setup lang="ts">
import type { BreadcrumbItem, PageFeatureProps } from '@nuxt/ui'

const items = ref<BreadcrumbItem[]>([
	{
		label: 'Главная',
		to: '/'
	},
	{
		label: 'Наши контакты',
		to: '/contacts'
	}
])

const features = ref<PageFeatureProps[]>([
	{
		title: 'Адрес',
		description: 'Республика Башкортостан. г. Кумертау ул. Машиностроителей, 7а-7',
		icon: 'i-lucide-map-pin'
	},
	{
		title: 'Индивидуальный предприниматель',
		description: 'Садыкова',
		icon: 'i-lucide-user'
	},
	{
		title: 'Телефон',
		description: '+7 (917) 766-68-33',
		icon: 'i-lucide-phone'
	}
])

useSeoMeta({
	title: 'Такси Экспресс | Наши контакты',
	description: 'Такси Экспресс - контактная информация о нас',
	ogTitle: 'Такси Экспресс | Наши контакты',
	ogDescription: 'Такси Экспресс - контактная информация о нас',
	ogImage: 'https://taxi-express.su/images/preview.png',
	ogUrl: 'https://taxi-express.su/',
	ogType: 'website',
	ogLocale: 'ru_RU',
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UContainer class="flex flex-col justify-start gap-5 pt-10">
		<UBreadcrumb
			:items="items"
			:ui="{
				link: 'text-white hover:text-primary',
				separatorIcon: 'text-white'
			}"
		/>
		<UPageSection
			title="Наши контакты"
			description="Контактные данные нашей компании"
			orientation="horizontal"
			:features="features"
			:ui="{
				title: 'text-primary tracking-wider',
				description: 'text-white',
				container: 'py-10 sm:py-10 lg:py-10',
				wrapper: 'text-white flex flex-col justify-start items-start gap-5 w-full',
				links: 'w-full flex flex-col justify-center items-center gap-5',
				footer: 'w-full',
				features: 'text-white'
			}"
		>
			<template #default>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.2850109020333!2d55.81429761257149!3d52.76313311808369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417d11c3a6a1844f%3A0xdc766af0487bdac6!2z0YPQuy4g0JzQsNGI0LjQvdC-0YHRgtGA0L7QuNGC0LXQu9C10LksIDfQsCwgNywg0JrRg9C80LXRgNGC0LDRgywg0KDQtdGB0L8uINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvSwgNDUzMzAw!5e0!3m2!1sru!2sru!4v1773302908411!5m2!1sru!2sru"
					width="600"
					height="450"
					class="w-full h-full min-h-100 rounded-lg"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</template>
		</UPageSection>
	</UContainer>
</template>

<style scoped></style>
