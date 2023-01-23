<script setup>
	import { defineProps } from 'vue';

	const { image, name, abilities } = defineProps([
		'image',
		'name',
		'abilities'
	])
</script>

<template>
	<div>
		<NCard>
			<template #cover>
				<img :src="image">
			</template>
			<h3>{{ name }}</h3>
			<div class="abilities">
				<p v-for="(ability, index) in abilities" :key="index">
					{{ ability.ability.name }}<span v-if="index < abilities.length - 1">,&nbsp;</span>
				</p>
			</div>
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

	.abilities {
			display: flex;
			flex-wrap: wrap;
	}
</style>