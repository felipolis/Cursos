<!-- 
    // localhost:3000/city/los-angeles/car
    // localhost:3000/city/los-angeles/car/toyota
 -->

<template>
    <div>
        <NavBar />
        
        <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
            <div class="mt-32 flex">
                <CarSideBar />
                <CarCards />
            </div>
        </div>
    </div>
</template>
