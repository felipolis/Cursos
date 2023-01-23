<script setup>
    import Question from '../components/Question.vue'
    import QuizHeader from '../components/QuizHeader.vue'
    import quizes from '../data/quizes.json'

    import { useRoute } from 'vue-router';
    import { ref, watch, computed } from 'vue';

    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizes.find(quiz => quiz.id === quizId);
    const currentQuestionIndex = ref(0);

    /* 
    
    const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

    watch(() => currentQuestionIndex.value, () => {
        questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
    }) 

    Em Vue.js 3, ambos os "watch" e "computed" propriedades são usadas para reagir a mudanças em dados. A principal diferença entre os dois é como eles são executados.

    "Computed" é uma propriedade computada, o que significa que ela é automaticamente recalculada quando alguma das suas dependências é alterada. Ela também é cacheada, o que significa que o valor só é recalculado se uma das suas dependências mudar.

    "Watch" é uma propriedade de observação, o que significa que ela é executada sempre que a propriedade especificada muda. Ele não é cacheada, o que significa que ele é chamado sempre que a propriedade é alterada, independentemente de se o valor realmente mudou.

    Em resumo, "computed" é usado para cálculos baseados em dados e "watch" é usado para executar uma ação específica quando um dado é alterado.
    
    */

    const questionStatus = computed(() => {
        return `${currentQuestionIndex.value}/${quiz.questions.length}`
    })

</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus"/>
        <div>
            <Question :question="quiz.questions[currentQuestionIndex]"/>
        </div>
        <button @click="currentQuestionIndex++">
            Next Question
        </button>
    </div>
</template>
