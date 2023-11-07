<script setup>
import Layout from "./components/Layout/Layout.vue";
</script>

<template>
  <Layout>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" >
        <component :is="Component"></component>
      </transition>
    </router-view>
  </Layout>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>