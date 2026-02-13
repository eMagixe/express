<script setup lang="ts">
import type { Review } from '#shared/types/global'
import { useReview } from '~/composibles/useReview'

const { reviews, fetchAllReviews } = useReview()

await fetchAllReviews()
</script>

<template>
	<template v-for="(item, index) in reviews.slice(0, 3) as Review[]" :key="index">
		<div
			class="item animation-box transition-all duration-150 flex flex-col justify-start items-start gap-1 w-full"
		>
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

<style></style>
