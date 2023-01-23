<script setup>
  import { ref, reactive } from 'vue'


  /* const color = ref({
    red: 0,
    green: 0,
    blue: 0
  }) */

  const color = reactive({
    red: 0,
    green: 0,
    blue: 0
  })

</script>


<template>
  <main :style="{backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`}">
    <div>
      <input type="number" v-model="color.red" placeholder="red">
      <input type="number" v-model="color.green" placeholder="green">
      <input type="number" v-model="color.blue" placeholder="blue">
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
