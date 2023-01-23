<script setup lang="ts">
  import { ref } from 'vue'

  const number = ref('') // tipo string

  const correctValue = 27 // WARNING!!!! Troque pela string '27'
</script>

<template>
  <main>
    <h1>Guess my Favorite Number</h1>
    <input type="text" v-model="number">
    <h2 v-if="number === correctValue">YOU GUESS IT</h2>

    <br>
    number: {{ typeof(number) }}
    <br>
    correctValue: {{ typeof(correctValue) }}
  </main>
</template>

<style scoped>

</style>