<script setup lang="ts">
  import { ref } from 'vue'
  import Card from './components/Cards.vue';

  enum GENDER {
    MALE,
    FEMALE
  }

  interface Invitee {
    id: number;
    name: string;
    gender: GENDER;
  }

  const name = ref<string>('')
  const gender = ref(GENDER.MALE)
  const invitees = ref<Invitee[]>([])

  const addInvitee = (): void => {
    if (name.value) {
      invitees.value.push({
        id: Math.floor(Math.random() * 1000000),
        name: name.value,
        gender: gender.value
      })
      name.value = ''
      gender.value = GENDER.MALE
    }
  }

</script>

<template>
  <main>
    <div>
      <h1>People Invited to My Party</h1>
      <div class="input-container">
        <input 
          v-model="name" 
          type="text" 
          placeholder="Name..."
          @keypress.enter="addInvitee"
        >
        <select v-model="gender" @keypress.enter="addInvitee">
          <option :value="GENDER.MALE">Male</option>
          <option :value="GENDER.FEMALE">Female</option>
        </select>
      </div>
      <div class="cards-container">
        <Card v-for="invitee in invitees" :key="invitee.id" :invitee="invitee" />
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