<template>
  <footer class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 py-20 max-w-[1200px] mx-auto gap-10 border-t px-5">
    <div class="flex flex-col gap-4 md:col-span-4">
      <h4 class="text-3xl font-bold text-accent-2">
        Let's<span class="text-accent-1">Cook</span>
      </h4>
      <p>FoodMood is an application used to find a variety of famous foods and recipes.</p>
    </div>
    <div class="flex flex-col gap-4 md:col-span-2">
      <h4 class="text-3xl font-bold text-accent-2">
        Company
      </h4>
      <div class="flex flex-col gap-3">
        <router-link :to="{ name: 'home' }" class="navItem textHover">Home</router-link>
        <router-link :to="{ name: 'about' }" class="navItem textHover">About</router-link>
        <router-link :to="{ name: 'recipes' }" class="navItem textHover" :class="recipesLinkClass">
          Recipes
        </router-link>
        <router-link :to="{ name: 'download' }" class="navItem textHover">Download</router-link>
      </div>
    </div>
    <div class="flex flex-col gap-4 md:col-span-2">
      <h4 class="text-3xl font-bold text-accent-2">
        Support
      </h4>
      <div class="flex flex-col gap-3">
        <router-link class="textHover" to="#">Account</router-link>
        <router-link class="textHover" to="#">Support Center</router-link>
        <router-link class="textHover" to="#">Feedback</router-link>
        <router-link class="textHover" to="#">Accessibility</router-link>
        <router-link class="textHover" to="#">FAQs</router-link>
      </div>
    </div>

    <div class="flex flex-col gap-4 md:col-span-4">
      <h4 class="text-3xl font-bold text-accent-2">
        Company
      </h4>
      <div>
        <p>Question of Feedback?</p>
        <p>We'd love to hear from you</p>
      </div>
    </div>
  </footer>
  <div class="bg-accent-1 text-bkg text-center py-3 px-5">
    <p>&copy; FoodMood by
      <a href="https://arinasiedina.online/"
         class="underline text-bkg font-bold"
         target="_blank">AriS
      </a>-{{ new Date().getFullYear() }}.
      <span>Inspiration drawn from
            <a
              href="https://dribbble.com/shots/15223754-Food-Cooking-Inspiration-Website/attachments/6970440?mode=media"
              class="underline text-bkg font-bold" target="_blank">Maulana Lufti's FoodMood
            </a>
        </span>
    </p>
  </div>
</template>
<style scoped>
router-link {
  @apply font-[400];
}
</style>
<script setup>
</script>