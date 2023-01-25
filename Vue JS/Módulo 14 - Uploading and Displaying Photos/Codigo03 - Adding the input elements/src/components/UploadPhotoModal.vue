
<script setup>
	import { file } from '@babel/types';
	import { defineComponent, ref } from 'vue';

	const visible = ref(false);
	const caption = ref('');

	const showModal = () => {
		visible.value = true;
	}

	const handleOk = (e) => {
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