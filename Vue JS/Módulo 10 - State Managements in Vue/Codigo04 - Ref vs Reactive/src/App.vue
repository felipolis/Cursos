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

  /* 
  
    No Vue.js 3, o "ref" é usado para criar referências a valores não reativos. Isso significa que esses valores não serão automaticamente observados pelo Vue e, portanto, não causarão atualizações na interface do usuário quando mudarem. O "reactive" é usado para criar objetos reativos, ou seja, objetos cujos valores são automaticamente observados pelo Vue e causarão atualizações na interface do usuário quando mudarem.

    - Enquanto que o ref aceita qualquer tipo de valor, o reactive aceita apenas objetos.
    
    - Para acessar uma variavel do ref é necessário usar o ".value", enquanto que no reactive não é necessário.

    - ref consegue atualizar todo o objeto, enquanto que o reactive não consegue atualizar todo o objeto, apenas o valor das propriedades.
  
  */

  const selectRandomColor = () => {
    color.red = Math.floor(Math.random() * 255)
    color.green = Math.floor(Math.random() * 255)
    color.blue = Math.floor(Math.random() * 255)
  }



</script>


<template>
  <main :style="{backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`}">
    <div>
      <input type="number" v-model="color.red" placeholder="red">
      <input type="number" v-model="color.green" placeholder="green">
      <input type="number" v-model="color.blue" placeholder="blue">
      <button @click="selectRandomColor">Select random color</button>
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
