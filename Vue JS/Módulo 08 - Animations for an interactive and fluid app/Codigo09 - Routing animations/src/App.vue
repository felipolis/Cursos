<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="container">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
  <Transition name="route">
    <RouterView />
  </Transition>
</template>

<style scoped>
  .container {
    max-width: 300px;
    margin: 10px auto;
    margin-top: 100px;
  }

  .container a {
    margin-right: 10px;
  }

  /* ROUTE ANIMATION */
  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }

  .route-enter-to {
    opacity: 1;
    transform: translateX(0px);
  }

  .route-enter-active {
    transition: all 0.4s ease;
  }
</style>