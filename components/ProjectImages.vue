<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BackHeaderSvg from './svg/BackHeaderSvg'

const props = defineProps<{
  maxCount: number,
  projectName: string,
}>();

const count = ref(1);
const prevCount = ref(1);
const debounceCount = ref(0);
const animationClass = ref('')
let timer = null


const getCurrentCount = (count: number, total: number) => {
  return count < 1 ? total : count > total ? 1 : count;
}

const activeInterval = () => {
  timer = setInterval(() => {
    const nextValue = getCurrentCount(count.value + 1, props.maxCount);
    count.value = nextValue;
    debounceCount.value = nextValue;
    animationClass.value = 'next'
  }, 4000)
}

onMounted(() => {
  activeInterval();
})


onUnmounted(() => {
  clearInterval(timer)
})

const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  timeout: number = 400,
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

const changeImageDebounce = debounce((newCount: number, animation: string) => {
  count.value = newCount;
  animationClass.value = animation;
  activeInterval();
}, 200)


const handleChangePrevImg = () => {
  if (!debounceCount.value) {
    debounceCount.value = count.value;
  };

  if (timer) {
    clearInterval(timer);
  }

  debounceCount.value = getCurrentCount(debounceCount.value - 1, props.maxCount);
  changeImageDebounce(debounceCount.value, 'prev')
}

const handleChangeNextImg = () => {
  if (!debounceCount.value) {
    debounceCount.value = count.value;
  };

  if (timer) {
    clearInterval(timer);
  }

  debounceCount.value = getCurrentCount(debounceCount.value + 1, props.maxCount);
  changeImageDebounce(debounceCount.value, 'next')
}


const endAnimation = () => {
  prevCount.value = count.value;
  animationClass.value = '';
};

</script>

<template>
  <section class='imagesWrapper'>

    <section class="imageList">
      <nuxt-img quality='80' format='webp' class="imageMac" :src="`/image/${props.projectName}/${prevCount}c.webp`"
        alt='project image' />
      <nuxt-img @animationend="endAnimation" quality='80' format='webp'
        :class="{ imageMac: true, nextAnimation: animationClass === 'next', prevAnimation: animationClass === 'prev' }"
        :src="`/image/${props.projectName}/${count}c.webp`" alt='project image' />
      <nuxt-img quality='80' format='webp' class='imageTable' :src="`/image/${props.projectName}/${prevCount}b.webp`"
        alt='project image' />
      <nuxt-img quality='80' format='webp' :src="`/image/${props.projectName}/${count}b.webp`" alt='project image'
        :class="{ imageTable: true, nextAnimation: animationClass === 'next', prevAnimation: animationClass === 'prev' }" />
      <nuxt-img quality='80' format='webp' class='imageMobile' :src="`/image/${props.projectName}/${prevCount}a.webp`"
        alt='project image' />
      <nuxt-img quality='80' format='webp'
        :class="{ imageMobile: true, nextAnimation: animationClass === 'next', prevAnimation: animationClass === 'prev' }"
        :src="`/image/${props.projectName}/${count}a.webp`" alt='project image' />
    </section>

    <section class="buttons">
      <button @click="handleChangePrevImg" class="prevButton">
        <BackHeaderSvg />
      </button>
      <div class="count">{{ debounceCount ? debounceCount : count }}/{{ props.maxCount }}</div>
      <button @click="handleChangeNextImg" class="prevButton nextButton">
        <BackHeaderSvg />
      </button>
    </section>

  </section>
</template>

<style lang="css" scoped>
.imagesWrapper {
  max-height: calc(100vh - var(--header-size-height) - var(--padding-content-block) - var(--padding-content-block));
  width: 100%;
  position: sticky;
  top: calc(var(--header-size-height) + var(--padding-content-block));
  left: 0;
  display: flex;
  flex-direction: column;
  row-gap: var(--padding-content-block);
  max-height: max-content;
  overflow: hidden;

  @media (max-width: 1160px) {
    position: relative;
    top: 0;
  }
}

.imageList {
  position: relative;
  aspect-ratio: 7/4;
  max-height: max-content;
}

.imageMac {
  position: absolute;
  will-change: opacity, transform;
  max-height: 100%;
  height: 100%;
}

.prevAnimation {
  opacity: 0;
  animation: animationNextImage 0.6s ease-in-out 0s 1 normal forwards;
}

.nextAnimation {
  opacity: 0;
  animation: animationNextImage 0.6s ease-in-out 0s 1 normal forwards;
}


.imageTable {
  will-change: opacity, transform;
  position: absolute;
  height: 30vw;
  object-fit: cover;
  right: 0;
  bottom: -10px;
  max-height: 100%;

  @media (max-width: 1160px) {
    height: 45vw;
  }


  &.prevAnimation {
    opacity: 0;
    animation: animationMobileImage 0.6s linear 0s 1 normal forwards;
  }

  &.nextAnimation {
    opacity: 0;
    animation: animationMobileImage 0.6s linear 0s 1 normal forwards;
  }
}


.imageMobile {
  will-change: opacity, transform;
  position: absolute;
  object-fit: cover;
  height: 22vw;
  right: 0;
  bottom: -20px;
  max-height: 100%;

  @media (max-width: 1160px) {
    height: 30vw;
    bottom: -10px;
  }

  &.prevAnimation {
    opacity: 0;
    animation: animationMobileImage 0.6s linear 0s 1 normal forwards;
  }

  &.nextAnimation {
    opacity: 1;
    animation: animationMobileImage 0.6s linear 0s 1 normal forwards;
  }
}

@keyframes animationMobileImage {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


@keyframes animationNextImage {
  0% {
    opacity: 0;
    transform: translateX(110%);
  }


  80% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

.buttons {
  position: relative;
  top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: var(--padding-content-block);
}

.count {
  width: 40px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  box-shadow: var(--button-box-shadow-light);
  cursor: default;
  background-color: var(--main-button-color);

  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
}

.prevButton {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--button-box-shadow-light);
  background-color: var(--main-button-color);

  &:active {
    box-shadow: var(--button-box-shadow-light-active);
  }

  & svg {
    transform: translateX(-3px);
  }

  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
}

.nextButton {
  transform: rotate(180deg);
}
</style>
