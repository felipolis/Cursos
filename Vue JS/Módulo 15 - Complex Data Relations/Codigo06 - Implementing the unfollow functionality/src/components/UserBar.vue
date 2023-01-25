
<script setup>
	import { defineProps } from 'vue';
	import UploadPhotoModal from './UploadPhotoModal.vue';
	import { useRoute } from 'vue-router';
	import { useUserStore } from '../stores/users';
	import { storeToRefs } from 'pinia';
	import { supabase } from '../supabase.js';

	const route = useRoute();

	const props = defineProps(['user', 'userInfo', 'addNewPost', 'isFollowing']);

	const userStore = useUserStore();

	const { user } = storeToRefs(userStore);
	const { username: profileUsername } = route.params;

	const followUser = async () => {
		await supabase
			.from('followers_following')
			.insert(
				{
					follower_id: user.value.id,
					following_id: props.user.id
				}
			)
	}
	
	const unfollowUser = async () => {
		await supabase
			.from('followers_following')
			.delete()
			.eq('follower_id', user.value.id)
			.eq('following_id', props.user.id)
	}

</script>


<template>
	<div class="userbar-container" v-if="props.user">
		<div class="top-content">
			<ATypographyTitle :level="2">{{ props.user.username }}</ATypographyTitle>
			<div v-if="user">
				<UploadPhotoModal 
					v-if="profileUsername === user.username"
					:addNewPost="props.addNewPost"
				/>
				<div v-else>
					<AButton v-if="!props.isFollowing" @click="followUser">Follow</AButton>
					<AButton v-else @click="unfollowUser">Following</AButton>
				</div>
			</div>
		</div>
		<div class="bottom-content">
			<ATypographyTitle :level="5">{{ props.userInfo.posts }} posts</ATypographyTitle>
			<ATypographyTitle :level="5">{{ props.userInfo.followers }} followers</ATypographyTitle>
			<ATypographyTitle :level="5">{{ props.userInfo.following }} following</ATypographyTitle>
		</div>
	</div>
	<div v-else class="userbar-container">
		<div class="top-content">
			<ATypographyTitle :level="2">User Not Found</ATypographyTitle>
		</div>
	</div>
</template>


<style scoped>
	.userbar-container {
		padding-bottom: 75px;
	}

	.bottom-content {
		display: flex;
		align-items: center;
	}

	.bottom-content h5 {
		margin: 0 !important;
		padding: 0;
		margin-right: 30px !important;
	}

	.top-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>