<template>
  <div>
  <div class="flex justify-center md:my-6">
    <h1 class="text-2xl text-content font-bold mb-4 md:text-4xl">SEARCH RECIPES BY:</h1>
  </div>
  <div>
    <div class="flex flex-col md:flex-row">
      <router-link :to="{ name: 'byName'}" class="link">NAME</router-link>
      <router-link :to="{ name: 'byLetter' }" class="link">LETTER</router-link>
      <router-link :to="{ name: 'ingredients' }" class="link">INGREDIENT</router-link>
    </div>

    <div class="py-2 md:pt-8 bg-accent-2 ">
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>
<style scoped>
.router-link-active {
  @apply font-bold bg-accent-2;
}
@media (max-width: 768px) {
  .router-link-active {
    order: 3;
  }
}

.link {
  @apply md:w-1/3 text-center md:text-2xl text-content px-8 py-2 border-r-accent-2 border-r-[1px] border-t-accent-2 border-t-[1px]
}

</style>

<script setup>
</script>