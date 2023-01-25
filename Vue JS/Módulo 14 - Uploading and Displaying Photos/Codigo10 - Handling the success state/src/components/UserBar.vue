
<script setup>
	import { defineProps } from 'vue';
	import UploadPhotoModal from './UploadPhotoModal.vue';
	import { useRoute } from 'vue-router';
	import { useUserStore } from '../stores/users';
	import { storeToRefs } from 'pinia';

	const route = useRoute();

	const props = defineProps(['username', 'userInfo', 'addNewPost']);

	const userStore = useUserStore();

	const { user } = storeToRefs(userStore);
	const { username: profileUsername } = route.params;
 
</script>


<template>
	<div class="userbar-container">
		<div class="top-content">
			<ATypographyTitle :level="2">{{ props.username }}</ATypographyTitle>
			<UploadPhotoModal 
				v-if="user && profileUsername === user.username"
				:addNewPost="props.addNewPost"
			/>
		</div>
		<div class="bottom-content">
			<ATypographyTitle :level="5">{{ props.userInfo.posts }} posts</ATypographyTitle>
			<ATypographyTitle :level="5">{{ props.userInfo.followers }} followers</ATypographyTitle>
			<ATypographyTitle :level="5">{{ props.userInfo.following }} following</ATypographyTitle>
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