<template>
  <header class='header'>
    <div class='content'>
      <nav>
        <ul class='ulList'>
          <NuxtLink to="#target-about">
            <li class='linkText'>Обо мне</li>
          </NuxtLink>
          <NuxtLink to="#target-projects">
            <li class='linkText'>Проекты</li>
          </NuxtLink>
          <NuxtLink to="#target-technologies">
            <li class='linkText'>Технологии</li>
          </NuxtLink>
          <NuxtLink to="#target-contact">
            <li class='linkText'>Контакты</li>
          </NuxtLink>
        </ul>
      </nav>
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
}

.ulList {
  display: flex;
  column-gap: var(--padding-content-block);
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 880px) {
    display: none;
  }
}

.linkText {
  &:hover {
    color: #bfbfbf;
  }
}
</style>
