<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
	{
		label: 'Забираете ли Вы пассажиров из поселков и деревень?',
		content:
			'Да, конечно. Мы так же работаем по таким населенным пунктам как Ермолаево, Алексеевка, Бальза, Бахмут, Шабагиш, Старая и Новая Отрада и другие пункты Куюргазинского района.'
	},
	{
		label: 'В какое время работает диспетчер?',
		content: 'Диспетчер принимает заявки круглосуточно. И предоставляет полную и актуальную информацию.'
	},
	{
		label: 'Какие конечные пункты поездок?',
		content:
			'Мы довозим до вокзалов, центров, больниц, а так же до конкретных адресов в крупных городах Республики Башкортостан.'
	},
	{
		label: 'Как оплачивается багаж?',
		content: 'Первая сумка - бесплатно. За остальные взимается плата которую всегда можно узнать у диспетчера.'
	},
	{
		label: 'Перевозите ли Вы посылки?',
		content: 'Да, мы перевозим посылки до определенных габаритов которые можно уточнить у диспетчера.'
	}
])
</script>

<template>
	<div class="section-questions w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<SectionTitle title="Популярные вопросы" />
			<div class="w-full flex flex-col justify-start items-center pt-10 gap-10">
				<UAccordion :items="items" class="accordion-questions" />
			</div>
		</UContainer>
	</div>
</template>

<style scoped></style>
