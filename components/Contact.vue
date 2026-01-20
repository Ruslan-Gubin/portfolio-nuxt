<script setup lang="ts">
import ContactForm from './ContactForm'
import TelegramSvg from '../components/svg/TelegramSvg';
import GithubSvg from '../components/svg/GithubSvg';
import LinkedinSvg from '../components/svg/LinkedinSvg';
import EmailSvg from '../components/svg/EmailSvg';


</script>
<template>
  <section class='root'>
    <div class='target' id='target-contact'></div>
    <section class='wrapper'>
      <aside class='aside'>
        <h1 class='title'>Контакты</h1>
        <h2 class='subtitle'>Свяжитесь со мной через социальные сети или отправьте электронное письмо.</h2>
        <ul class='contactList'>
          <li class='contactItem'>
            <NuxtLink class='linkText' to="https://t.me/RuslanGubin" target='_blank'>
              <TelegramSvg />
              <p>Telegram</p>
            </NuxtLink>
          </li>
          <li class='contactItem'>
            <NuxtLink class='linkText' to="https://github.com/Ruslan-Gubin" target='_blank'>
              <GithubSvg />
              <p>GitHub</p>
            </NuxtLink>
          </li>
          <li class='contactItem'>
            <NuxtLink class='linkText'
              to="https://www.linkedin.com/in/%D1%80%D1%83%D1%81%D0%BB%D0%B0%D0%BD-%D0%B3%D1%83%D0%B1%D0%B8%D0%BD-b71b3193/"
              target='_blank'>
              <LinkedinSvg />
              <p>Linkedin</p>
            </NuxtLink>
          </li>
          <li class='contactItem'>
            <NuxtLink class='linkText' to="mailto:gubin_ruslan@rambler.ru">
              <EmailSvg />
              <p>Email</p>
            </NuxtLink>
          </li>
        </ul>
      </aside>
      <ContactForm />
    </section>
  </section>
</template>

<style lang="css" scoped>
.root {
  padding-inline: var(--padding-main);
  background-color: #fafafc;
  padding-block: var(--padding-bottom-home-block);
}

.target {
  position: relative;
  top: -175px;

  @media (max-width: 880px) {
    top: -140px;
  }

  @media (max-width: 500px) {
    top: -125px;
  }
}

.wrapper {
  display: flex;
  max-width: var(--content-max-width);
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    row-gap: var(--padding-bottom-home-block);

  }
}

.aside {
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: var(--padding-content-block);
  max-height: max-content;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 680px;
  }
}


.contactList {
  display: grid;
  grid-template-columns: 220px 220px;
  row-gap: var(--padding-content-block);

  @media (max-width: 1024px) {
    grid-template-columns: 200px 200px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 360px) {
    grid-template-columns: 100%;
  }
}

.contactItem {
  justify-self: flex-start;
}


.linkText {
  font-size: 18px;
  font-weight: 600;
  display: flex;
  column-gap: 12px;
  align-items: center;
  justify-content: center;
}

.title {
  font-weight: 600;
}

.subtitle {
  color: #757575;
  max-width: 80%;

  @media (max-width: 500px) {
    max-width: 100%;
  }
}
</style>
