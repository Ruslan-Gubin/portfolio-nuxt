<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import ProjectImages from '../../components/ProjectImages';
import Clip from '../../components/Clip';
import projects from '../../data/projects.json';

definePageMeta({
  layout: 'default',
})

const route = useRoute();
const name = route.params.name;
const project = projects.find(el => el.name === name);

</script>

<template>
  <section v-if="project" class='pageWrapper'>
    <section class="infoBlock">
      <header class='header'>
        <h1 v-if="project.title">{{ project.title }}</h1>
        <h2 v-if="project.full_description" class="subTitle">
          {{ project.full_description }}
        </h2>
        <h3 v-if="project.technologies && project.technologies.length > 0" class="functionListTitle">Технологии</h3>
        <ul class='clipList'>
          <li v-for="value in project.technologies" :key='value'>
            <Clip>{{ value }}</Clip>
          </li>
        </ul>
      </header>
      <ul class="functionList">
        <h3 v-if="project.functional && project.functional.length > 0" class="functionListTitle">Функционал</h3>
        <li v-for="functional in project.functional" :key="functional" class="functionItem">
          {{ functional }}
        </li>
      </ul>
      <NuxtLink v-if="project.link" class='linkProject' :to="project.link" target='_blank'>
        {{ project.link }}
      </NuxtLink>
    </section>

    <ProjectImages v-if="project.total_image" :maxCount="project.total_image" :projectName="project.name" />
  </section>
</template>

<style lang="css" scoped>
.pageWrapper {
  padding-inline: var(--padding-content-block);
  padding-block: var(--padding-content-block);
  padding-bottom: var(--padding-bottom-home-block);
  display: flex;
  column-gap: var(--padding-content-block);

  @media (max-width: 1160px) {
    flex-direction: column-reverse;
    row-gap: var(--padding-content-block);
  }
}


.infoBlock {
  width: 33%;
  min-width: 33%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-top: var(--padding-content-block);

  @media (max-width: 1160px) {
    width: 100%;
    max-width: 100%;
  }

}

.header {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}


.subTitle {
  font-weight: 400;
  font-size: 18px;
  max-width: 770px;
  line-height: 28px;
  color: #333333;

  @media (max-width: 500px) {
    font-size: 18px;
    line-height: 22px;
  }

}

.functionList {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  font-weight: 400;
  font-size: 18px;
}

.functionListTitle {
  font-size: 32px;
  line-height: 40px;

}

.functionItem {
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: #333333;

  &::before {
    content: '-';
  }
}

.linkProject {
  text-decoration: underline;
  color: green;
}

.clipList {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
