
<script setup>
	import Container from './Container.vue';
	import Card from './Card.vue'; 
	import { useUserStore } from '../stores/users';
	import { storeToRefs } from 'pinia';
	import Cards from './Cards.vue';
	import LogInMessage from './LogInMessage.vue';

	const userStore = useUserStore();
	const { user, loadingUser } = storeToRefs(userStore);

	
</script>


<template>
	<Container>
		<div v-if="!loadingUser">
			<Cards v-if="user"/>
			<LogInMessage v-else />
		</div>
		<div v-else class="timeline-spinner">
			<ASpin />
		</div>
	</Container>
</template>


<style>
.timeline-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
}

.timeline-spinner {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
}
</style>