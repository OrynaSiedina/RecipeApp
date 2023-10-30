<template>
  <div class="bg-bkg shadow rounded-xl hover:scale-105 transition-all text-content relative">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-64 object-top object-cover"
      />
      <div class="p-2">
        <h3 class="font-bold text-3xl text-center pb-8">{{ meal.strMeal }}</h3>
        <p class="text-right absolute bottom-0 right-0 p-2">Click for Details</p>
      </div>
    </router-link>
  </div>
</template>


<script setup>

const {meal} = defineProps({
  meal: {
    required: true,
    type: Object
  }
})

</script>
