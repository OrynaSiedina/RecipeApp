<template>
  <div class="flex p-5 justify-center  items-center relative mb-14 flex-col md:flex-row md:justify-between md:px-20">
    <div class="flex flex-col gap-10 ">
      <h2 class="text-6xl md:text-7xl font-bold text-accent-1"><span class="text-accent-2">Let's
                </span>Cook</h2>
      <div class="text-xl">
        <p class="mb-1">Unlock the culinary world with the incredible food recipes app.</p>
        <p>No need to worry about how to cook that yummy dish ever again!</p>
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
import HerroButtons from "../components/HerroButtons.vue";
</script>