<script setup>
	import { defineProps } from 'vue';

	const { image, name } = defineProps([
		'image',
		'name'
	])
</script>

<template>
	<div>
		<NCard>
			<template #cover>
				<img :src="image">
			</template>
			<h3>{{ name }}</h3>
			<slot></slot>
		</NCard>
	</div>
</template>

<style scoped>
	.n-card {
    width: 200px;
    margin:10px 20px;
	}
	.n-card img {
			height: 250px
	}

	p {
			font-size: 10px;
	}
</style>