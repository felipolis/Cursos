<script setup>
  import { ref } from 'vue'

  const showGreet = ref(true)
</script>

<template>
  <main>
    <div class="container">
      <transition name="fade">
        <h1 v-if="showGreet">Hello World</h1>
        <h1 v-else>Goodbye World</h1>
      </transition>
    </div>
    <button @click="showGreet = !showGreet">Toggle</button>
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

  .container {
    position: relative;
  }

  h1 {
    position: absolute;
  }

  button {
    margin-top: 50px;
  }

</style>
