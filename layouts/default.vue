<script setup>
import Header from "../components/Header";
import Footer from "../components/Footer";
</script>

<template>
  <main class='wrapper'>
    <Header />
    <div class='content'>
      <slot />
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.content {
  flex: 1 1 auto;
  padding-top: var(--header-size-height);
}
</style>
