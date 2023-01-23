<script setup>
	import { useNumbersStore } from '../stores/numbers';

	const { doubleNumbers, filterNumber } = useNumbersStore();
</script>


<template>
	<div>
		<h1>GreatGrandChild Component {{ doubleNumbers }}</h1>
		<h1>{{ filterNumber(5) }}</h1>
		<div class="line"></div>
	</div>
</template>


<style scoped>

</style>
