<script setup>
  import { ref, watch } from 'vue'
  import q from '../data/quizes.json'
  import Card from '../components/Card.vue'

  const quizes = ref(q)
  const search = ref('')

  watch(search, (value) => {
    if (value) {
      quizes.value = q.filter((quiz) => {
        return quiz.name.toLowerCase().includes(value.toLowerCase())
      })
    } else {
      quizes.value = q
    }
  })

  const beforeEnter = () => {
    console.log('BEFORE ENTER')
  }

  const enter = () => {
    console.log('ENTER')
  }

  const afterEnter = () => {
    console.log('AFTER ENTER')
  }
  
</script>

<template>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <TransitionGroup 
        name="card" 
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
      </TransitionGroup>
    </div>
</template>

<style scoped>
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  /* CARD */
  .card-enter-from {
    transform: translateY(-50px);
    opacity: 0;
  }

  .card-enter-to {
    transform: translateY(0);
    opacity: 1;
  }

  .card-enter-active {
    transition: all 0.4s ease;
  }


</style>