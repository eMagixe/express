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
			
			<div class="cities-list w-full flex not-md:hidden justify-center items-center gap-2 my-10">
				<div class="not-lg:text-lg">КУМЕРТАУ</div>
				<div class="arrow">→</div>
				<div class="not-lg:text-lg">МЕЛЕУЗ</div>
				<div class="arrow">→</div>
				<div class="not-lg:text-lg">САЛАВАТ</div>
				<div class="arrow">→</div>
				<div class="not-lg:text-lg">УФА</div>
				<div class="arrow">→</div>
				<div class="not-lg:text-lg">КУМЕРТАУ</div>
			</div>
			
			<p class="font-medium text-[64px] text-white w-[50%] mt-30">Круглосуточные перевозки</p>
			
			<div class="font-thin text-[32px] text-white mt-20 underline decoration-1 underline-offset-5">быстро и с комфортом</div>
		</UContainer>
	</div>
	<section class="two-section w-full mx-auto h-screen">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<h2 class="mt-10">Наши преимущества</h2>
			
			<div class="border-t border-t-white w-[60%] flex flex-col justify-center items-center pt-10 gap-5">
				<template v-for="(item, index) in items" :key="index">
					<div class="item flex flex-col justify-center items-center gap-1 w-full">
						<div class="flex flex-row justify-center items-center gap-2 w-full text-white">
							<span v-for="i in item.message" :class="`uppercase text-[40px] text-[${i.color}]`">{{ i.text	}}</span>
						</div>
						<div class="text-white text-[20px] uppercase">{{ item.description }}</div>
					</div>
					<img v-if="!item.lost" src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7"/>
				</template>
			</div>
		</UContainer>
	</section>
	
	<section class="reviews-section w-full mx-auto h-screen">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<h2 class="mt-10">Отзывы</h2>
			
			<div class="border-t border-t-white w-[60%] flex flex-col justify-center items-center pt-10 gap-5">
				<template v-for="(item, index) in items" :key="index">
					<div class="item flex flex-col justify-center items-center gap-1 w-full">
						<div class="flex flex-row justify-center items-center gap-2 w-full text-white">
							<span v-for="i in item.message" :class="`uppercase text-[40px] text-[${i.color}]`">{{ i.text	}}</span>
						</div>
						<div class="text-white text-[20px] uppercase">{{ item.description }}</div>
					</div>
					<img v-if="!item.lost" src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7"/>
				</template>
			</div>
		</UContainer>
	</section>
</template>
