<template>
    <div class="md:h-[80vh] flex px-5 md:px-20 py-5 justify-between items-center relative mb-14">
        <div class="flex flex-col gap-10 md:basis-2/3">
            <h2 class="text-6xl md:text-7xl font-bold"><span class="text-accent-1">Let's Start Cooking
                <br/></span>With Popular Recipes</h2>
            <div class="text-xl">
                <p class="mb-1">Want to learn to cook but confused to start?</p>
                <p>No Need to worry again!</p>
            </div>
            <div class="flex flex-col md:flex-row gap-5 flex-wrap">
                <router-link to="/recipes"
                             class="bg-accent-1 text-bkg px-8 hover:bg-content  text-bkg button">
                    Browse Recipes</router-link>
                <router-link to="/download"
                             class="bg-white text-accent-1 border-2 border-accent-1 px-10 button hover:text-content">
                    Get App</router-link>
            </div>
        </div>
        <div class="hidden md:block " >
            <img src="../assets/pan.png"
                 alt=""
                 srcset=""
                 class="w-[600px]">
        </div>
    </div>
</template>

<style scoped>
.button {
    @apply py-4 rounded-lg text-xl hover:transition duration-300 ease-in-out text-center
}

</style>
<script setup>
</script>