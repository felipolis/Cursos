
<script setup>
	import { ref, defineProps, reactive } from 'vue';
	import { useUserStore } from '../stores/users.js';
	import { storeToRefs } from 'pinia';

	const userStore = useUserStore();
	const { errorMessage } = storeToRefs(userStore);

	const props = defineProps(['isLogin'])
	const visible = ref(false);

	const userCredentials = reactive({
		email: '',
		password: '',
		username: '',
	})

	const showModal = () => {
		visible.value = true;
	}

	const handleOk = () => {
		userStore.handleSignup(userCredentials);
	}

	const handleCancel = () => {
		userStore.clearErrorMessage();
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
			<template #footer>
				<AButton type="primary" @click="handleCancel">Cancel</AButton>
				<AButton type="primary" @click="handleOk">Submit</AButton>
			</template>
			<AInput
				class="input"
				v-if="!props.isLogin"
				v-model:value="userCredentials.username"
				placeholder="Username"
				/>
				<AInput
				class="input"
				v-model:value="userCredentials.email"
				placeholder="Email"
				/>
				<AInput
				class="input"
				v-model:value="userCredentials.password"
				placeholder="Password"
				type="password"
			/>

			<ATypographyText v-if="errorMessage" type="danger">{{ errorMessage }}</ATypographyText>

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