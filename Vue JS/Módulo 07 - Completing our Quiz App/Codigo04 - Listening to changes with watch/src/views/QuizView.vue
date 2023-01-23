<script setup>
    import Question from '../components/Question.vue'
    import QuizHeader from '../components/QuizHeader.vue'
    import quizes from '../data/quizes.json'

    import { useRoute } from 'vue-router';
    import { ref, watch } from 'vue';

    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizes.find(quiz => quiz.id === quizId);
    const currentQuestionIndex = ref(0);

    const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

    watch(() => currentQuestionIndex.value, () => {
        questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
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
