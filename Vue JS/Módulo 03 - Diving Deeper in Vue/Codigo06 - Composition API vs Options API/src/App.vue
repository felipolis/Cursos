
<!-- 
  COMPOSITION API

  A composition API é uma nova maneira de escrever componentes Vue que foi introduzida na versão 3.0. Ela fornece uma sintaxe mais flexível e intuitiva para gerenciar estado e lógica de componentes, além de ser mais fácil de lidar com composição de componentes.

  Ao contrário da options API, que é baseada em objetos, a composition API é baseada em funções. Isso significa que, em vez de declarar suas propriedades, métodos e ciclos de vida como propriedades de um objeto, você os declara como funções dentro do componente.

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
-->


 <!--
  OPTIONS API

  Já a options API é a maneira tradicional de escrever componentes Vue, onde o estado, as propriedades e os métodos são declarados como propriedades de um objeto. Ela foi a primeira maneira de escrever componentes no Vue e ainda é a forma mais comum de se fazer isso.

-->
<script>
  export default ({
    data() {
      return {
        count: 0,
      };
    },

    methods: {
      addToCount() {
        this.count = this.count + 1;
      },

      subtractFromCount() {
        this.count = this.count - 1;
      },
    },
  })
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