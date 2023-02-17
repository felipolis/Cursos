
<script setup>

    const route = useRoute()
    const { cars } = useCars()

    const { toTitleCase } = useUtilities()

	useHead({
		title: toTitleCase(route.params.name)
	})

    const car = computed(() => {
        return cars.find(c => c.id === parseInt(route.params.id))
    })

    definePageMeta({
        layout: 'custom',
    })
</script>

<template>
    <div v-if="car">
        <CarDetailHero :car="car"/>
        <CarDetailAttributes :features="car.features" />
        <CarDetailDescription :descriprion="car.description" />
        <CarDetailContact />
    </div>
</template>