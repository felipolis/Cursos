
<script setup>
	import Card from './Card.vue';
	import { supabase } from '../supabase';
	import { useUserStore } from '../stores/users';
	import { storeToRefs } from 'pinia';
	import { onMounted, ref } from 'vue';
	import Observer from './Observer.vue';

	const userStore = useUserStore();
	const { user } = storeToRefs(userStore);

	const posts = ref([]);

	const fetchData = async () => {
		const { data: followings } = await supabase
			.from('followers_following')
			.select('following_id')
			.eq('follower_id', user.value.id);

		const owner_ids = followings.map((f) => f.following_id);

		const { data } = await supabase
			.from('posts')
			.select()
			.in('owner_id', owner_ids)
			.order('created_at', { ascending: false });

		posts.value = data;
	}

	const fetchNextSet = () => {
		console.log('FETCH NEXT SET OF DATA');
	}

	onMounted(() => {
		fetchData();
	})

</script>

<template>
	<div class="timeline-container">
		<Card v-for="post in posts" :key="post.id" :post="post"/>
		<Observer v-if="posts.length" @intersect="fetchNextSet"/>
	</div>
</template>
