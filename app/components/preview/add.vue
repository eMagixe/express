<script setup lang="ts">
import type { Review } from '#shared/types/global'

const review = ref<Review>({
	name: '',
	text: '',
	rating: 0,
	date: ''
})

const toast = useToast()
const modalAddReviewOpen = ref(false)

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
	<UModal
		title="Оставить отзыв"
		description="Оставьте свой отзыв о поездке"
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
</template>

<style scoped></style>
