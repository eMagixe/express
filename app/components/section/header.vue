<script setup lang="ts">

</script>

<template>
	<UContainer>
		<UHeader back="/" class="border-gray-700 relative">
			<template #left>
				<Logo/>
			</template>
			
			<template #body>
				<Phones />
			</template>
			
			<template #right>
				<Phones class="not-lg:hidden"/>
			</template>
		</UHeader>
	</UContainer>
</template>

<style scoped>

</style>