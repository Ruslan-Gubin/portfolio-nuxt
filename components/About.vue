<script setup lang="ts">
import TelegramSvg from '../components/svg/TelegramSvg.vue';
import GithubSvg from '../components/svg/GithubSvg.vue';
import LinkedinSvg from '../components/svg/LinkedinSvg.vue';
import EmailSvg from '../components/svg/EmailSvg.vue';

</script>
<template>
  <div>
    <section class='wrapper'>
      <div class='target' id='target-about'></div>
      <section class='about'>
        <h1>Привет! <br />Меня зовут Руслан.</h1>
        <h2 class='subTitle'>Я разработчик, специализирующийся на создании масштабируемых и эффективных веб-приложений,
          использующих
          современные технологии и инструменты для разработки. Мои опыт и навыки включают в себя создание клиентских
          решений и серверной части, позволяя развивать полноценные веб-приложения. </h2>
      </section>

      <nav class='contacts'>
        <ul class='contactsList'>
          <li>
            <NuxtLink to="https://t.me/RuslanGubin" target='_blank'>
              <TelegramSvg />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://github.com/Ruslan-Gubin" target='_blank'>
              <GithubSvg />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="https://www.linkedin.com/in/%D1%80%D1%83%D1%81%D0%BB%D0%B0%D0%BD-%D0%B3%D1%83%D0%B1%D0%B8%D0%BD-b71b3193/"
              target='_blank'>
              <LinkedinSvg />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="mailto:gubin_ruslan@rambler.ru">
              <EmailSvg />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<style lang="css" scoped>
.target {
  position: relative;
  top: -115px;
}

.wrapper {
  position: relative;
  padding-inline: var(--padding-main);
}

.about {
  height: calc(100vh - 80px);
  min-height: max-content;
  display: flex;
  flex-direction: column;
  row-gap: var(--padding-content-block);
  max-width: var(--content-max-width);
  margin: 0 auto;
  justify-content: center;
  position: relative;

  @media (max-width: 880px) {
    height: calc(100vh - 180px);
  }

  @media (max-width: 500px) {
    height: calc(100vh - 160px);
  }
}


.subTitle {
  color: #757575;
  line-height: 40px;
  line-height: 2.4rem;
  max-width: 770px;
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 2rem;
  }
}

.buttonScroll {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  color: #757575;
  z-index: 0;
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

}
</style>
