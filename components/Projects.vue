<script setup lang="ts">
import Clip from './Clip';
import projects from '../data/projects.json';

</script>

<template>
  <section class='wrapper'>
    <div class='target' id='target-projects'></div>

    <section class='content'>
      <header class='header'>
        <h1 class='title'>Проекты</h1>
        <h2 class='subtitle'>
          В этом разделе представлен список ключевых проектов, реализованных с использованием современных технологий и
          решений для разработки, интеграции и поддержки системы.
        </h2>
      </header>

      <ul class='projects'>
        <li v-for='project in projects' :key="project.name" class='projectItem'>
          <NuxtLink :to="{ name: 'projects-name', params: { name: project.name } }">
            <div class='picture'>
              <img class='projectImg' :src="project.image" alt='project image' />
            </div>
            <div class='itemContent'>
              <div class='itemContentHeader'>
                <h3 class='itemContentTitle'>{{ project.title }}</h3>
                <div class='itemContentSubTitle'>{{ project.description }}</div>
              </div>
              <ul class='clipList'>
                <li v-for="value in project.technologies" :key='value'>
                  <Clip>{{ value }}</Clip>
                </li>
              </ul>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>


  </section>
</template>

<style lang="css" scoped>
.wrapper {
  background-color: var(--info-block-bg-dark);
  position: relative;
  padding-inline: var(--padding-main);
  padding-block: var(--padding-bottom-home-block);
  border-bottom: 1px solid var(--info-block-border-bottom-light);
}

.target {
  position: absolute;
  top: -80px;

  @media (max-width: 880px) {
    top: -60px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  max-width: var(--content-max-width);
  margin: 0 auto;
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


.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--padding-main);
  justify-content: space-between;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.projectItem {
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 0.2s linear;
  position: relative;
  box-shadow: var(--project-cart-shadow);
  background-color: var(--info-block-bg-light);

  &:hover {
    box-shadow: var(--project-cart-shadow-hover);
  }
}

.picture {
  overflow: hidden;
}

.projectImg {
  max-width: 100%;
  object-fit: cover;
}


.itemContent {
  padding: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media (max-width: 1000px) {
    padding: 20px;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
}

.itemContentHeader {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.itemContentTitle {
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
}

.itemContentSubTitle {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 56px;
  color: var(--sub-title-color);
}

.clipList {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
