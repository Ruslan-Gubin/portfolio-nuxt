<script setup lang="ts">
import SuccessSvg from './svg/SuccessSvg';
import WarnSvg from './svg/WarnSvg';
import ErrorSvg from './svg/ErrorSvg';

const props = defineProps<{ title: string, status: 'warn' | 'success' | 'error' }>();
const classWrapper = `alertWrapper ${props.status}`

</script>

<template>
  <section :class="classWrapper">
    <div class='svg'>
      <SuccessSvg v-if="props.status === 'success'" />
      <WarnSvg v-if="props.status === 'warn'" />
      <ErrorSvg v-if="props.status === 'error'" />
    </div>
    <aside class='content'>
      <h3 class='title'>{{ props.title }}</h3>
      <p class='text'>
        <slot />
      </p>
    </aside>
  </section>
</template>

<style lang="css" scoped>
.alertWrapper {
  position: fixed;
  max-width: 50vw;
  top: var(--padding-content-block);
  right: var(--padding-content-block);
  z-index: 2;
  border: 1px solid #ffbe00;
  border-left-width: 4px;
  border-radius: 8px;
  padding: var(--padding-content-block);
  display: flex;
  column-gap: 12px;
  animation: showAlert 3s linear 0s 1 forwards;

  @media (max-width: 880px) {
    max-width: calc(100vw - var(--padding-content-block) - var(--padding-content-block));
  }
}

.success {
  background-color: #f5fff5;
  border-color: #0abb07;
}

.warn {
  background-color: #fffcf4;
  border-color: #ffbe00;
}

.error {
  border-color: #f43530;
  background-color: #fff6f5;
}

@keyframes showAlert {
  0% {
    transform: translateX(120%);
  }

  10% {
    transform: translateX(0px);
  }

  90% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(120%);
  }
}


.content {
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  overflow: hidden;
}

.title {
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
}

.text {
  color: #5a5e77;
  text-wrap: balance;
  overflow: hidden;
}

.svg {
  width: 24px;
  height: 24px;
}
</style>
