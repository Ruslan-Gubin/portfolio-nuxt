<script setup>
import TelegramSvg from '../components/svg/TelegramSvg.vue';
import GithubSvg from '../components/svg/GithubSvg.vue';
import LinkedinSvg from '../components/svg/LinkedinSvg.vue';
import EmailSvg from '../components/svg/EmailSvg.vue';

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

      <aside class='aside'>
        <h1 class='titleForm'>Напишите письмо</h1>
        <label class='label'>
          Имя
          <input class='input' type='text' name='name' />
        </label>
        <label class='label'>
          Почта
          <input class='input' type='email' name='email' />
        </label>
        <label class='label'>
          Сообщение
          <textarea class='textarea' name='message' />
        </label>
        <button class='button'>Отправить</button>
      </aside>
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
  height: 500px;
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

.titleForm {
  font-weight: 300;

  @media (max-width: 1024px) {
    font-size: 36px;
  }
}

.label {
  font-weight: 300;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 18px;
  }
}

.input {
  padding: 12px 16px;
  font-weight: 300;
  border-radius: 8px;
  border: 1px solid #949494;
  font-size: 18px;

  &:focus {
    border-color: #015fcc;
  }
}

.textarea {
  padding: 12px 16px;
  font-size: 18px;
  min-height: 110px;
  border: 1px solid #949494;
  border-radius: 8px;
  font-weight: 300;

  &:focus {
    border-color: #015fcc;
  }
}

.button {
  background-color: black;
  padding-inline: 27px;
  height: 47px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  max-width: max-content;
}
</style>
