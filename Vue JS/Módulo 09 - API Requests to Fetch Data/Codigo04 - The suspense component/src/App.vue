<script setup>
  import PokemonCards from './components/PokemonCards.vue';
</script>

<template>
  <main>
    <h1>HERO</h1>
    <Suspense>
      <template #default>
        <PokemonCards />
      </template>
      <template #fallback>
        <div>
          <p>Loading...</p>
        </div>
      </template>
    </Suspense>


    <!-- 

      O componente Suspense em Vue.js 3 é uma nova funcionalidade que permite lidar com a renderização de componentes assíncronos de forma mais fácil e intuitiva. Ele permite que você defina um componente "suspense" que será renderizado enquanto outro componente assíncrono estiver sendo carregado. Isso fornece uma maneira fácil de exibir um indicador de carregamento ou uma mensagem de erro enquanto os dados são carregados.

      Ele deve ser usado em componentes que realizam requisições HTTP porque é uma boa prática mostrar um indicador de carregamento enquanto os dados estão sendo carregados e evitar que o componente seja renderizado com dados incompletos ou inconsistentes. Além disso, ele permite exibir uma mensagem de erro personalizada caso a requisição falhe.

    -->

  </main>
</template>

<style scoped>

</style>
