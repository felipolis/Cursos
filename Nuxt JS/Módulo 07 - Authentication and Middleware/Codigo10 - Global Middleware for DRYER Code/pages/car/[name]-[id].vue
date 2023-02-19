
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

    if(!car.value) {
        throw createError({
            statusCode: 404,
            message: `Car with ID of ${route.params.id} does not exist.`
        })
    }

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