<script setup lang="ts">

definePageMeta({
  layout: 'default',
  title: 'Hello World',
})

const route = useRoute();
const id = route.params.id;

</script>

<template>
  <div class='root'>
    <section class='mainSection'>
      <img class='image' src='/image/Macbook-Air-giftoboom.front.wtsdemo.ru.webp' alt='project image' />
    </section>
    <h1 class='title'>Описание {{ id }}</h1>
  </div>
</template>

<style lang="css" scoped>
.mainSection {
  height: calc(100vh - var(--header-size-height));
}

.image {
  width: 100%;
  max-height: 100%;
  height: 100%;
  object-fit: cover;
}

.goBack {
  color: black;
  cursor: pointer;
}

.root {
  border: 1px solid black;
}

.title {
  font-weight: 400;
}
</style>
