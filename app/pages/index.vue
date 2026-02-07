<script setup lang="ts">

const items = [
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

const reviews = [{
	name: 'Иванов Иван',
	text: 'Отличная компания! Всегда вовремя и с комфортом. Рекомендую всем!',
	rating: 5,
	date: '12.08.2024'
}, {
	name: 'Петров Петр',
	text: 'Очень доволен сервисом. Водители вежливые и профессиональные.',
	rating: 5,
	date: '05.09.2024'
}, {
	name: 'Сидоров Сидор',
	text: 'Хорошая компания, но иногда бывают задержки. В целом, рекомендую.',
	rating: 4,
	date: '05.09.2024'
}]

</script>
<template>
	<div class="first-screen w-full mx-auto h-screen">
		<UContainer>
			<UHeader back="/" class="py-15 border-gray-700 relative">
				<template #left>
					<Logo/>
				</template>
				
				<template #body>
					<Phones />
				</template>
				
				<template #right>
					<Phones class="not-lg:hidden"/>
				</template>
			</UHeader>
			
			<div class="cities-list w-full flex not-md:flex-col justify-center items-center gap-2 my-10">
				<div>КУМЕРТАУ</div>
				<div class="not-md:hidden arrow">→</div>
				<img src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7 md:hidden" />
				<div>МЕЛЕУЗ</div>
				<div class="not-md:hidden arrow">→</div>
				<img src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7 md:hidden" />
				<div>САЛАВАТ</div>
				<div class="not-md:hidden arrow">→</div>
				<img src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7 md:hidden" />
				<div>УФА</div>
				<div class="not-md:hidden arrow">→</div>
				<img src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7 md:hidden" />
				<div>КУМЕРТАУ</div>
			</div>
			
			<p class="font-medium text-[32px] lg:text-[64px] text-white text-center lg:text-left w-full lg:w-[50%] mt-30">Круглосуточные перевозки</p>
			
			<div class="font-thin text-[32px] text-white mt-20 text-center lg:text-left underline decoration-1 underline-offset-5">быстро и с комфортом</div>
		</UContainer>
	</div>
	<section class="two-section w-full mx-auto h-screen">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<h2 class="mt-10 text-[32px] md:text-[40px] lg:text-[64px]">Наши преимущества</h2>
			
			<div class="border-t border-t-white lg:w-[70%] flex flex-col justify-center items-center pt-10 gap-5">
				<template v-for="(item, index) in items" :key="index">
					<div class="item flex flex-col justify-center items-center gap-1 w-full">
						<div class="flex flex-row justify-center items-center gap-2 w-full text-white">
							<span v-for="i in item.message" :class="`uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${i.color}]`">{{ i.text	}}</span>
						</div>
						<div class="text-white sm:text-[14px] md:text-[16px] lg:text-[20px] uppercase">{{ item.description }}</div>
					</div>
					<img v-if="!item.lost" src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7"/>
				</template>
			</div>
		</UContainer>
	</section>
	
	<section class="reviews-section w-full mx-auto h-screen">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<h2 class="border-b text-[32px] md:text-[40px] lg:text-[64px] border-b-white lg:w-[60%] text-center mt-10">Отзывы</h2>
			
			<div class=" w-full flex flex-col justify-start items-center pt-10 gap-10">
				<template v-for="(item, index) in reviews" :key="index">
					<div class="item flex flex-col justify-start items-start gap-1 w-full">
						<div class="flex flex-row justify-between items-start gap-2 w-full text-white">
							<div class="flex flex-row justify-center items-center gap-5">
								<span class="uppercase text-[40px]">{{ item.name }}</span>
								<div class="flex flex-row justify-center items-center gap-1">
									<img v-for="n in item.rating" src="/images/svg/star.svg" alt="star">
								</div>
							</div>
							<div>{{ item.date }}</div>
						</div>
						<div class="text-white text-[20px] uppercase">{{ item.text }}</div>
					</div>
				</template>
				
				<div class="w-full flex flex-row justify-between items-center pt-10 gap-5 font-thin text-[24px] text-white mt-20 underline decoration-1 underline-offset-5 uppercase">
					<p>еще</p>
					<p>оставить отзыв</p>
				</div>
			</div>
		</UContainer>
	</section>
</template>
