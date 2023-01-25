
<script setup>
	import { defineProps, ref } from 'vue';
	import { supabase } from '../supabase.js';
	import { useUserStore } from '../stores/users.js';
	import { storeToRefs } from 'pinia';

	const visible = ref(false);
	const caption = ref('');
	const file = ref(null);

	const userStore = useUserStore();
	const props = defineProps(['addNewPost'])
	const { user } = storeToRefs(userStore);
	const loading = ref(false);
	const errorMessage = ref('');

	const showModal = () => {
		visible.value = true;
	}

	const handleOk = async(e) => {
		loading.value = true;
		const filename = Math.floor(Math.random() * 1000000000)
		let filaPath;
		if(file.value) {
			const {data, error} = await supabase.storage.from('images').upload('public/' + filename, file.value)

			if (error) {
				loading.value = false;
				errorMessage.value = 'Unable to upload image';
			}

			filaPath = data.path;
			await supabase.from('posts').insert({
				url: filaPath,
				caption: caption.value,
				owner_id: user.value.id
			})
		}

		loading.value = false;
		visible.value = false;
		caption.value = '';
		props.addNewPost({
			url: filaPath,
			caption: caption.value,
		});
	}

	const handleUploadChange = (e) => {
		if(e.target.files[0]) {
			file.value = e.target.files[0];
		}
	}
</script>

<template>
  <AButton @click="showModal">Upload Photo</AButton>
	<AModal
		v-model:visible="visible"
		title="Upload Photo"
		@ok="handleOk"
	>
		<div v-if="!loading">
			<input 
				type="file" 
				accept=".jpeg,.png"
				@change="handleUploadChange"
			>
			<AInput 
				v-model:value="caption" 
				placeholder="Caption..."
				:maxLength="50"
			/>
			<ATypographyText v-if="errorMessage" type="danger">{{ errorMessage }}</ATypographyText>
		</div>
		<div v-else class="spinner">
			<ASpin />
		</div>
	</AModal>
</template>

<style scoped>
	input {
		margin-top: 10px;
	}

	.spinner {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>