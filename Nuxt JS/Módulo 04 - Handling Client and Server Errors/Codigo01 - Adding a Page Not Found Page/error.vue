
<script setup>
    const handleError = () => {
        navigateTo('/')
    }
</script>

<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h1 class="text-9xl">404</h1>
        <p class="mt-7 text-4xl">
            Page not found
        </p>
        <button @click="handleError" class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white">
            Go Back
        </button>
    </div>
</template>