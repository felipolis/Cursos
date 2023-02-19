
<script setup>

    const route = useRoute()
    const { toTitleCase } = useUtilities()

    const { data: car } = await useFetchCar(route.params.id)

	useHead({
		title: toTitleCase(route.params.name)
	})

    definePageMeta({
        layout: 'custom',
    })
</script>

<template>
    <div>
        <CarDetailHero :car="car"/>
        <CarDetailAttributes :features="car.features" />
        <CarDetailDescription :descriprion="car.description" />
        <CarDetailContact />
    </div>
</template>