
<script setup>
	import { defineProps } from 'vue';

	const props = defineProps(['post']);
</script>


<template>
	<ACard hoverable style="width: 240px" class="card">
		<template #cover>
			<img :src="`SUPABASE_BUCKET_BASE_URL${post.url}`" alt="">
		</template>
		<ACardMeta :title="post.username">
			<template #description>
				{{ post.caption }}
			</template>
		</ACardMeta>
	</ACard>
</template>


<style scoped>
.card {
	margin-bottom: 20px;
}
</style>