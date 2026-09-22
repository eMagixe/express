<script setup lang="ts">
import { animate, scrambleText } from 'animejs'

const cities = ref()

onMounted(() => {
	const texts = ['Кумертау', 'Мелеуз', 'Салават'];
	let i = 0;

	function play() {
		i = (i + 1) % texts.length;
		animate(cities.value, {
			innerHTML: scrambleText({ text: texts[i], override: 'uppercase', duration: 700, }),
		});
	}

	setInterval(play, 5000)
})

</script>

<template>
  <span ref="cities" class="inline-block w-35 md:w-50 lg:w-55">Кумертау</span>
</template>

<style scoped>

</style>