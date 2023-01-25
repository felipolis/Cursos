
<script setup>
	import { ref, onMounted } from 'vue';

	const observer = ref(null);
	const root = ref(null);

	onMounted(() => {
		observer.value = new IntersectionObserver(([entry]) => {
			if (entry && entry.isIntersecting) {
				console.log('intersecting')
			}
		})

		observer.value.observe(root.value)
	})
</script>


<template>
	<div class="observer" ref="root"></div>
</template>


<style scoped>
	.observer {
		width: 30px;
		height: 30px;
		/* background-color: blueviolet; */
	}
</style>