
<script setup>
	import { ref, defineProps } from 'vue';

	const props = defineProps(['isLogin'])

	const visible = ref(false);

	const showModal = () => {
		visible.value = true;
	}

	const handleOk = () => {
		visible.value = false;
	}

	const title = props.isLogin ? 'Login' : 'Signup'

</script>


<template>
	<div>
		<AButton class="btn" type="primary" @click="showModal">{{ title }}</AButton>
		<AModal
			v-model:visible="visible"
			:title="title"
			@ok="handleOk"
		>
			<AInput
				class="input"
				v-if="!props.isLogin"
				v-model:value="username"
				placeholder="Username"
				/>
				<AInput
				class="input"
				v-model:value="email"
				placeholder="Email"
				/>
				<AInput
				class="input"
				v-model:value="password"
				placeholder="Password"
			/>

		</AModal>
	</div>
</template>


<style scoped>
	.btn {
		margin-left: 10px;
	}

	.input {
		margin-top: 5px;
	}
</style>