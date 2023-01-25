
<script setup>
	import { defineComponent, ref } from 'vue';

	const visible = ref(false);

	const showModal = () => {
		visible.value = true;
	}

	const handleOk = (e) => {
		visible.value = false;
	}
</script>

<template>
  <AButton @click="showModal">Upload Photo</AButton>
	<AModal
		v-model:visible="visible"
		title="Upload Photo"
		@ok="handleOk"
	>
		<p>Some contents...</p>
		<p>Some contents...</p>
		<p>Some contents...</p>
	</AModal>
</template>

<style scoped>
</style>