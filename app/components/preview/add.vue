<script setup lang="ts">
const { add, modalAddReviewIsOpen, current } = useReview()
</script>

<template>
	<UModal
		title="Оставить отзыв"
		description="Оставьте свой отзыв о поездке"
		close-icon="i-lucide-circle-x"
		:open="modalAddReviewIsOpen"
		@update:open="modalAddReviewIsOpen = !modalAddReviewIsOpen"
		:ui="{
			body: 'bg-gray-600 text-gray-200 flex flex-col justify-center items-start gap-5',
			header: 'bg-gray-600 border-gray-600',
			title: 'text-gray-200',
			close: 'text-gray-200 hover:text-gray-600'
		}"
	>
		<UButton class="button-gradient" icon="i-lucide-plus">Оставить отзыв</UButton>
		<template #body>
			<UInput
				v-model="current.name"
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
						grayscale: n > current.rating
					}"
					@click="current.rating = n"
					:alt="`star +${n}`"
				/>
			</div>
			<UTextarea
				v-model="current.text"
				placeholder="Текст"
				maxlength="180"
				:rows="3"
				:ui="{
					root: 'w-full',
					base: 'p-3 text-white bg-gray-600 rounded-[26px] min-w-full'
				}"
			/>
			<div class="w-full flex justify-center items-center">
				<UButton @click="add" class="button-gradient" icon="i-lucide-plus"> Оставить отзыв </UButton>
			</div>
		</template>
	</UModal>
</template>
