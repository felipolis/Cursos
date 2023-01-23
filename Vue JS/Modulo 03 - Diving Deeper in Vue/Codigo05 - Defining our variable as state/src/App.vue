<script setup>
  import { ref } from "vue";

  const count = ref(0);

  const addToCount = () => {
    console.log("Adding to count");
    count.value = count.value + 1;
  };

  const subtractFromCount = () => {
    console.log("Subtracting from count");
    count.value = count.value - 1;
  };
</script>

<template>
  <div>
    <main>
      <div>
        <h4>The current count is...</h4>
        <h1>{{ count }}</h1>
        <button @click="subtractFromCount()">-</button>
        <button @click="addToCount()">+</button>
      </div>
    </main>
  </div>
</template>

<style scoped>
  main {
    background-color: aliceblue;
    color: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    text-align: center;
  }
</style>