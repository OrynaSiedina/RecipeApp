<template>
  <header class="block lg:hidden">
    <nav class="flex items-center justify-between py-5 px-10">
      <router-link to="/">
        <h1 class="text-3xl font-bold text-accent-2">
          Let's<span class="text-accent-1">Cook</span>
        </h1>
      </router-link>

      <button @click="toggleData" class="relative">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          :class="mobileMenu ? 'scale-0 opacity-0' : ''"
          class="text-accent-2 text-3xl transition duration-300 ease-in-out absolute -right-1"
        />
        <font-awesome-icon
          icon="fa-solid fa-close"
          :class="!mobileMenu ? 'scale-0 opacity-0' : ''"
          class="text-accent-2 text-3xl transition duration-300 ease-in-out"
        />
      </button>

      <div :class="mobileMenu ? 'right-0' : 'right-[100vw]'"
           class="flex flex-col gap-8 absolute bg-white top-[75px] w-auto z-10 px-10 border-t py-10 h-full transition duration-300 ease-in-out">
        <router-link @click="toggleData" :to="{ name: 'home' }" class="navItem">Home</router-link>
        <router-link @click="toggleData" :to="{ name: 'about' }" class="navItem">About</router-link>
        <router-link @click="toggleData" :to="{ name: 'recipes' }" class="navItem">Recipes</router-link>
        <router-link @click="toggleData" :to="{ name: 'download' }" class="navItem">Download</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {ref} from 'vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

const mobileMenu = ref(false);

const toggleData = () => {
  mobileMenu.value = !mobileMenu.value;
};
</script>

<style scoped>
.navItem {
  @apply font-[400] text-lg;
}
</style>

