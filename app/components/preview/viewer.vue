<script setup lang="ts">
const { reviews, preload } = useReview()

await preload()
</script>

<template>
	<template v-for="item in reviews.slice(0, 3) as Review[]" :key="useId()">
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
					<p>{{ item.date }}</p>
				</div>
			</div>
			<div class="text-gray-600 text-[1rem]">{{ item.text }}</div>
		</div>
	</template>
</template>

<style scoped>
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
</style>
