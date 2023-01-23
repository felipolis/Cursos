<script setup lang="ts">

  // ----------------- 01 - Basic Types ----------------- //
  let name: string = 'Felipe';
  let age: number = 23;
  let isDeveloper: boolean = true;
  let sex: string;

  //sex = false; // Error
  sex = 'Male';

  // ----------------- 02 - Arrays ----------------- //
  const arrayOfNumbers: (string | number)[] = [];
  arrayOfNumbers.push("Harry Potter");    // Ok
  //arrayOfNumbers.push(true);            // Error
  //arrayOfNumbers.push([]);              // Error
  arrayOfNumbers.push(1);                 // Ok
  arrayOfNumbers.push(2);                 // Ok
  arrayOfNumbers.push(3);                 // Ok



  // ----------------- 03 - Objects ----------------- //
  enum GENDER {
    FEMALE,
    MALE,
    NON_BINARY
  }

  interface Employee {
    name: string,
    age: number,
    sex: GENDER,
    isDeveloper?: boolean
  }

  const employee: Employee = {
    name: 'Felipe',
    age: 23,
    sex: GENDER.MALE
  }

  //employee.age = '24'; // Error
  employee.age = 24; // Ok

  employee.isDeveloper = true; // Ok
  //employee.isSingle = true; // Error

</script>

<template>
  <main>
    Hello World
  </main>
</template>

<style scoped>

</style>