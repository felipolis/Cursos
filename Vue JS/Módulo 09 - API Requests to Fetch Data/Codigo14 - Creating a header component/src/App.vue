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
    <PokemonSuspense v-if="isPokemon" />
    <RickMortyCards v-else />
  </main>
</template>

<style scoped>

</style>
