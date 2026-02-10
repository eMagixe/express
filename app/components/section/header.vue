<script setup lang="ts"></script>

<template>
	<div class="border-b border-b-primary/70">
		<UContainer>
			<UHeader back="/" class="border-b-0 relative">
				<template #left>
					<Logo />
				</template>

				<template #body>
					<Phones />
				</template>

				<template #right>
					<Phones class="not-lg:hidden" />
				</template>
			</UHeader>
		</UContainer>
	</div>
</template>

<style scoped></style>
