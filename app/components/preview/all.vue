<script setup lang="ts">
const modalAllReviewsOpen = ref(false)

const preload = () => {
	const { reviews, getAll } = useReview()

	getAll().then(() => {
		modalAllReviewsOpen.value = false
	})

	return reviews
}
const reviews = preload()
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
				<UCarousel
					v-slot="{ item }"
					loop
					:autoplay="{ delay: 2200 }"
					:items="reviews"
					:ui="{ item: 'not-lg:basis-1/1 md:basis-1/2 lg:basis-1/3' }"
					class="m-10"
				>
					<div class="item flex flex-col justify-start items-start gap-1">
						<div class="flex w-full flex-row justify-between items-start gap-2">
							<div
								class="flex xl:flex-row flex-col lg:justify-center lg:items-center gap-5 text-gray-600"
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
								<p class="text-[clamp(.8rem,1vw,1rem)]">{{ item.date }}</p>
							</div>
						</div>
						<div class="text-gray-600 text-[1rem]">{{ item.text }}</div>
					</div>
				</UCarousel>
			</div>
		</template>
	</UDrawer>
</template>

<style scoped>
.modal-reviews {
	.item {
		background: linear-gradient(white 0%, #bdbdbd 100%);
		box-shadow:
			0 4px 4px 0 rgba(0, 0, 0, 0.2),
			0 6px 6px 0 rgba(0, 0, 0, 0.19);
		padding: 16px;
		border-bottom-right-radius: 16px;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		backdrop-filter: blur(5px);
	}
}
</style>
