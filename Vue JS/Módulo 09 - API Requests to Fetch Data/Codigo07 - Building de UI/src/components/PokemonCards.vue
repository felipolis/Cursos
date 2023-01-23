<script setup>
	import axios from 'axios';
	import { ref, watch } from 'vue';

	import Card from './Card.vue';

	const characters = ref(null);
	const images = ref([]);
	const abilities = ref([]);

	const page = ref(0);

	await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8`).then(res => {
		characters.value = res.data.results;

		characters.value.forEach(async (character) => {
			await axios.get(character.url).then(res => {
				images.value.push(res.data.sprites.front_default)
				abilities.value.push(res.data.abilities)
				
			})
		})

	})


	watch(page, async () => {
		await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${page.value * 8}`).then(res => {
			characters.value = res.data.results;
			images.value = []
			abilities.value = []

			characters.value.forEach(async (character) => {
				await axios.get(character.url).then(res => {

					images.value.push(res.data.sprites.front_default)
					abilities.value.push(res.data.abilities)
					
				})
			})

		})

	})


</script>

<template>
	<div class="container">
		<div class="cards">
				<Card 
					v-for="character in characters"
					:key="character.name"
					:name="character.name"
					:image="images[characters.indexOf(character)]"
					:abilities="abilities[characters.indexOf(character)]"
				/>
		</div>
	</div>
</template>

<style scoped>
	.container {
    background-color: rgb(27, 26, 26);
    padding: 30px
	}
	.cards {
			max-width: 1000px;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			height: 700px
	}
	.cards h3 {
			font-weight: bold;
	}
	.cards p {
			font-size: 10px;
	}
	.jobs {
			display: flex;
			flex-wrap: wrap;
	}
	.button-container {
			display: flex;
			justify-content: center;
			padding-top: 30px
	}
	.button-container button {
			border: none;
			width: 50px;
			height: 50px;
			border-radius: 100%;
			margin: 0 5px;
			cursor: pointer;
	}
	.spinner {
			display: flex;
			align-items: center;
			justify-content: center;
	}
</style>