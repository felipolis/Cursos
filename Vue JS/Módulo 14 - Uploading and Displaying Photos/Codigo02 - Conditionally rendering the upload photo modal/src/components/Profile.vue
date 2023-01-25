
<script setup>
	import Container from './Container.vue';
	import UserBar from './UserBar.vue';
	import ImageGallery from './ImageGallery.vue';
</script>


<template>
	<Container>
		<div class="profile-container">
			<UserBar 
				:key="$route.params.username"
				username="felipeacmendes"
				:userInfo="{
					posts: 0,
					followers: 200,
					following: 2156
				}"
			/>
			<ImageGallery 
				:posts="[
					{
						id: 1,
						image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg'
					},
					{
						id: 2,
						image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/RupertGrint2018.jpg/640px-RupertGrint2018.jpg'
					},
					{
						id: 3,
						image: 'https://criticalhits.com.br/wp-content/uploads/2021/10/melhores-frases-ron-weasley.jpg'
					},
					{
						id: 4,
						image: 'https://i.pinimg.com/originals/a1/68/c2/a168c2283daee20fa232a01a8e370a61.jpg'
					},
					{
						id: 5,
						image: 'https://static1.purebreak.com.br/articles/9/97/35/9/@/384531--harry-potter-rony-weasley-rupert-gri-700x700-2.jpg'
					},
					{
						id: 6,
						image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/08/rony-weasley-1200x900-harry-potter.jpg'
					}
				]"
			/>
		</div>
	</Container>
</template>


<style scoped>
	.profile-container {
		display: flex;
		flex-direction: column;
		padding: 20px 0;
	}
</style>