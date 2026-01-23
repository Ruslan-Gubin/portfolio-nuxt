<template>
  <div class='root'>
    <section class='wrapper'>
      <div class='target' id='target-technologies'></div>

      <section class='technologies'>
        <header class='header'>
          <h1 class='title'>Технологии</h1>
          <h2 class='subtitle'>
            Этот раздел описывает ключевые технологии и инструменты, используемые в проектах — от языков
            программирования
            и фреймворков до систем тестирования, сборки и управления данными. В списке представлены проверенные и
            современные решения для создания надежных, масштабируемых продуктов — от интерфейсов и API до баз данных и
            систем обмена сообщениями.
          </h2>
        </header>
        <ul class='technologiesList'>

          <li class='technologiesItem'>
            <b>Языки программирования</b>
            <p>JavaScript / TypeScript.</p>
          </li>
          <li class='technologiesItem'>
            <b>Фронтенд</b>
            <p>React / Next / React Native / Vue / Nuxt / Web Components.</p>
          </li>
          <li class='technologiesItem'>
            <b>API</b>
            <p>REST / GraphQL / WebSocket / Zod.</p>
          </li>

          <li class='technologiesItem'>
            <b>Управления состоянием</b>
            <p>Redux / Toolkit / RTK Query / MobX / Zustand / Pinia / Apollo / SWR / TanStack / Query.</p>
          </li>
          <li class='technologiesItem'>
            <b>Стили</b>
            <p>CSS / SASS / CSS Modules / Styled-components.</p>
          </li>
          <li class='technologiesItem'>
            <b>Анимации</b>
            <p>GSAP / Framer Motion / Canvas / PixiJS / ThreeJS / P5.js.</p>
          </li>
          <li class='technologiesItem'><b>UI-библиотеки</b>
            <p>Material-UI.</p>
          </li>
          <li class='technologiesItem'><b>Карты</b>
            <p>OpenLayers / Mapbox.</p>
          </li>
          <li class='technologiesItem'><b>Тестирование</b>
            <p>Jest / Vitest / React Testing Library.</p>
          </li>
          <li class='technologiesItem'><b>Сборка и инструменты</b>
            <p>Webpack / Vite / ESLint / Prettier / Storybook / i18n / Module Federation / SEO / PWA / Docker.</p>
          </li>
          <li class='technologiesItem'><b>Бэкенд</b>
            <p>Node / Nest / Express / Go.</p>
          </li>
          <li class='technologiesItem'><b>СУБД</b>
            <p>PostgreSQL / MySQL / MongoDb.</p>
          </li>
          <li class='technologiesItem'><b>Брокеры сообщений</b>
            <p>RabbitMq / Kafka.</p>
          </li>
          <li class='technologiesItem'><b>ORM</b>
            <p>Prisma.</p>
          </li>
          <li class='technologiesItem'><b>Git</b>
            <p>GitLab / Bitbucket / Gogs / GitFlic.</p>
          </li>
        </ul>
      </section>

    </section>
  </div>
</template>

<style lang="css" scoped>
.root {
  padding-block: var(--padding-bottom-home-block);
  padding-inline: var(--padding-main);
  border-bottom: 1px solid var(--info-block-border-bottom-light);
  background-color: var(--info-block-bg-light);
}

.wrapper {
  position: relative;
  max-width: var(--content-max-width);
  margin: 0 auto;
  min-height: max-content;
  display: flex;
  justify-content: center;
}

.target {
  position: absolute;
  top: -175px;

  @media (max-width: 880px) {
    top: -140px;
  }

  @media (max-width: 500px) {
    top: -125px;
  }
}

.technologies {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
}

.header {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.title {
  font-size: 32px;
  line-height: 40px;
}

.subtitle {
  color: #757575;
  font-weight: 400;
  font-size: 18px;
  max-width: 770px;
  line-height: 28px;
  color: var(--sub-title-color);

  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 2rem;
  }
}

.technologiesItem {
  padding-block: 28px;
  padding-block: 16px;
  border-bottom: 1px solid var(--info-block-border-bottom-light);
  display: grid;
  grid-template-columns: 1fr 3fr;


  font-size: 18px;
  column-gap: 10px;

  & b {
    font-size: 18px;
  }

  & p {
    font-weight: 300;
  }

  &:first-child {
    border-top: 1px solid var(--info-block-border-bottom-light);
  }

  @media (max-width: 880px) {

    grid-template-columns: 1fr 2fr;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    row-gap: 6px;

  }
}

.technologiesList {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-width: 100%;
}

.technologiesListItem {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  color: #1a1f3c;

}



.technologiesListItemText {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
</style>
