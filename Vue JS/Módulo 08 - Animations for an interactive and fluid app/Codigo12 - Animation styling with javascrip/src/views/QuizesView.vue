<script setup>
  import { ref, watch } from 'vue'
  import q from '../data/quizes.json'
  import Card from '../components/Card.vue'
  import gsap from 'gsap'

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

  const beforeEnter = (el) => {
    // card-enter-from
    console.log('BEFORE ENTER')
    el.style.opacity = 0
    el.style.transform = 'translateY(-100px)'
  }

  const enter = (el) => {
    // card-enter-to
    // card-enter-active
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      delay: el.dataset.index * 0.3,
    })
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
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <Card 
          v-for="(quiz, index) in quizes" 
          :key="quiz.id" 
          :quiz="quiz"
          :data-index="index"
        />
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

</style>