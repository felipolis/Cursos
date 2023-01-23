<script setup>
  import PokemonCards from './components/PokemonCards.vue';
  import RickMortyCards from './components/RickMortyCards.vue';
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
    <RickMortyCards />
  </main>
</template>

<style scoped>

</style>
