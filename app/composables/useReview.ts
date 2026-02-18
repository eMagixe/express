import { utils } from '~/utils'

export const useReview = () => {
	const reviews = ref<Review[]>([])

	const remakeReview = (review: Review) => {
		return {
			name: review.name,
			text: review.text,
			rating: Number(review.rating),
			date: review.createdAt
				? new Date(review.createdAt).toLocaleDateString('ru-RU')
				: Date.now().toLocaleString('ru-RU')
		}
	}

	const getAll = async () => {
		return useFetch('/api/review/all', {
			method: 'GET'
		}).then(({ data }: any): void => {
			if (utils.isArray(data.value)) {
				reviews.value = data.value.map((review: any) => {
					return remakeReview(review) as Review
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
