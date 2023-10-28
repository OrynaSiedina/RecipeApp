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
        <template v-if="activeTab === index">
          {{ tab.content }}
        </template>
      </div>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue';

const activeTab = ref(0);
const tabs = [
  { label: 'KEY WORD', content: 'Content for Item One' },
  { label: 'LETTER', content: 'Content for Item Two' },
  { label: 'AREA', content: 'Content for Item Three' },
];

</script>
