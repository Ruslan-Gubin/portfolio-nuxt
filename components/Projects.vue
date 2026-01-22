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
        <li v-for='project in projects' :key="project.id" class='projectItem'>
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
  background-color: #fafafc;
  position: relative;
  padding-inline: var(--padding-main);
  padding-block: var(--padding-bottom-home-block);
  border-bottom: 1px solid #eef0f6;
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
  color: #757575;
  font-weight: 400;
  font-size: 18px;
  max-width: 770px;
  line-height: 28px;

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
  border: 1px solid #0011661A;
  box-shadow: 0px 4px 8px -2px #0000000A;
  box-shadow: 0px 2px 4px -2px #00000014;
  background: white;
  transition: box-shadow 0.2s linear;
  box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.2);
  position: relative;

  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
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
}

.clipList {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
