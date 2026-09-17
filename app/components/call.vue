<script setup lang="ts">
const props = defineProps({
	position: {
		type: String,
		default: 'start',
	},
	text: {
		type: String,
		default: 'left',
	}
})
</script>

<template>
	<div
		class="flex flex-col not-md:justify-center not-md:items-center gap-10 mb-10"
		:class="`justify-${props.position} items-${props.position}`"
	>
		<h3
			class="text-2xl not-md:px-5 w-full not-md:text-center"
			:class="`text-${props.text}`"
		>
			Связаться с диспетчером
		</h3>
		<NuxtLink
			class="button-gradient h-16 flex items-center justify-center gap-3"
			icon="i-lucide-phone-call"
			@click="useCall().openModalCall('+79177666833')"
		>
			<UIcon name="i-lucide-phone-call" size="18" />
			Вызвать
		</NuxtLink>
		<p
			class="w-2/3 text-gray-300 text-sm not-md:text-center"
			:class="`text-${props.text}`"
		>
			* Всю дополнительную информацию можно уточнить у диспетчера
		</p>
	</div>
</template>

<style scoped>
h3 {
	color: white;
	text-transform: uppercase;
	font-weight: 500;
}
</style>