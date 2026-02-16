<script setup lang="ts">
type Question = {
	label: string
	content: string
}

const items = useState('questions', () => {
	return [
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
	] as Question[]
})
</script>

<template>
	<div class="section-questions w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<SectionTitle title="Популярные вопросы" />
			<div class="w-full animation-box flex flex-col justify-start items-center pt-10 gap-10">
				<UPageList class="accordion-questions">
					<UPageCard
						v-for="(item, index) in items"
						:key="useId()"
						variant="ghost"
						class="rounded-none"
						:class="{
							'border-b border-b-gray-200': index !== items.length - 1
						}"
					>
						<template #body>
							<h3 class="text-xl mb-5">{{ item.label }}</h3>
							<p class="text-sm">{{ item.content }}</p>
						</template>
					</UPageCard>
				</UPageList>
			</div>
		</UContainer>
	</div>
</template>

<style scoped>
.section-questions {
	background: rgba(255, 146, 0, 0.7);

	.accordion-questions {
		background: linear-gradient(white 0%, #f3f3f3 100%);
		box-shadow:
			0 4px 4px 0 rgba(0, 0, 0, 0.2),
			0 6px 6px 0 rgba(0, 0, 0, 0.19);
		border-bottom-right-radius: 16px;
		border-top-left-radius: 16px;
		backdrop-filter: blur(5px);
	}

	h2 {
		color: white;
		text-transform: uppercase;
		font-weight: 500;
	}
}
</style>
