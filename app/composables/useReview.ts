export const useReview = () => {
	const reviews = ref<Review[]>([])

	const getAll = async () => {
		return useFetch('/api/review/all', {
			method: 'GET'
		}).then(({ data }: any): void => {
			if (data?.value && Array.isArray(data.value)) {
				reviews.value = data.value.map((review: any) => {
					return {
						name: review.name,
						text: review.text,
						rating: Number(review.rating),
						date: new Date(review.createdAt).toLocaleDateString('ru-RU')
					} as Review
				}) as Review[]
			}
		})
	}

	const create = async (review: Ref<Review>) => {
		return useFetch('/api/review/add', {
			method: 'POST',
			body: {
				...review.value
			}
		})
	}

	return {
		getAll,
		create,
		reviews
	}
}
