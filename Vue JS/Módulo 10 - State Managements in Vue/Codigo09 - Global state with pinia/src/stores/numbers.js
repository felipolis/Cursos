import { defineStore } from "pinia";

export const useNumbersStore = defineStore(
    "numbers", {
        state: () => {
            return {
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },

        actions: {
            addNumber() {
                this.numbers.push(this.numbers.length + 1)
            }
        },

        getters: {
            doubleNumbers:  (state) => {
                return state.numbers.map(num => num * 2)
            },

            filterNumber: (state) => (minNumber) => {
                return state.numbers.filter(num => num >= minNumber)
            }

        }
    }
);

/* 

    No Vue.js, o "state" é o objeto que armazena os dados da sua aplicação. As "actions" são funções que realizam lógicas e podem mutar o estado. Os "getters" são funções que obtém e filtram os dados do estado.

*/