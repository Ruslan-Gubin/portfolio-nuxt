<script setup lang="ts">
import BackHeaderSvg from './svg/BackHeaderSvg'

const scrollTop = () => {
  window.scrollTo(0, 0);
}

</script>

<template>
  <footer class='footer'>
    <button @click="scrollTop" class='buttonScroll'>
      <BackHeaderSvg />
    </button>
    <nav>
      <ul class='ulList'>
        <li>
          <NuxtLink class='linkText' to="https://t.me/RuslanGubin" target='_blank'>Telegram</NuxtLink>
        </li>
        <li>
          <NuxtLink class='linkText' to="https://github.com/Ruslan-Gubin" target='_blank'>
            GitHub
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class='linkText'
            to="https://www.linkedin.com/in/%D1%80%D1%83%D1%81%D0%BB%D0%B0%D0%BD-%D0%B3%D1%83%D0%B1%D0%B8%D0%BD-b71b3193/"
            target='_blank'>
            Linkedin
          </NuxtLink>
        </li>

        <li>
          <NuxtLink class='linkText' to="mailto:gubin_ruslan@rambler.ru">
            Email
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <p class='copyright'>Ruslan Gubin &copy2026</p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--background-footer);
  height: 230px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: var(--padding-main);
  position: relative;
}

.buttonScroll {
  position: absolute;
  top: -28px;
  left: 50%;
  background-color: #1D1B25;
  width: 120px;
  height: 70px;
  border-radius: 50%;
  border: none;
  transform: translateX(-50%);

  & svg {
    transform: rotate(90deg) translateX(-5px);
  }
}

.ulList {
  display: flex;
  column-gap: var(--padding-content-block);
  font-size: 18px;
  font-weight: 500;
  flex-wrap: wrap;
  justify-content: center;
  padding-inline: var(--padding-content-block);
  row-gap: 12px;

}

.copyright {
  font-size: 12px
}

.linkText {
  &:hover {
    color: #bfbfbf;
  }
}
</style>
