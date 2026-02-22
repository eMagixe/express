import { utils } from '~/utils'

export const useReview = () => {
	const reviews = ref<Review[]>([])
	const current = ref<Review>({
		name: '',
		text: '',
		rating: 0,
		date: ''
	})

	const route = useRoute()
	const toast = useToast()

	const modalAddReviewIsOpen = ref(false)
	const modalAllReviewsOpen = ref(false)

	if (route.query.review === 'open') {
		modalAddReviewIsOpen.value = true
	}

	watch(modalAddReviewIsOpen, (value) => {
		if (value) resetReview(current)
	})

	const resetReview = (obj: Ref) => {
		obj.value = {
			name: '',
			text: '',
			rating: 0,
			date: ''
		}
	}

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

	const add = async () => {
		if (current.value.name && current.value.text && current.value.rating) {
			create(current)
				.then(() => {
					resetReview(current)
					toast.add({
						title: 'Ответ',
						description: 'Отзыв был отправлен',
						color: 'success'
					})
					modalAddReviewIsOpen.value = false
				})
				.catch(() => {
					toast.add({
						title: 'Ответ',
						description: 'Произошла ошибка при отправке отзыва',
						color: 'error'
					})
				})
		} else {
			toast.add({
				title: 'Отправка отзыва',
				description: 'Пожалуйста, заполните все поля',
				color: 'error'
			})
		}
	}

	const preload = async () => {
		if (reviews.value.length < 3) {
			await getAll().then(() => {
				modalAllReviewsOpen.value = false
			})
		}
	}

	return {
		preload,
		add,
		current,
		modalAddReviewIsOpen,
		modalAllReviewsOpen,
		reviews
	}
}
