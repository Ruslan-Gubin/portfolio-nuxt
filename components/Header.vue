<script setup lang="ts">
import { ref } from 'vue';
import BurgerSvg from './svg/BurgerSvg'
import BackHeaderSvg from './svg/BackHeaderSvg'

const route = useRoute();
const isShowBack = ref(route.path !== '/');

watch(() => route.path, (newPath) => {
  isShowBack.value = newPath !== '/';
});

const isOpen = ref(false);

const handleClickBurger = () => {
  isOpen.value = !isOpen.value;
}

const handleClickMenuItem = () => {
  isOpen.value = false;
}

</script>

<template>
  <header class='header'>
    <div class='content'>
      <button v-if="isShowBack" @click="$router.back(), handleClickMenuItem" class='backSvg'>
        <BackHeaderSvg />
      </button>
      <nav>
        <ul :class="{ menuList: true, menuListOpen: isOpen, menuListClose: !isOpen }">
          <NuxtLink @click='handleClickMenuItem' to="/#target-about">
            <li class='linkText'>Обо мне</li>
          </NuxtLink>
          <NuxtLink @click='handleClickMenuItem' to="/#target-projects">
            <li class='linkText'>Проекты</li>
          </NuxtLink>
          <NuxtLink @click='handleClickMenuItem' to="/#target-technologies">
            <li class='linkText'>Технологии</li>
          </NuxtLink>
          <NuxtLink @click='handleClickMenuItem' to="/#target-contact">
            <li class='linkText'>Контакты</li>
          </NuxtLink>
        </ul>
      </nav>
    </div>
    <div @click='handleClickBurger' class='burgerSvg'>
      <BurgerSvg />
    </div>
  </header>
</template>
<style scoped>
.header {
  display: flex;
  height: var(--header-size-height);
  background-color: var(--background-footer);
  color: white;
  padding-inline: var(--padding-main);
  position: fixed;
  width: 100%;
  z-index: 2;
}

.content {
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}

.menuList {
  display: flex;
  column-gap: var(--padding-content-block);
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 880px) {
    position: fixed;
    top: var(--header-size-height);
    left: 0px;
    width: 100%;
    background-color: #222222;
    flex-direction: column;
    z-index: 3;
    overflow: hidden;
  }
}

.menuListOpen {
  @media (max-width: 880px) {
    animation: animationOpen 0.2s linear 0s 1 normal forwards;
  }
}

.menuListClose {
  @media (max-width: 880px) {
    animation: animationClose 0.2s linear 0s 1 normal forwards;
  }
}

@keyframes animationOpen {
  0% {
    height: 0px;
  }

  100% {
    height: 272px;
  }
}

@keyframes animationClose {
  0% {
    height: 272px;
  }

  100% {
    height: 0px;
  }
}

.linkText {
  &:hover {
    color: #bfbfbf;
  }

  @media (max-width: 880px) {
    padding-block: 22px;
    border-bottom: 1px solid #363636;
    font-weight: 300;
    text-align: center;
    font-size: 20px;
  }

}

.burgerSvg {
  display: none;

  @media (max-width: 880px) {
    display: block;
    position: absolute;
    top: var(--padding-content-block);
    right: var(--padding-content-block);
    color: white;
    z-index: 3;
  }
}

.backSvg {
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  border: none;
}
</style>
