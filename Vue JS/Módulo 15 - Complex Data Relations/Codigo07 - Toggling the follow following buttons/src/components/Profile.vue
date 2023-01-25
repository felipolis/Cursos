
<script setup>
	import Container from './Container.vue';
	import UserBar from './UserBar.vue';
	import ImageGallery from './ImageGallery.vue';
	import { ref, onMounted, watch } from 'vue';
	import { useRoute } from 'vue-router';
	import { supabase } from '../supabase';
	import { useUserStore } from '../stores/users';
	import { storeToRefs } from 'pinia';

	const userStore = useUserStore();
	const route = useRoute();
	const user = ref(null);
	const isFollowing = ref(false);
	const {username} = route.params;
	const {user: loggedInUser} = storeToRefs(userStore);
	const posts = ref([]);
	const loading = ref(false);

	const addNewPost = (post) => {
		posts.value.unshift(post);
	}

	const updateIsFollowing = (follow) => {
		isFollowing.value = follow;
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
			await fetchIsFollowing();
			loading.value = false;
	}

	const fetchIsFollowing = async () => {
		if(loggedInUser.value && (loggedInUser.value.id !== user.value.id)){
			const {data} = await supabase
				.from('followers_following')
				.select()
				.eq('follower_id', loggedInUser.value.id)
				.eq('following_id', user.value.id)
				.single();
	
			if(data) {
				isFollowing.value = true;
			}
		}
	}

	watch(loggedInUser, () => {
		fetchIsFollowing();
	})

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
				:isFollowing="isFollowing"
				:updateIsFollowing="updateIsFollowing"
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