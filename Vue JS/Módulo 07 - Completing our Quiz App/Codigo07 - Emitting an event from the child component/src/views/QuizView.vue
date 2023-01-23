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
    const numberOfCorrectAnswers = ref(0);

    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
    const barPercentage = computed(() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`)

    const onOptionSelected = (isCorrect) => {
        if (isCorrect) {
            numberOfCorrectAnswers.value++;
        }

        currentQuestionIndex.value++;
    }

</script>

<template>
    <div>
        <QuizHeader 
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        />
        <div>
            <Question 
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
            />
            {{ numberOfCorrectAnswers }}
        </div>
        <button @click="currentQuestionIndex++">
            Next Question
        </button>
    </div>
</template>
