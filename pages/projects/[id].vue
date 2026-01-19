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
    <NuxtLink to="/">Go home</NuxtLink>
    <h1 class='title'>Project {{ id }}</h1>
  </div>
</template>

<style lang="css" scoped>
.root {
  background-color: greenyellow;
}

.title {
  font-weight: 400;
}
</style>
