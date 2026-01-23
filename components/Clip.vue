<template>
  <div class='clip'>
    <slot />
  </div>
</template>

<style lang="css" scoped>
.clip {
  padding-inline: 8px;
  display: flex;
  align-items: center;
  max-width: max-content;
  border-radius: 16px;
  font-size: 12px;
  background-color: #0015800A;
  height: 24px;
  cursor: default;
  border: 1px solid var(--clip-border-color);
  color: var(--clip-color);
}
</style>
