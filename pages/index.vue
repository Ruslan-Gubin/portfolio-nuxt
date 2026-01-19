<script setup lang="ts">
import Alert from "../components/Alert.vue";
import Contact from "../components/Contact.vue";
import About from "../components/About.vue";
import Technologies from "../components/Technologies.vue";
import Projects from "../components/Projects.vue";



</script>

<template>
  <div class='wrapper'>
    <About />
    <Projects />
    <Technologies />
    <Contact />
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
