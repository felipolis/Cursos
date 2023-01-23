<script setup>
  import { ref } from 'vue'

  const red = ref(0)
  const green = ref(0)
  const blue = ref(0)


</script>


<template>
  <main :style="{backgroundColor: `rgb(${red}, ${green}, ${blue})`}">
    <div>
      <input type="number" v-model="red" placeholder="red">
      <input type="number" v-model="green" placeholder="green">
      <input type="number" v-model="blue" placeholder="blue">
    </div>
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
