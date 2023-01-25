
<script setup>
	import { defineComponent, ref } from 'vue';
	import { supabase } from '../supabase.js';
	import { useUserStore } from '../stores/users.js';
	import { storeToRefs } from 'pinia';

	const visible = ref(false);
	const caption = ref('');
	const file = ref(null);

	const userStore = useUserStore();

	const { user } = storeToRefs(userStore);

	const showModal = () => {
		visible.value = true;
	}

	const handleOk = async(e) => {
		const filename = Math.floor(Math.random() * 1000000000)
		if(file.value) {
			const {data, error} = await supabase.storage.from('images').upload('public/' + filename, file.value)
			if (data) {
				await supabase.from('posts').insert({
					url: data.path,
					caption: caption.value,
					owner_id: user.value.id
				})
			}
		}
		visible.value = false;
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
		<input 
			type="file" 
			accept=".jpeg,.png"
			@change="handleUploadChange"
		>
		<AInput 
			v-model:value="caption" 
			placeholder="Caption..."
			:maxLength="50"
		>

		</AInput>
	</AModal>
</template>

<style scoped>
	input {
		margin-top: 10px;
	}
</style>