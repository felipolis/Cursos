
<script setup>
	import Container from './Container.vue';
	import UserBar from './UserBar.vue';
	import ImageGallery from './ImageGallery.vue';
	import { ref, onMounted } from 'vue';
	import { useRoute } from 'vue-router';
	import { supabase } from '../supabase';

	const route = useRoute();
	const user = ref(null);
	const {username} = route.params;
	const posts = ref([]);
	const loading = ref(false);

	const addNewPost = (post) => {
		posts.value.unshift(post);
	}

	const fetchData = async () => {
		loading.value = true;
		const {data: userData} = await supabase
			.from('users')
			.select()
			.eq('username', username)

			if(!userData) {
				loading.value = false;
				return user.value = null;
			}
		
			user.value = userData[0];

			const {data: postsData} = await supabase
				.from('posts')
				.select()
				.eq('owner_id', user.value.id)

			posts.value = postsData;
			loading.value = false;
	}

	onMounted(() => {
		fetchData();
	})

</script>


<template>
	<Container>
		<div class="profile-container" v-if="!loading">
			<UserBar 
				:key="$route.params.username"
				:user="user"
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
		<div class="spinner" v-else>
			<ASpin />
		</div>
	</Container>
</template>


<style scoped>
	.profile-container {
		display: flex;
		flex-direction: column;
		padding: 20px 0;
	}

	.spinner {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 85vh;
	}
</style>