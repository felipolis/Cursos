
<script setup>

    const route = useRoute()

	useHead({
		title: toTitleCase(route.params.name)
	})

    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    definePageMeta({
        layout: 'custom',
    })
</script>

<template>
    <div>
        <CarDetailHero />
        <CarDetailAttributes />
        <CarDetailDescription />
        <CarDetailContact />
    </div>
</template>