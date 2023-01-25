
<script setup>
	import Card from './Card.vue';
	import { supabase } from '../supabase';
	import { useUserStore } from '../stores/users';
	import { storeToRefs } from 'pinia';
	import { onMounted } from 'vue';

	const userStore = useUserStore();
	const { user } = storeToRefs(userStore);

	const data = [
		{
			id: 1,
			username: 'user1',
			url: 'https://conteudo.imguol.com.br/c/parceiros/6e/2022/11/15/a-saga-harry-potter-esta-disponivel-no-hbo-max-1668541198115_v2_3x4.jpg',
			caption: 'I love Hogwarts!'
		},
		{
			id: 2,
			username: 'user2',
			url: 'http://4.bp.blogspot.com/-clk-DZnT4F0/Tarp4GMLT_I/AAAAAAAAAKI/krB9xuLDk6c/s1600/Hermione-Jean-Granger.jpg',
			caption: 'Today I had a test!'
		},
		{
			id: 3,
			username: 'user3',
			url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg',
			caption: 'Hello, ladies!'
		}
	]

	const fetchData = async () => {
		const { data: followings } = await supabase
			.from('followers_following')
			.select('following_id')
			.eq('follower_id', user.value.id);

		const owner_ids = followings.map((f) => f.following_id);

		const res = await supabase
			.from('posts')
			.select()
			.in('owner_id', owner_ids)


		console.log(res);
	}



	onMounted(() => {
		fetchData();
	})

</script>

<template>
	<div class="timeline-container">
		<Card v-for="post in data" :key="post.id" :post="post"/>
	</div>
</template>
