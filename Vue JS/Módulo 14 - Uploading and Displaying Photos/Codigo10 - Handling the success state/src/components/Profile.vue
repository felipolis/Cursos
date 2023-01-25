
<script setup>
	import Container from './Container.vue';
	import UserBar from './UserBar.vue';
	import ImageGallery from './ImageGallery.vue';
	import { ref } from 'vue';

	const posts = ref([]);
	const addNewPost = (post) => {
		posts.value.unshift(post);
	}
</script>


<template>
	<Container>
		<div class="profile-container">
			<UserBar 
				:key="$route.params.username"
				username="felipeacmendes"
				:userInfo="{
					posts: 0,
					followers: 200,
					following: 2156
				}"
				:addNewPost="addNewPost"
			/>
			<ImageGallery 
				:posts="posts"
			/>
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