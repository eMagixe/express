export type Review = {
	name: string
	text: string
	rating: number
	date: string
	createdAt?: string
}

export type Direction = {
	name: string
	description: string
	time: string
	price: number
	slug: string
	distance: number
	features?: object[]
}

export type Order = {
	name: string
	phone: string
	from: string
	from_address: string
	to: string
	to_address: string
	date: any
	time: any
}
