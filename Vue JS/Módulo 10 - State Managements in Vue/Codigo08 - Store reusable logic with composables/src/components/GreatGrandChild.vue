<script setup>
	import useNumbers from '../composables/useNumbers';

	const { numbers, filterNumbers } = useNumbers();
</script>


<template>
	<div>
		<h1>GreatGrandChild Component {{ filterNumbers(5) }}</h1>
		<div class="line"></div>
	</div>
</template>


<style scoped>

</style>
