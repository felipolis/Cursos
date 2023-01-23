<script setup>
  import { ref } from 'vue'

  const showText = ref(false)
</script>

<template>
  <main>
    <transition name="color">
      <h1 v-if="showText">Hello World</h1>
    </transition>
    <button @click="showText = !showText">Toggle</button>
  </main>
</template>

<style scoped>

  .color-enter-from{
    background-color: yellow;
  }

  .color-enter-to{
    background-color: blue;
  }

  .color-enter-active{
    transition: all 5s ease;
  }
</style>
