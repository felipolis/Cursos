<script setup>
	import { inject } from 'vue';

	const numbers = inject('numbers');

	const addNumber = () => {
    numbers.value.push(numbers.value.length + 1)
  }
</script>


<template>
	<div>
		<h1>GreatGrandChild Component {{ numbers }}</h1>
		<button @click="addNumber()">add</button>
		<div class="line"></div>
	</div>
</template>


<style scoped>

</style>
