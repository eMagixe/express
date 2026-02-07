<script setup lang="ts">

</script>

<template>
	<div class="welcome-section w-full mx-auto h-screen">
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
			
			<div class="cities-list w-full flex not-md:flex-col justify-center items-center gap-2 my-10">
				<div>КУМЕРТАУ</div>
				<div class="not-md:hidden arrow">→</div>
				<img src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7 md:hidden" />
				<div>МЕЛЕУЗ</div>
				<div class="not-md:hidden arrow">→</div>
				<img src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7 md:hidden" />
				<div>САЛАВАТ</div>
				<div class="not-md:hidden arrow">→</div>
				<img src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7 md:hidden" />
				<div>УФА</div>
				<div class="not-md:hidden arrow">→</div>
				<img src="/images/svg/arrow-b.svg" alt="arrow-b" class="h-7 md:hidden" />
				<div>КУМЕРТАУ</div>
			</div>
			
			<p class="font-medium text-[32px] lg:text-[64px] text-white text-center lg:text-left w-full lg:w-[50%] mt-30">Круглосуточные перевозки</p>
			
			<div class="font-thin text-[32px] text-white mt-20 text-center lg:text-left underline decoration-1 underline-offset-5">быстро и с комфортом</div>
		</UContainer>
	</div>
</template>

<style scoped>

</style>