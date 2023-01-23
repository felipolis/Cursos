<script setup lang="ts">
  import { ref } from 'vue'

  enum GENDER {
    MALE,
    FEMALE
  }

  const name = ref<string>('')
  const gender = ref(GENDER.MALE)

</script>

<template>
  <main>
    <div>
      <h1>People Invited to My Party</h1>
      <div class="input-container">
        <input v-model="name" type="text" placeholder="Name...">
        <select v-model="gender">
          <option :value="GENDER.MALE">Male</option>
          <option :value="GENDER.FEMALE">Female</option>
        </select>
      </div>
    </div>

  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
  }

  input, select {
    width: 100%;
    padding: 5px;
    margin-bottom: 2px;
  }
</style>