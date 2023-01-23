<script setup>
	import axios from 'axios';
	import { ref, watch, onMounted, onBeforeMount } from 'vue';
	import Card from './Card.vue';

	onMounted(() => {
		console.log('MOUNTED')
	})

	onBeforeMount(() => {
		console.log('BEFORE MOUNTED')
	})

	/* 
	
		onMounted: é chamado após o componente ser montado na página, ou seja, depois que o Vue.js adicionou o componente ao DOM. Este hook é útil para configurar coisas como eventos de clique, listeners de eventos, etc.

		onUpdated: é chamado após o componente ser atualizado, ou seja, depois que o Vue.js re-renderizou o componente devido a mudanças em seus dados. Este hook é útil para executar tarefas após as atualizações, como atualizar o estado de um componente filho.

		onUnmounted: é chamado depois que o componente é desmontado, ou seja, depois que o Vue.js remove o componente do DOM. Este hook é útil para limpar recursos alocados pelo componente, como eventos de clique, listeners de eventos, etc.

		onBeforeMount: é chamado antes do componente ser montado, ou seja, antes que o Vue.js adicione o componente ao DOM. Este hook é útil para inicializar dados antes de serem exibidos na página.

		onBeforeUpdate: é chamado antes do componente ser atualizado, ou seja, antes que o Vue.js re-renderize o componente devido a mudanças em seus dados. Este hook é útil para fazer alguma lógica antes de atualizar o componente.

		onBeforeUnmount: é chamado antes do componente ser desmontado, ou seja, antes que o Vue.js remova o componente do DOM. Este hook é útil para fazer alguma lógica antes de desmontar o componente.

		onErrorCaptured: é chamado quando um erro é capturado em um componente ou em um componente filho. Este hook permite que você manuseie erros de forma global em um componente.

		onRenderTracked: é chamado quando o Vue.js começa a rastrear as dependências de um componente. Este hook é útil para registrar dependências personalizadas.

		onRenderTriggered: é chamado quando o Vue.js re-renderiza um componente devido a mudanças nas suas dependências. Este hook é útil para reagir às mudanças nas dependências de um componente.

		onActivated: é chamado quando um componente é ativado. Este hook é útil para fazer alguma lógica quando um componente é ativado.

		onDeactivated: é chamado quando um componente é desativado. Este hook é útil para fazer alguma lógica quando um componente é desativado.

		onServerPrefetch: é chamado no lado do servidor, antes da renderização inicial do componente. Este hook é útil para carregar dados assíncronos antes da primeira renderização do componente, o que pode melhorar o desempenho e a experiência do usuário. Isso é especialmente útil em aplicativos universais (SSR) para garantir que os dados estejam disponíveis no lado do servidor antes da renderização inicial.
		
	*/

</script>

<template>
	<div class="container">
		<div class="cards">

		</div>
		<div class="button-container">

		</div>
	</div>
</template>

<style scoped>
	.container {
    background-color: rgb(27, 26, 26);
    padding: 30px;
	margin-top: 100px;
	}
	.cards {
			max-width: 1000px;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			height: 700px
	}
	.cards h3 {
			font-weight: bold;
	}
	.cards p {
			font-size: 10px;
	}
	.jobs {
			display: flex;
			flex-wrap: wrap;
	}
	.button-container {
			display: flex;
			justify-content: center;
			padding-top: 30px
	}
	.button-container button {
			border: none;
			width: 50px;
			height: 50px;
			border-radius: 100%;
			margin: 0 5px;
			cursor: pointer;
	}
	.spinner {
			display: flex;
			align-items: center;
			justify-content: center;
	}
</style>