<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui/components/Table.vue'
import type { Row } from '@tanstack/vue-table'

definePageMeta({
	layout: 'dashboard',
	middleware: 'auth'
})

const { data, pending } = useLazyFetch('/api/direction/all', {
	key: 'directions',
	method: 'GET'
})

const currentSelectedDirection = ref()
const openModalUpdateDirection = ref(false)
const UButton = resolveComponent('UButton')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const getContextItemsMenu = (row: Row<any>) => {
	return [
		{
			label: 'Редактировать',
			onSelect() {
				currentSelectedDirection.value = {
					id: row.original.id,
					name: row.original.name,
					price: row.original.price
				}
				openModalUpdateDirection.value = true
			}
		}
	]
}

const columns: TableColumn<object>[] = [
	{
		accessorKey: 'id',
		header: 'ID'
	},
	{
		accessorKey: 'name',
		header: 'Название'
	},
	{
		accessorKey: 'price',
		header: 'Цена'
	},
	{
		id: 'actions',
		meta: {
			class: {
				td: 'text-right'
			}
		},
		cell: ({ row }) => {
			return h(
				UDropdownMenu,
				{
					class: 'text-gray-400',
					content: {
						class: 'bg-gray-300',
						align: 'end'
					},
					items: getContextItemsMenu(row),
					'aria-label': 'Доп. действия'
				},
				() =>
					h(UButton, {
						icon: 'i-lucide-ellipsis-vertical',
						variant: 'ghost',
						'aria-label': 'Доп. действия'
					})
			)
		}
	}
]
</script>

<template>
	<UModal class="bg-gray-400" v-model:open="openModalUpdateDirection" title="Изменение направления">
		<template #body>
			<DirectionUpdate :direction="currentSelectedDirection" @close="openModalUpdateDirection = false" />
		</template>
	</UModal>
	<UTable
		:loading="pending"
		:columns="columns"
		empty="Список пуст"
		:data="data as any"
		class="bg-gray-50 rounded-lg flex-1 mt-5"
	/>
</template>

<style scoped></style>
