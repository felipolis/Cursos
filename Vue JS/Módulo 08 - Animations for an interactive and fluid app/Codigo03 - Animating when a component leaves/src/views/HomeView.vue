<script setup>
  import { ref } from 'vue'

  const showText = ref(false)
</script>

<template>
  <main>
    <transition name="fade">
      <h1 v-if="showText">Hello World</h1>
    </transition>
    <button @click="showText = !showText">Toggle</button>
  </main>
</template>

<style scoped>

  .fade-enter-from{
    opacity: 0;
  }

  .fade-enter-to{
    opacity: 1;
  }

  .fade-enter-active{
    transition: all 0.5s ease;
  }

  .fade-leave-from{
    opacity: 1;
  }

  .fade-leave-to{
    opacity: 0;
  }

  .fade-leave-active{
    transition: all 0.5s ease;
  }


</style>
