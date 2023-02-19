
<script setup>
	const user = useSupabaseUser()
</script>



<template>
	<header 
		class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
		<NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
		<div v-if="user" class="flex">
			<NuxtLink class="mr-5" to="/profile/listings">Profile</NuxtLink>
			<p class="cursor-pointer">Logout</p>
		</div>
		<div v-else class="flex">
			<NuxtLink class="mr-5" to="/login">Login</NuxtLink>
		</div>
	</header>
</template>