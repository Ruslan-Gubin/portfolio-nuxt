<script setup lang="ts">
import Clip from './Clip.vue';

const frontendList = ['TypeScript', 'React', 'Next', 'Vue', 'React Native', 'SASS', 'Mui', 'Redux', 'MobX', 'Apollo', 'Zustand', 'Pinia', 'Web Components', 'Framer Motion', 'Canvas', 'ThreeJS'];
const backendList = ['Node js', 'Nest', 'Express', 'Golang', 'PostgreSQL', 'MySQL', 'MongoDb', 'Prisma', 'Rest', 'GraphQl', 'RabbitMq', 'Docker', 'Websocket'];
const otherList = ['Webpack', 'Vite', 'Jest', 'Vitest', 'Storybook', 'i18n', 'seo', 'pwa', 'module federation', 'OpenLayers'];

</script>

<template>
  <div class='root'>
    <section class='wrapper'>
      <div class='target' id='target-technologies'></div>

      <section class='technologies'>
        <h1>Технологии</h1>
        <ul class='technologiesList'>
          <div class='firstLine'>
            <li class='technologiesListItem'>
              <h2>Фронтенд</h2>
              <ul class='technologiesListItemText'>
                <li v-for="item in frontendList" :key="item">
                  <Clip>{{ item }}</Clip>
                </li>
              </ul>
            </li>

            <li class='technologiesListItem'>
              <h2>Бэкенд</h2>
              <ul class='technologiesListItemText'>
                <li v-for="item in backendList" :key="item">
                  <Clip>{{ item }}</Clip>
                </li>
              </ul>
            </li>
          </div>
          <li class='technologiesListItem technologiesListItemOther'>
            <h2>Дополнительно</h2>
            <ul class='technologiesListItemText'>
              <li v-for="item in otherList" :key="item">
                <Clip>{{ item }}</Clip>
              </li>
            </ul>
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
}

.technologies {
  width: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: var(--padding-content-block);
}

.technologiesList {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--padding-content-block);
  min-width: 100%;
}

.technologiesListItem {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  color: #1a1f3c;

}

.firstLine {
  display: flex;
  justify-content: space-between;
  gap: var(--padding-content-block);

  @media (max-width: 880px) {
    flex-direction: column;
  }
}

.technologiesListItemOther {
  min-width: 100%;
  width: 100%;
}

.technologiesListItemText {
  color: #6e738b;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
</style>
