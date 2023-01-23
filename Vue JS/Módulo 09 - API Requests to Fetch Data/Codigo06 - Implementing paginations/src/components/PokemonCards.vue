<script setup>
	import axios from 'axios';
	import { ref, watch } from 'vue';

	const characters = ref(null);
	const page = ref(0);

	const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8`)
	characters.value = response.data.results;

	watch(page, async () => {
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${page.value * 8}`)
		characters.value = res.data.results;
		console.log(res.data)
	})

</script>

<template>
	<div>
		<h1>Pokemon Cards</h1>
		<p>{{ characters }}</p>
		<div>
			<button @click="page = page - 1">Back</button>
			<button @click="page = page + 1">Next</button>
		</div>
	</div>
</template>