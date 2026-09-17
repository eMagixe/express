<script setup lang="ts"></script>
<template>
	<div class="border-b border-b-primary/70">
		<UContainer>
			<UHeader back="/" class="border-b-0 relative">
				<template #left>
					<Logo />
					<Menu classes="not-sm:hidden flex flex-col gap-2 text-[#FFCC00] text-[24px] pl-10 italic" />
				</template>

				<template #body>
					<Phones />
					<Menu classes="flex flex-col justify-center items-center mt-5 gap-2 text-[#FFCC00] text-[24px] italic" />
				</template>

				<template #right>
					<Phones class="not-lg:hidden" />
				</template>
			</UHeader>
		</UContainer>
	</div>
</template>
