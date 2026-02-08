<script setup lang="ts">
type Review = {
	name: string,
	text: string,
	rating: number,
	date: string
}

const reviews = <Review[]>[{
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

const review = ref<Review>({
	name: '',
	text: '',
	rating: 0,
	date: ''
})
</script>

<template>
	<section class="section-reviews w-full mx-auto sm:h-screen py-20">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<SectionTitle title="Отзывы"/>
			<div class=" w-full flex flex-col justify-start items-center pt-10 gap-10">
				<template v-for="(item, index) in reviews as Review[]" :key="index">
					<div class="item flex flex-col justify-start items-start gap-1 w-full">
						<div class="flex flex-row justify-between items-start gap-2 w-full">
							<div class="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-5 text-gray-600">
								<div class="uppercase sm:text-[20px] md:text-[30px] lg:text-[36px]">
									<UIcon name="i-lucide-circle-user-round"/>
									{{ item.name }}
								</div>
								<div class="flex flex-row justify-start items-start gap-1 mb-5">
									<img height="20" width="20" v-for="n in item.rating" src="/images/svg/star.svg" :alt="`star +${n}`"/>
								</div>
							</div>
							<div class="flex flex-row justify-center items-center gap-1 text-gray-600">
								<UIcon name="i-lucide-calendar" size="14"/>
								<p>{{ item.date }}</p>
							</div>
						</div>
						<div class="text-gray-600 text-[20px] uppercase">{{ item.text }}</div>
					</div>
				</template>
				<div class="w-full flex flex-row justify-between items-center pt-10 gap-5">
					<UModal
							title="Все отзывы"
							close-icon="i-lucide-circle-x"
							fullscreen
							:ui="{
								body: 'bg-gray-600 text-gray-200',
								header: 'bg-gray-600 border-gray-600',
								title: 'text-gray-200',
							}"
					>
						<UButton
								class="button-gradient uppercase"
								icon="i-lucide-ellipsis"
						>
							все отзывы
						</UButton>
						<template #body>
							<div class="modal-reviews">
								<UMarquee
										:overlay="false"
								>
									<template v-for="(item, index) in reviews as Review[]" :key="index">
										<div class="item flex flex-col justify-start items-start gap-1 w-105">
											<div class="flex flex-row justify-between items-start gap-2">
												<div class="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-5 text-gray-600">
													<div class="uppercase sm:text-[20px] md:text-[30px] lg:text-[36px]">
														<UIcon name="i-lucide-circle-user-round"/>
														{{ item.name }}
													</div>
													<div class="flex flex-row justify-start items-start gap-1 mb-5">
														<img height="20" width="20" v-for="n in item.rating" src="/images/svg/star.svg"
														     :alt="`star +${n}`"/>
													</div>
												</div>
												<div class="flex flex-row justify-center items-center gap-1 text-gray-600">
													<UIcon name="i-lucide-calendar" size="14"/>
													<p>{{ item.date }}</p>
												</div>
											</div>
											<div class="text-gray-600 text-[20px] uppercase">{{ item.text }}</div>
										</div>
									</template>
								</UMarquee>
							</div>
						</template>
					</UModal>
					
					<UModal
							title="Оставить отзыв"
							close-icon="i-lucide-circle-x"
							:ui="{
								body: 'bg-gray-600 text-gray-200 flex flex-col justify-center items-start gap-5',
								header: 'bg-gray-600 border-gray-600',
								title: 'text-gray-200',
							}"
					>
						<UButton
								class="button-gradient uppercase"
								icon="i-lucide-plus"
						>
							оставить отзыв
						</UButton>
						<template #body>
							<UInput
									v-model="review.name"
									color="primary"
									placeholder="Имя"
									size="xl"
									:ui="{
										base: 'h-12 text-white bg-gray-600 rounded-[26px] w-[320px] sm:w-[440px]',
									}"
							/>
							<div class="flex flex-row justify-start items-start gap-1 pl-1 w-full cursor-pointer">
								<img
										height="20" width="20" v-for="n in 5" src="/images/svg/star.svg"
										:class="{
											'grayscale': n > review.rating,
										}"
										@click="review.rating = n"
										:alt="`star +${n}`"
								/>
							</div>
							<UTextarea
									v-model="review.text"
									placeholder="Текст"
									:rows="3"
									:ui="{
										base: 'min-h-[30px] p-3 text-white bg-gray-600 rounded-[26px] w-[320px] sm:w-[440px]',
									}"
							/>
						</template>
					</UModal>
				</div>
			</div>
		</UContainer>
	</section>
</template>

<style scoped>

</style>