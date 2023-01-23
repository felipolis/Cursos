<script setup>
	import axios from 'axios';

	const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
	console.log(response);
</script>

<template>
	<div>
		<h1>Pokemon Cards</h1>
		<p>{{ response.data.results }}</p>
	</div>
</template>