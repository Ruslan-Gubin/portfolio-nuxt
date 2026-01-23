<script setup lang="ts">
import TelegramSvg from '../components/svg/TelegramSvg.vue';
import GithubSvg from '../components/svg/GithubSvg.vue';
import LinkedinSvg from '../components/svg/LinkedinSvg.vue';
import EmailSvg from '../components/svg/EmailSvg.vue';
import BackHeaderSvg from './svg/BackHeaderSvg'

</script>
<template>
  <div>
    <section class='wrapper'>
      <div class='target' id='target-about'></div>
      <section class='about'>
        <h1 class='title'>Привет! <br />Меня зовут Руслан.</h1>
        <h2 class='subTitle'>Я разработчик, специализирующийся на создании масштабируемых и эффективных веб-приложений,
          использующих
          современные технологии и инструменты для разработки. Мои опыт и навыки включают в себя создание клиентских
          решений и серверной части, позволяя развивать полноценные веб-приложения. </h2>
      </section>

      <nav class='contacts'>
        <ul class='contactsList'>
          <li :style="{ 'animation-delay': '0.2s' }">
            <NuxtLink to="https://t.me/RuslanGubin" target='_blank'>
              <TelegramSvg />
            </NuxtLink>
          </li>
          <li :style="{ 'animation-delay': '0.3s' }">
            <NuxtLink to="https://github.com/Ruslan-Gubin" target='_blank'>
              <GithubSvg />
            </NuxtLink>
          </li>
          <li :style="{ 'animation-delay': '0.4s' }">
            <NuxtLink
              to="https://www.linkedin.com/in/%D1%80%D1%83%D1%81%D0%BB%D0%B0%D0%BD-%D0%B3%D1%83%D0%B1%D0%B8%D0%BD-b71b3193/"
              target='_blank'>
              <LinkedinSvg />
            </NuxtLink>
          </li>
          <li :style="{ 'animation-delay': '0.5s' }">
            <NuxtLink to="mailto:gubin_ruslan@rambler.ru">
              <EmailSvg />
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <NuxtLink to="/#target-projects">
        <button class='buttonScroll'>
          <BackHeaderSvg />
        </button>
      </NuxtLink>
    </section>
  </div>
</template>

<style lang="css" scoped>
.target {
  position: relative;
  top: -115px;

  @media (max-width: 880px) {
    top: -65px;
  }
}

.wrapper {
  position: relative;
  padding-inline: var(--padding-main);
  border-bottom: 1px solid var(--info-block-border-bottom-light);
  background-color: var(--info-block-bg-light);
}

.about {
  min-height: calc(100vh - var(--header-size-height));
  display: flex;
  flex-direction: column;
  row-gap: var(--padding-content-block);
  max-width: var(--content-max-width);
  margin: 0 auto;
  justify-content: center;
  position: relative;
  padding-block: var(--padding-bottom-home-block);
}

.title {
  will-change: opacity, transform;
  opacity: 0;
  animation: animationTitle 0.3s ease 0.1s 1 normal forwards;
}

@keyframes animationTitle {
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }

}

.subTitle {
  line-height: 2.4rem;
  max-width: 770px;
  font-weight: 300;
  will-change: opacity, transform;
  opacity: 0;
  animation: animationOpacity 0.3s ease 0.1s 1 normal forwards;
  color: var(--sub-title-color);

  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 2rem;
  }
}


.contacts {
  position: absolute;
  right: var(--padding-main);
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 880px) {
    display: none;
  }

}

.contactsList {
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  & li {
    will-change: opacity, transform;
    opacity: 0;
    animation: animationOpacity 0.1s linear 0s 1 normal forwards;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    box-shadow: var(--button-box-shadow-light);
    overflow: hidden;
  }

  & svg {
    scale: 1.2;
  }

  & svg,
  path {
    fill: var(--svg-link-fill);
  }
}

@keyframes animationOpacity {
  0% {
    opacity: 0;
    transform: translateY(20%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.buttonScroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  color: #757575;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  opacity: 0;
  animation: animationButtonScroll 0.5s ease 0.4s 1 normal forwards;
  box-shadow: var(--button-box-shadow-light);
  background-color: var(--main-button-color);

  &:active {
    box-shadow: var(--button-box-shadow-light-active);
  }

  & svg {
    transform: rotate(-90deg) translateX(-5px);
  }

  @media (max-width: 880px) {
    display: none;
  }
}

@keyframes animationButtonScroll {
  0% {
    left: 0%;
    transform: rotate(-800deg);
  }

  100% {
    opacity: 1;
    transform: rotate(0deg);
    left: 50%;
  }
}
</style>
