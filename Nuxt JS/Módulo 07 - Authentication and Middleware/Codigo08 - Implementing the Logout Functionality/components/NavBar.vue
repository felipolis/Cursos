
<script setup>
	const user = useSupabaseUser()
	const supabase = useSupabaseClient()

	const logout = async () => {
		//  1) make user.value = null
		//  2) Remove JWT from cookie browser
		//  3) Redirect to home page
		const { error } = await supabase.auth.signOut()

		if (error) {
			console.log(error)
		}
		
		navigateTo("/")
	}
</script>



<template>
	<header 
		class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
		<NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
		<div v-if="user" class="flex">
			<NuxtLink class="mr-5" to="/profile/listings">Profile</NuxtLink>
			<p class="cursor-pointer" @click="logout">Logout</p>
		</div>
		<div v-else class="flex">
			<NuxtLink class="mr-5" to="/login">Login</NuxtLink>
		</div>
	</header>
</template>