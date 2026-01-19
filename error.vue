<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class='wrapper'>
    <h1 class='status'>{{ error.statusCode }}</h1>
    <NuxtLink class='link' to="/">Вернуться на домашнюю страницу</NuxtLink>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.status {
  font-weight: 500;
  font-size: 120px;
}

.link {
  color: #2880ed;
  font-weight: 500;
}
</style>
