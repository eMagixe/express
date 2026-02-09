<script setup lang="ts">
type Review = {
	name: string
	text: string
	rating: number
	date: string
}

const reviews = ref<Review[]>([])
const reviewsViews = ref<Review[]>([])

const review = ref<Review>({
	name: '',
	text: '',
	rating: 0,
	date: ''
})

const toast = useToast()
const modalAddReviewOpen = ref(false)
const modalAllReviewsOpen = ref(false)

const fetchAllReviews = async () => {
	await $fetch('/api/review/all', {
		method: 'GET'
	}).then((data: any) => {
		reviews.value = data.map((review: any) => {
			return {
				name: review.name,
				text: review.text,
				rating: Number(review.rating),
				date: new Date(review.createdAt).toLocaleDateString('ru-RU')
			}
		}) as Review[]
		modalAllReviewsOpen.value = true
	})
}

const fetchReviews = async () => {
	await $fetch('/api/review/all', {
		method: 'GET'
	}).then((data: any) => {
		if (data) {
			reviewsViews.value = data.slice(0, 3).map((review: any) => {
				return {
					name: review.name,
					text: review.text,
					rating: Number(review.rating),
					date: new Date(review.createdAt).toLocaleDateString('ru-RU')
				}
			}) as Review[]
		}
	})
}

fetchReviews()
fetchAllReviews()

const addReview = async () => {
	if (review.value.name && review.value.text && review.value.rating) {
		await $fetch('/api/review/add', {
			method: 'POST',
			body: {
				...review.value
			}
		})
			.then(() => {
				toast.add({ title: 'Ответ', description: 'Отзыв был отправлен', color: 'success' })
				review.value.name = ''
				review.value.text = ''
				review.value.rating = 0
				modalAddReviewOpen.value = false
				fetchReviews()
			})
			.catch(() => {
				toast.add({ title: 'Ответ', description: 'Произошла ошибка при отправке отзыва', color: 'error' })
			})
	} else {
		toast.add({ title: 'Отправка отзыва', description: 'Пожалуйста, заполните все поля', color: 'error' })
	}
}
</script>

<template>
	<section class="section-reviews w-full mx-auto sm:h-screen py-20">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<SectionTitle title="Отзывы" />
			<div class="w-full flex flex-col justify-start items-center pt-10 gap-10">
				<template v-if="reviewsViews.length > 0" v-for="(item, index) in reviewsViews as Review[]" :key="index">
					<div class="item flex flex-col justify-start items-start gap-1 w-full">
						<div class="flex flex-row justify-between items-start gap-2 w-full">
							<div
								class="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-5 text-gray-600"
							>
								<div class="uppercase sm:text-[20px] md:text-[30px] lg:text-[36px]">
									<UIcon name="i-lucide-circle-user-round" />
									{{ item.name }}
								</div>
								<div class="flex flex-row justify-start items-start gap-1 mb-5">
									<img
										height="20"
										width="20"
										v-for="n in item.rating"
										src="/images/svg/star.svg"
										:alt="`star +${n}`"
									/>
								</div>
							</div>
							<div class="flex flex-row justify-center items-center gap-1 text-gray-600">
								<UIcon name="i-lucide-calendar" size="14" />
								<p>{{ item.date }}</p>
							</div>
						</div>
						<div class="text-gray-600 text-[1rem]">{{ item.text }}</div>
					</div>
				</template>
				<p v-else class="text-primary">Отзывов пока нет</p>
				<div class="w-full flex flex-row justify-between items-center pt-10 gap-5">
					<UDrawer
						title="Отзывы"
						description="Все отзывы о компании"
						:ui="{
							body: 'bg-gray-600 text-gray-200',
							content: 'min-h-[400px] bg-gray-600 border-gray-600'
						}"
					>
						<UButton class="button-gradient uppercase" icon="i-lucide-ellipsis"> все отзывы </UButton>
						<template #content>
							<div class="modal-reviews">
								<UMarquee class="m-10" v-if="reviews.length > 0" :overlay="false">
									<template v-for="(item, index) in reviews as Review[]" :key="index">
										<div
											class="item flex flex-col justify-start items-start gap-1 w-[90vw] sm:w-[25vw]"
										>
											<div class="flex w-full flex-row justify-between items-start gap-2">
												<div
													class="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-5 text-gray-600"
												>
													<div class="uppercase sm:text-[20px] md:text-[30px] lg:text-[36px]">
														<UIcon name="i-lucide-circle-user-round" />
														{{ item.name }}
													</div>
													<div class="flex flex-row justify-start items-start gap-1 mb-5">
														<img
															height="20"
															width="20"
															v-for="n in item.rating"
															src="/images/svg/star.svg"
															:alt="`star +${n}`"
														/>
													</div>
												</div>
												<div
													class="flex flex-row justify-center items-center gap-1 text-gray-600"
												>
													<UIcon name="i-lucide-calendar" size="14" />
													<p>{{ item.date }}</p>
												</div>
											</div>
											<div class="text-gray-600 text-[1rem]">{{ item.text }}</div>
										</div>
									</template>
								</UMarquee>
								<p v-else class="text-primary w-full text-center">Отзывов пока нет</p>
							</div>
						</template>
					</UDrawer>

					<UModal
						title="Оставить отзыв"
						close-icon="i-lucide-circle-x"
						:open="modalAddReviewOpen"
						@update:open="modalAddReviewOpen = !modalAddReviewOpen"
						:ui="{
							body: 'bg-gray-600 text-gray-200 flex flex-col justify-center items-start gap-5',
							header: 'bg-gray-600 border-gray-600',
							title: 'text-gray-200'
						}"
					>
						<UButton class="button-gradient uppercase" icon="i-lucide-plus"> оставить отзыв </UButton>
						<template #body>
							<UInput
								v-model="review.name"
								color="primary"
								placeholder="Имя"
								:ui="{
									root: 'w-full',
									base: 'h-12 text-white bg-gray-600 rounded-[26px] min-w-full'
								}"
							/>
							<div class="flex flex-row justify-start items-start gap-1 pl-1 w-full cursor-pointer">
								<img
									height="20"
									width="20"
									v-for="n in 5"
									src="/images/svg/star.svg"
									:class="{
										grayscale: n > review.rating
									}"
									@click="review.rating = n"
									:alt="`star +${n}`"
								/>
							</div>
							<UTextarea
								v-model="review.text"
								placeholder="Текст"
								maxlength="30"
								:rows="3"
								:ui="{
									root: 'w-full',
									base: 'p-3 text-white bg-gray-600 rounded-[26px] min-w-full'
								}"
							/>
							<div class="w-full flex justify-center items-center">
								<UButton @click="addReview" class="button-gradient uppercase" icon="i-lucide-plus">
									оставить отзыв
								</UButton>
							</div>
						</template>
					</UModal>
				</div>
			</div>
		</UContainer>
	</section>
</template>

<style scoped></style>
