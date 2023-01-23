<script setup>
	import Child from './Child.vue';
	import { defineProps } from 'vue';

	const { numbers } = defineProps(['numbers']);
</script>


<template>
	<div>
		<h1>Parent Component</h1>
		<div class="line"></div>

		<Child :numbers="numbers"/>
	</div>
</template>

<style scoped>

</style>

