<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import MobileHeader from "./MobileHeader.vue";
</script>

<template>
  <div>
    <Header />
    <MobileHeader />
    <div class="min-h-[calc(100vh-300px)]">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
