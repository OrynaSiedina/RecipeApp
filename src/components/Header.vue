<template>
  <header>  <!--class="hidden lg:block"-->
    <nav class="flex items-center justify-between py-5 px-10">
      <router-link to="/">
        <h1 class="text-3xl font-bold text-accent-2">
          Let's<span class="text-accent-1">Cook</span>
        </h1>
      </router-link>
      <div class="flex gap-8">
        <router-link to="#"
                     class="navItem">Home</router-link>
        <router-link to="#"
                     class="navItem">About</router-link>
        <router-link to="#"
                     class="navItem">Recipes</router-link>
        <router-link to="#"
                     class="navItem">Download</router-link>
        <router-link to="#"
                     class="navItem">Contact</router-link>
      </div>
    </nav>
  </header>
</template>
<style>
.navItem {
  @apply font-normal text-lg hover:transition duration-300 ease-in-out cursor-pointer;
}
</style>
