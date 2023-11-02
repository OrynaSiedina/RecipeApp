<template>
  <div v-if="meal" class="flex flex-col gap-x-14 md:flex-row bg-bkg mt-10 rounded-lg">
    <h4 class="text-accent-1 text-4xl text-center pb-4 font-bold md:hidden">Recipe of the Day </h4>
    <img
      class="rounded-lg w-auto h-80"
      :src="meal.strMealThumb"
      :alt="meal.strMeal" />
    <div class="p-2 flex flex-col justify-between gap-y-5" >
      <h4 class="text-accent-1 text-4xl font-bold hidden md:block">Recipe of the Day: </h4>
      <h5 class="text-content text-4xl"> {{ meal.strMeal }}</h5>
      <div>
        <span class="cardBlob">Origin: {{meal.strArea}}</span>
        <span class="cardBlob">Category: {{meal.strCategory}}</span>
        <span class="cardBlob">Tags: {{meal.strTags}}</span>
      </div>
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <button class=" justify-self-end w-full bg-accent-1 hover:bg-accent-2 text-bkg font-bold py-2 px-4 rounded">
          See Details
        </button>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.cardBlob {
  @apply inline-block bg-accent-2 rounded-full px-3 py-1 text-sm font-semibold text-bkg mr-2 mb-2
}
</style>
<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const meal = computed(() => store.state.recipeOfTheDay[0]);

onMounted(() => {
  store.dispatch('getRandomMeal');
});
</script>