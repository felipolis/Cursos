<script setup>
  import Parent from './components/Parent.vue'
  import { ref, provide } from 'vue'

  const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])

  provide('numbers', numbers)

  const addNumber = () => {
    numbers.value.push(numbers.value.length + 1)
  }

</script>


<template>
  <main>
    <Parent />
  </main>
</template>


<style scoped>
  main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
  }
</style>
