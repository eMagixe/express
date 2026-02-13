import type { Review } from '#shared/types/global'

export const useReview = () => {
	const reviews = ref<Review[]>([])

	const fetchAllReviews = async () => {
		return useFetch('/api/review/all', {
			method: 'GET'
		}).then(({ data }) => {
			if (data?.value && Array.isArray(data.value)) {
				reviews.value = data.value.map((review: any) => {
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

	return {
		fetchAllReviews,
		reviews
	}
}
