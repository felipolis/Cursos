<script setup>
  import PokemonCards from './components/PokemonCards.vue';
  import RickMortyCards from './components/RickMortyCards.vue';
  import PracticeSlotVue from './components/PracticeSlot.vue';
</script>

<template>
  <main>
    <!-- <h1>HERO</h1>
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
    <RickMortyCards /> -->
    <PracticeSlotVue>
      <div>
        <h1>Hello</h1>
      </div>
      <template #header>
        <div>
          <h2>This is a header</h2>
          <a href="">Page 1</a>
          <a href="">Page 2</a>
        </div>
      </template>
      <template #footer>
        <div>
          <ul>
            <li>facebook</li>
            <li>linkedin</li>
            <li>instagram</li>
          </ul>
        </div>
      </template>
    </PracticeSlotVue>
  </main>
</template>

<style scoped>

</style>
