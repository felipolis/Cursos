

<template>
	<div class="header">
		<slot name="header"></slot>
	</div>
	<div class="body">
		<h1>Title</h1>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quo debitis adipisci animi itaque molestiae nesciunt ut nemo! Alias eius consequatur autem odit a beatae, sapiente recusandae sequi est consectetur.</p>
		<slot></slot>
	</div>
	<div class="footer">
		<slot name="footer"></slot>
	</div>
</template>