<template>
    <div class="flex p-5 justify-center  items-center relative mb-14 flex-col md:flex-row md:justify-between md:px-20">
        <div class="flex flex-col gap-10 ">
            <h2 class="text-4xl md:text-6xl font-bold"><span class="text-accent-1">Let's Start Cooking
                <br/></span>With Popular Recipes</h2>
            <div class="text-xl">
                <p class="mb-1">Want to learn to cook but confused to start?</p>
                <p>No Need to worry again!</p>
            </div>
            <HerroButtons/>
        </div>
        <div>
            <img src="../assets/pan.png"
                 alt=""
                 srcset=""
                 class="w-[600px]">
        </div>
    </div>
</template>

<script setup>
import HerroButtons from "./HerroButtons.vue";
</script>