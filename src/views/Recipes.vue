<template>
  <div class="flex justify-center">
    <h1 class="text-4xl text-accent-1 font-bold mb-4">SEARCH RECIPE BY:</h1>
  </div>

  <div>
    <div class="flex">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
        'cursor-pointer p-2 border-t border-l border-r border-accent-2 rounded-t text-accent-1 font-bold',
        activeTab === index ? 'bg-accent-2 text-bkg' : '',
      ]"
      >
        {{ tab.label }}
      </div>
    </div>
    <div class=" border border-accent-2 p-4 bg-accent-2 text-bkg">
      <div v-for="(tab, index) in tabs" :key="index">
        <!-- Use the dynamic component based on the activeTab -->
        <component :is="activeComponent"></component>
      </div>
    </div>
  </div>

</template>
<script setup>
import {ref} from 'vue';
import MealsByName from '../components/MealsByName.vue';
import {computed} from "@vue/reactivity";

const activeTab = ref(0);
const tabs = [
  {label: "NAME", component: "MealsByName"},
  {label: "LETTER", component: "MealsByName"},
  {label: "ORIGIN", component: "MealsByName"},
];

const activeComponent = computed(() => {
  const componentName = tabs[activeTab.value].component;
  return MealsByName;
});
</script>
