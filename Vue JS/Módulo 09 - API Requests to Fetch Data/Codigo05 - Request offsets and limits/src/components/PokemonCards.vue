<script setup>
	import axios from 'axios';

	const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=8&offset=4')

	/* 
	
		limit e offset são parâmetros comumente usados em requisições HTTP para paginação de dados.

		limit é usado para especificar o número de registros que devem ser retornados em uma única requisição. Por exemplo, se você definir o limite como 10, a requisição irá retornar os 10 primeiros registros.

		offset é usado para especificar a partir de qual registro os dados devem ser retornados. Por exemplo, se você definir o offset como 10 e o limite como 10, a requisição irá retornar os 10 registros subsequentes ao décimo registro. Isso é útil para paginação, permitindo que o usuário navegue entre as páginas de dados retornando os registros apropriados.

		Juntos, esses parâmetros permitem que você paginar facilmente grandes conjuntos de dados, baixando somente os que são necessários e melhorando assim a performance e a experiência do usuário.

	*/



	console.log(response);
</script>

<template>
	<div>
		<h1>Pokemon Cards</h1>
		<p>{{ response.data.results.length }}</p>
		<p>{{ response.data.results }}</p>
	</div>
</template>