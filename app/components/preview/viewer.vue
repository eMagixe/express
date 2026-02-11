<script setup lang="ts">
import type { Review } from '#shared/types/global'

const reviewsViews = ref<Review[]>([])

const fetchReviews = async () => {
	await $fetch('/api/review/all', {
		method: 'GET'
	}).then((data: any) => {
		if (data) {
			reviewsViews.value = data.slice(data.length - 3, data.length).map((review: any) => {
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

await fetchReviews()
</script>

<template>
	<template v-for="(item, index) in reviewsViews as Review[]" :key="index">
		<div class="item flex flex-col justify-start items-start gap-1 w-full">
			<div class="flex flex-row justify-between items-start gap-2 w-full">
				<div class="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-5 text-gray-600">
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
					<ClientOnly>
						<p>{{ item.date }}</p>
					</ClientOnly>
				</div>
			</div>
			<div class="text-gray-600 text-[1rem]">{{ item.text }}</div>
		</div>
	</template>
</template>

<style scoped></style>
