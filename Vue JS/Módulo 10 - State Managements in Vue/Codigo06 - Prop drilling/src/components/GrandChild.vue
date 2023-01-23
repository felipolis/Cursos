<script setup>
  import GreatGrandChild from './GreatGrandChild.vue';
	import { defineProps } from 'vue';

	const { numbers } = defineProps(['numbers']);
</script>


<template>
	<div>
		<h1>GrandChild Component</h1>
		<div class="line"></div>

		<GreatGrandChild :numbers="numbers"/>
	</div>
</template>


<style scoped>

</style>
