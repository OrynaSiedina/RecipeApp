<template>
<div class="flex flex-col md:flex-row gap-5 flex-wrap">
<router-link :to="{name: 'byName'}"
             class="bg-accent-1 text-bkg px-8 hover:bg-content button">
  Browse Recipes</router-link>
<router-link :to="{name: 'download'}"
             class="bg-white text-accent-1 border-2 border-accent-1 px-10 button hover:text-content">
  Get App</router-link>
</div>
</template>
<style scoped>
.button {
  @apply py-4 rounded-lg text-xl hover:transition duration-300 ease-in-out text-center
}

</style>
