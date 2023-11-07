<template>

    <TransitionGroup tag="div" class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8" name="list">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </TransitionGroup>

  <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
    There are no meals
  </div>
</template>

<script setup>
import MealItem from './MealItem.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  }
});

</script>

<style scoped>
.list-enter-from{
  opacity: 0;
  transform: scale(0.5);
}
.list-enter-to{
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.5s ease;
}

</style>




