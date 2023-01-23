<script setup>
  import GrandChild from './GrandChild.vue';
	import { defineProps } from 'vue';

	const { numbers } = defineProps(['numbers']);
</script>


<template>
	<div>
		<h1>Child Component {{ numbers }}</h1>
		<div class="line"></div>

		<GrandChild :numbers="numbers"/>
	</div>
</template>


<style scoped>

</style>
