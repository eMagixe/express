<script setup lang="ts"></script>

<template>
	<div class="section-reviews w-full mx-auto h-auto py-5 border-b border-b-primary/70">
		<UContainer class="flex flex-col justify-center items-center gap-5">
			<SectionTitle title="Отзывы" />
			<div class="w-full flex flex-col justify-start items-center pt-10 gap-10">
				<PreviewViewer />
				<div class="w-full flex flex-row justify-between items-center pt-10 gap-5">
					<PreviewAll />
					<PreviewAdd />
				</div>
			</div>
		</UContainer>
	</div>
</template>

<style scoped></style>
