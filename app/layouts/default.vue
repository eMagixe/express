<script setup lang="ts">
import { useCall } from '~/composables/useCall'

const call = useCall()
</script>

<template>
	<UApp>
		<UModal
			class="z-500"
			v-model:open="call.order.value.modalVisible"
			close-icon="i-lucide-circle-x"
			:ui="{
				body: 'bg-gray-600 text-white flex flex-col justify-center items-center gap-5 mb-10',
				header: 'bg-gray-600 border-gray-600 min-h-auto',
				title: 'text-gray-200',
				content: 'bg-gray-600 border-gray-600'
			}"
		>
			<template #body>
				<h2 class="text-primary text-2xl">Ваш номер заявки: #{{ call.order.value.uid }}</h2>
				<p class="text-sm text-white">Назовите его диспетчеру при необходимости...</p>
				<NuxtLink
					class="button-gradient h-16 flex items-center justify-center gap-3"
					icon="i-lucide-phone-call"
					:to="`tel:${call.order.value.phone}`"
				>
					<UIcon name="i-lucide-phone-call" size="18" />
					Позвонить
				</NuxtLink>
			</template>
		</UModal>
		<SectionHeader />
		<main>
			<NuxtPage />
		</main>
		<LazySectionFooter />
	</UApp>
</template>
