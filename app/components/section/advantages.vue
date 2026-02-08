<script setup lang="ts">

type Advantage = {
	message: {
		color: string,
		text: string
	}[],
	description: string,
	lost?: boolean
}

const advantages = <Advantage[]>[
	{
		message: [
			{
				color: '#FFCC00',
				text: 'Высокий стаж'
			},
			{
				color: '#FFFFFF',
				text: 'водителей'
			}
		],
		description: 'стаж наших водителей от 7 - 10 лет опыта'
	},
	{
		message: [
			{
				color: '#FFFFFF',
				text: 'скорость и'
			},
			{
				color: '#FFCC00',
				text: 'доступность'
			}
		],
		description: 'работаем круглосуточно'
	},
	{
		message: [
			{
				color: '#FFFFFF',
				text: 'Безопасность и'
			},
			{
				color: '#FFCC00',
				text: 'гарантия'
			}
		],
		description: 'предоставляем отчетные документы'
	},
	{
		message: [
			{
				color: '#FFFFFF',
				text: 'Перевозка и'
			},
			{
				color: '#FFCC00',
				text: 'доставка'
			}
		],
		description: 'осуществляем перевозки и доставки посылок',
		lost: true
	}
]
</script>

<template>
	<section class="section-advantages w-full mx-auto sm:h-screen pb-15">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<SectionTitle title="Наши преимущества"/>
			<div class="lg:w-[70%] flex flex-col justify-center items-center pt-10 gap-5">
				<template v-for="(item, index) in advantages as Advantage[]" :key="index">
					<div class="item flex flex-col justify-center items-center gap-1 w-full">
						<div class="flex flex-row justify-center items-center gap-2 w-full text-white">
							<span v-for="i in item.message"
							      :class="`uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${i.color}]`">{{
									i.text
								}}</span>
						</div>
						<div class="text-white sm:text-[10px] md:text-[14px] lg:text-[20px] w-full text-center uppercase">
							{{ item.description }}
						</div>
					</div>
					<img v-if="!item.lost" src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7"/>
				</template>
			</div>
		</UContainer>
	</section>
</template>

<style scoped>

</style>