
<script setup>
	import Container from './Container.vue';
	import UserBar from './UserBar.vue';
</script>


<template>
	<Container>
		<div class="profile-container">
			<UserBar 
				username="felipeacmendes"
				:userInfo="{
					posts: 0,
					followers: 200,
					following: 2156
				}"
			/>
			<h1>IMAGEGALERRY</h1>
		</div>
	</Container>
</template>


<style scoped>
	.profile-container {
		display: flex;
		flex-direction: column;
		padding: 20px 0;
	}
</style>