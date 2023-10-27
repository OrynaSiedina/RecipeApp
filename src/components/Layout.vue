<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div>
    <Header/>
    <slot></slot>
    <Footer/>
  </div>
</template>

