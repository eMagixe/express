<script setup lang="ts">
import type { Review } from '#shared/types/global'

const modalAllReviewsOpen = ref(false)

const reviews = ref<Review[]>([])

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
		modalAllReviewsOpen.value = false
	})
}

await fetchAllReviews()
</script>

<template>
	<UDrawer
		title="Отзывы"
		description="Все отзывы о компании"
		:ui="{
			body: 'bg-gray-600 text-gray-200',
			content: 'min-h-[400px] bg-gray-600 border-gray-600'
		}"
	>
		<UButton class="button-gradient" icon="i-lucide-ellipsis">Все отзывы</UButton>
		<template #content>
			<div class="modal-reviews">
				<UMarquee class="m-10" :overlay="false">
					<template v-for="(item, index) in reviews as Review[]" :key="index">
						<div class="item flex flex-col justify-start items-start gap-1 not-lg:w-[90vw] w-[25vw]">
							<div class="flex w-full flex-row justify-between items-start gap-2">
								<div
									class="flex flex-row not-lg:flex-col lg:justify-center lg:items-center gap-5 text-gray-600"
								>
									<div class="uppercase text-[14px] not-lg:text-[30px]">
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
				</UMarquee>
			</div>
		</template>
	</UDrawer>
</template>

<style scoped></style>
