
<script setup>
	import { RouterLink } from 'vue-router';
	import Container from './Container.vue';
	import { ref } from 'vue';
	import AuthModal from './AuthModal.vue';

	const searchUsername = ref('');
	const isAuthenticated = ref(false);

	const onSearch = () => {

	}
</script>


<template>
	<ALayoutHeader>
		<Container>
			<div class="nav-container">
				<div class="right-content">
					<RouterLink to="/">Instagram</RouterLink>
					<AInputSearch 
						v-model:value="searchUsername"
						placeholder="username..."
						style="width: 200px;"
						@search="onSearch"
					/>
				</div>
				<div class="left-content" v-if="!isAuthenticated">
					<AuthModal :isLogin="false"/>
					<AuthModal :isLogin="true"/>
				</div>
				<div class="left-content" v-else>
					<AButton type="primary">Profile</AButton>
					<AButton type="primary">Logout</AButton>
				</div>
			</div>
		</Container>
	</ALayoutHeader>
</template>


<style scoped>
	.nav-container {
		display: flex;
		justify-content: space-between;
	}

	.right-content {
		display: flex;
		align-items: center;
	}

	.right-content a {
		margin-right: 10px;
	}

	.left-content {
		display: flex;
		align-items: center;
	}

	.left-content button {
		margin-left: 10px;
	}

</style>