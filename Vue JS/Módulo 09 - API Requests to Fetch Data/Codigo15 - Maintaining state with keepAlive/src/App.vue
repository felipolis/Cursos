<script setup>
  import PokemonSuspense from './components/PokemonSuspense.vue';
  import RickMortyCards from './components/RickMortyCards.vue';
  import Hero from './components/Hero.vue';
  import { ref } from 'vue';

  const isPokemon = ref(true);

</script>

<template>
  <main>
    <Hero 
      :isPokemon="isPokemon"
      @selectShow="isPokemon = !isPokemon"
    />
    <KeepAlive>
      <component :is="isPokemon ? PokemonSuspense : RickMortyCards"/>
    </KeepAlive>

    <!-- 

      O componente <KeepAlive> é usado para manter os componentes em cache, o que significa que eles não serão recriados quando alternar entre eles, mas sim reaproveitados. Isso pode ser útil para melhorar o desempenho em aplicações com muitos componentes que precisam ser alternados frequentemente.

      O componente <Component> é usado para renderizar dinamicamente um componente baseado em uma propriedade. Ele é usado para criar componentes de tipo "Switch" ou "Router View" onde o componente renderizado muda de acordo com o estado da aplicação.

      Exemplo de uso:

      <KeepAlive>
        <Component :is="currentComponent" />
      </KeepAlive>

      Neste exemplo, o componente atual a ser renderizado é determinado pela propriedade "currentComponent" e é mantido em cache pelo componente <KeepAlive>.

    -->

  </main>
</template>

<style scoped>

</style>
