<script setup lang="ts">
import { useCall } from '~/composables/useCall'

const call = useCall()
const route = useRoute()
const isDisabled = ref(false)

function sendCall() {
	isDisabled.value = true
	call.order.value.route = route.path
	navigateTo(`tel:${call.order.value.phone}`, {
		external: true
	})
	call.sendData().finally(() => {
		isDisabled.value = false
	})
}
</script>

<template>
<UModal
		class="z-500"
		v-model:open="call.order.value.modalVisible"
		close-icon="i-lucide-circle-x"
		:ui="{
			body: 'bg-gray-600 text-white flex flex-col justify-center items-center gap-5 mb-10',
			header: 'bg-gray-600 border-gray-600 min-h-auto',
			close: 'text-gray-200 hover:text-gray-600',
			title: 'text-gray-200',
			content: 'bg-gray-600 border-gray-600'
		}"
	>
		<template #body>
			<h2 class="text-primary text-2xl text-center w-full">ID: #{{ call.order.value.uid }}</h2>
			<p class="text-sm text-white text-center w-full">Назовите его диспетчеру при необходимости...</p>
			<UButton
				v-if="call.order.value.callEnabled"
				:disabled="isDisabled"
				class="button-gradient h-16 flex items-center justify-center gap-3"
				icon="i-lucide-phone-call"
				@click="sendCall()"
			>
				Позвонить
			</UButton>
			<UProgress v-else />
		</template>
	</UModal>
</template>

<style scoped></style>
