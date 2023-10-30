<template>
  <header class="hidden lg:block">
    <nav class="flex items-center justify-between py-5 px-10">
      <router-link to="/">
        <h1 class="text-3xl font-bold text-accent-2">
          Let's<span class="text-accent-1">Cook</span>
        </h1>
      </router-link>
      <div class="flex gap-8 navItems">
        <router-link :to="{ name: 'home' }" class="navItem textHover">Home</router-link>
        <router-link :to="{ name: 'about' }" class="navItem textHover">About</router-link>
        <router-link :to="{ name: 'recipes' }" class="navItem textHover" :class="recipesLinkClass">
          Recipes
        </router-link>
        <router-link :to="{ name: 'download' }" class="navItem textHover">Download</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navItem {
  @apply font-normal text-lg;
}

.router-link-exact-active {
  @apply text-accent-1;
}
</style>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isRecipesRoute = computed(() => {
  return route.matched.some(record => record.name === 'recipes');
});

const recipesLinkClass = computed(() => {
  return {
    'text-accent-1': isRecipesRoute.value,
  };
});
</script>