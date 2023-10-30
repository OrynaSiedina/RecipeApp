<template>
  <div class="max-w-[800px] mx-auto p-8">
    <button @click="goBack" class="sticky top-0 bg-accent-2 text-bkg ">← Go Back</button>
    <h1 class="text-4xl font-bold mb-5 text-accent-1">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Origin:</strong> {{ meal.strArea }}
      </div>
    </div>

    <div class="my-3 text-justify">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <li v-for="(ingredient, index) in mealIngredients" :key="index">
            {{ index + 1 }}. {{ ingredient }}
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <li v-for="(measure, index) in mealMeasures" :key="index">
            {{ index + 1 }}. {{ measure }}
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 ">
      <Button :href="meal.strYoutube" text="Watch on YouTube"/>
      <Button :href="meal.strSource" text="View Original Source"/>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router';
import axiosClient from '../axiosClient.js';
import Button from '../components/Button.vue';
import router from "../router/index.js";

const route = useRoute();
const meal = ref({});
const mealIngredients = ref([]);
const mealMeasures = ref([]);

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
      meal.value = data.meals[0] || {};

      for (let i = 1; i <= 20; i++) {
        const component = meal.value[`strIngredient${i}`];
        const ingredient = component.charAt(0).toUpperCase() + component.slice(1).toLowerCase();
        let measure = meal.value[`strMeasure${i}`];
        if (ingredient) {
          mealIngredients.value.push(ingredient);
          if (measure === " ") measure = 'to taste';
          mealMeasures.value.push(measure);
        }
      }
    })
  window.scrollTo(0, 0);
})
const goBack = () => {
  router.go(-1);
}
</script>
