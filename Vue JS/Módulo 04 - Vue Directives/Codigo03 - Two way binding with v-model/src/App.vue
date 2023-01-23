
<script setup>
  import { ref } from 'vue'

  const showModal = ref(false)
  const newNote = ref('')
  
</script>

<template>
  <div>
    <main>

      <div v-if="showModal" class="overlay">
        <div class="modal">
          {{ newNote }}
          <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
          <button>Add Note</button>
          <button class="close" @click="showModal = false">Close</button>
        </div>
      </div>
      <!-- 
        "Two-way binding" é uma técnica usada para criar uma ligação bidirecional entre um elemento do modelo (dado) e um elemento da visualização (input, por exemplo) no Vue.js. Isso significa que qualquer alteração no elemento da visualização será refletida no elemento do modelo e vice-versa.

        Por exemplo, imagine que você tem um campo de texto (input) que está vinculado a uma variável "message" no seu modelo. Se você digitar algo no campo de texto, a variável "message" será atualizada automaticamente para refletir o que você digitou. Se você mudar o valor da variável "message" no seu modelo, o campo de texto será atualizado automaticamente para refletir a nova mensagem.

        Para habilitar o "two-way binding" em Vue, você pode usar o diretivo "v-model" em um elemento da visualização, como este:

        <input v-model="message">

        Isso criará uma ligação bidirecional entre o valor do campo de texto e a variável "message" no seu modelo. O v-model é uma abreviação de v-bind e v-on:value, ou seja, ele é basicamente um atalho para fazer o binding do elemento com o valor e escutar os eventos de mudança dele.

        Em resumo, o "two-way binding" é uma técnica poderosa que permite que você mantenha a sincronia entre os elementos do modelo e da visualização, garantindo que as alterações sejam refletidas em ambos os lados automaticamente.
       -->

      <div class="container">
        <header>
          <h1>Notes</h1>
          <button @click="showModal = true">+</button>
        </header>

        <div class="cards-container">
          <div class="card">
            <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis aspern lor</p>
            <p class="date">2020</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
    background-color: aliceblue;
    color: rgb(28, 27, 27);
  }

  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    border-radius: 100%;
    color: white;
    font-size: 20px;
  }

  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .date {
    font-size: 12.5px;
    font-weight: bold;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    margin-top: 15px;
    cursor: pointer;
  }

  .modal .close {
    background-color: rgb(193, 15, 15);
    margin-top: 7px;
  }
</style>