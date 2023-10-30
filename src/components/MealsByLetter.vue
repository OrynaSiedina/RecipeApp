<template>
  <div class="text-bkg flex flex-wrap justify-center text-3xl gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="flex items-center justify-center hover:scale-150 textHover"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
<style scoped>
.router-link-exact-active {
@apply text-accent-1 font-bold;
}
</style>
