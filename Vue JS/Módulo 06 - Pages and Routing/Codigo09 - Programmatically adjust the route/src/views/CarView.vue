<script setup>
    import { useRoute, useRouter, RouterView } from 'vue-router';
    import cars from '../data/cars.json';

    const route = useRoute();
    const router = useRouter();

    const carId = route.params.id;
    const car = cars.find(car => car.id === carId);

    const showContact = () => {
        if (carId === '4') {
            return;
        }

        return router.push(`/cars/${carId}/contact`);
    }

</script>

<template>
    <div>
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>

        <button @click="showContact">Click for contact</button>
        <RouterView />
    </div>
</template>