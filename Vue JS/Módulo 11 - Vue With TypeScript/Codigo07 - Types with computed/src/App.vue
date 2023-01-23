<script setup lang="ts">
  import { ref, computed } from 'vue'
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

  const count = computed<{
    female: number,
    male: number
  }>(() => {
    return invitees.value.reduce((countObj, invitee) => {
      if (invitee.gender === GENDER.MALE) {
        return {
          ...countObj,
          male: countObj.male + 1
        }
      }

      return {
        ...countObj,
        female: countObj.female + 1
      }
    }, {male: 0, female: 0})
  })

  /* 
  
    1 - A constante "count" é criada como um objeto computado que retorna um objeto com dois valores numéricos, "female" e "male".

    2 - O método "reduce" é aplicado à lista "invitees.value" e o objeto de contagem inicial é definido como "{male: 0, female: 0}".

    3 - Dentro do método "reduce", é verificado se o gênero do convidado atual é igual a "GENDER.MALE".

    4 - Se for verdadeiro, é retornado um novo objeto com a contagem atualizada para "male" (incrementada em 1).

    5 - Se for falso, é retornado um novo objeto com a contagem atualizada para "female" (incrementada em 1).

    6 - O objeto computado "count" agora contém a contagem total de convidados do gênero masculino e feminino.

    OBS: "countObj" é uma variável que representa o objeto de contagem atual no método "reduce". Ele é o primeiro argumento passado para a função de retorno dentro do método "reduce" e é inicializado com o objeto "{male: 0, female: 0}" passado como o segundo argumento do método "reduce". Cada vez que a função de retorno é chamada, "countObj" é atualizado para refletir a contagem atualizada de convidados do gênero masculino e feminino.
  
  */

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
      <div>
        <p>Females - {{ count.female }}</p>
        <p>Males - {{ count.male }}</p>
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