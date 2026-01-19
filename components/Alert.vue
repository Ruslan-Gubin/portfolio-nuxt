<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <div>
    App Alert {{ props.title }}
    <div>
      <slot />
    </div>
  </div>
</template>
