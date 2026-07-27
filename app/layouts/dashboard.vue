<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'

const auth = useAuth()

const open = ref(true)

const colorMode = useColorMode()

const getItemsAll = (state: 'collapsed' | 'expanded' = 'expanded') => {
	return [
		{
			label: 'Направления',
			to: '/dashboard'
		}
	] as NavigationMenuItem[]
}

const userItems = computed<DropdownMenuItem[][]>(() => [
	[
		{
			label: 'Выйти',
			icon: 'i-lucide-log-out',
			onSelect: () => {
				auth.logout()
			}
		}
	]
])
</script>

<template>
	<div class="flex flex-1 h-screen bg-gray-500">
		<USidebar
			v-model:open="open"
			collapsible="icon"
			rail
			:ui="{
				root: 'bg-gray-700',
				container: 'h-full text-white',
				inner: 'divide-transparent',
				body: 'py-0'
			}"
		>
			<template #header>
				<UAvatar src="/favicon.png" :ui="{ root: 'w-12 h-12' }" />
				ЭКСПРЕСС
			</template>

			<template #default="{ state }">
				<h3 v-if="state === 'expanded'" class="mt-5">Общее</h3>
				<UNavigationMenu
					:key="useId()"
					:items="getItemsAll(state)"
					orientation="vertical"
					:ui="{ link: 'p-1.5 overflow-hidden text-gray-700 hover:bg-gray-400 rounded-lg' }"
				/>
			</template>

			<template #footer>
				<UDropdownMenu
					v-if="auth.getUser()"
					:items="userItems"
					:content="{ align: 'center', collisionPadding: 12 }"
					:ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-48 bg-gray-500 ' }"
				>
					<UButton
						v-bind="auth.getUser()"
						:label="auth.getUser()?.full_name"
						trailing-icon="i-lucide-chevrons-up-down"
						color="neutral"
						variant="ghost"
						square
						class="w-full data-[state=open]:bg-elevated text-gray-400 overflow-hidden"
						:ui="{
							trailingIcon: 'text-dimmed ms-auto'
						}"
					/>
				</UDropdownMenu>
			</template>
		</USidebar>

		<div class="flex-1 flex flex-col h-screen">
			<div class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-default">
				<UButton
					icon="i-lucide-panel-left"
					color="neutral"
					variant="ghost"
					aria-label="Toggle sidebar"
					@click="open = !open"
				/>
			</div>

			<div class="flex-1 p-4 h-screen w-full">
				<slot />
			</div>
		</div>
	</div>
</template>
