<script setup lang="ts">
import type { BreadcrumbItem, PageFeatureProps } from '@nuxt/ui'

const items = ref<BreadcrumbItem[]>([
	{
		label: 'Главная',
		to: '/'
	},
	{
		label: 'Наши вакансии',
		to: '/vacancies'
	}
])

useSeoMeta({
	title: 'Такси Экспресс | Вакансии',
	description: 'Такси Экспресс - список наших вакансий',
	ogTitle: 'Такси Экспресс | Вакансии',
	ogDescription: 'Такси Экспресс - список наших вакансий',
	ogImage: 'https://taxi-express.su/images/preview.png',
	ogUrl: 'https://taxi-express.su/',
	ogType: 'website',
	ogLocale: 'ru_RU',
	twitterCard: 'summary_large_image'
})

const features = ref<PageFeatureProps[]>([
	{
		title: 'Оформление',
		description: 'По ТК РФ',
		icon: 'i-lucide-clipboard-list'
	},
	{
		title: 'Стаж',
		description: 'не менее 7-10 лет',
		icon: 'i-lucide-clock'
	},
	{
		title: 'Требования',
		description: 'Отсутствие вредных привычек!',
		icon: 'i-lucide-circle-alert'
	},
	{
		title: 'Оплата',
		description: 'от 60 000 руб',
		icon: 'i-lucide-receipt-russian-ruble'
	}
])
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
			title="Наши вакансии"
			description="Список вакансий нашей компании"
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
				<div class="flex flex-col justify-start items-center gap-5">
					<UPricingPlan
						class="p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full"
						title="Cо своим авто"
						description="Приветствуется межвахтовые водители"
						:ui="{
							root: 'ring-0 item-direction',
							title: 'text-primary title',
							description: 'text-white',
							price: 'text-primary',
							featureTitle: 'text-white',
							button: 'button-gradient'
						}"
						:button="{
							label: 'Позвонить',
							to: 'tel:+79177666833',
							trailingIcon: 'i-lucide-phone-call'
						}"
					/>
					<UPricingPlan
						class="p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full"
						title="На авто фирмы"
						description="Водитель на постоянную работу"
						:ui="{
							root: 'ring-0 item-direction',
							title: 'text-primary title',
							description: 'text-white',
							price: 'text-primary',
							featureTitle: 'text-white',
							button: 'button-gradient'
						}"
						:button="{
							label: 'Позвонить',
							to: 'tel:+79177666833',
							trailingIcon: 'i-lucide-phone-call'
						}"
					/>
				</div>
			</template>
		</UPageSection>
	</UContainer>
</template>

<style scoped></style>
