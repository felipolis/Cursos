<script setup>
  import GrandChild from './GrandChild.vue';
	import { inject } from 'vue'

	const numbers = inject('numbers')

	const addNumber = () => {
    numbers.value.push(numbers.value.length + 1)
  }
</script>


<template>
	<div>
		<h1>Child Component {{ numbers }}</h1>
		<button @click="addNumber()">add</button>
		<div class="line"></div>

		<GrandChild />
	</div>
</template>


<style scoped>

</style>
