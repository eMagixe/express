<script setup lang="ts"></script>

<template>
	<div class="section-order w-full mx-auto h-auto py-5 border-b border-b-[#0A0B08]">
		<UContainer class="flex animation-box flex-col justify-center items-center gap-5">
			<OrderCreate />
		</UContainer>
	</div>
</template>

<style scoped>
.section-order {
	background: linear-gradient(rgba(255, 146, 0, 0.7) 0%, rgba(10, 11, 8, 1) 100%);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
</style>
