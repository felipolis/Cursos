
<script setup>
	import Container from './Container.vue';
	import Card from './Card.vue'; 
	import { useUserStore } from '../stores/users';
	import { storeToRefs } from 'pinia';

	const userStore = useUserStore();
	const { user, loadingUser } = storeToRefs(userStore);

	const data = [
		{
			id: 1,
			username: 'user1',
			url: 'https://conteudo.imguol.com.br/c/parceiros/6e/2022/11/15/a-saga-harry-potter-esta-disponivel-no-hbo-max-1668541198115_v2_3x4.jpg',
			caption: 'I love Hogwarts!'
		},
		{
			id: 2,
			username: 'user2',
			url: 'http://4.bp.blogspot.com/-clk-DZnT4F0/Tarp4GMLT_I/AAAAAAAAAKI/krB9xuLDk6c/s1600/Hermione-Jean-Granger.jpg',
			caption: 'Today I had a test!'
		},
		{
			id: 3,
			username: 'user3',
			url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg',
			caption: 'Hello, ladies!'
		}
	]
</script>


<template>
	<Container>
		<div v-if="!loadingUser">
			<div class="timeline-container" v-if="user">
				<Card v-for="post in data" :key="post.id" :post="post"/>
			</div>
			<div v-else class="timeline-container">
				<h2>Log in to see the timeline</h2>
			</div>
		</div>
		<div v-else class="spinner">
			<ASpin />
		</div>
	</Container>
</template>


<style scoped>
.timeline-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
}

.spinner {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
}
</style>