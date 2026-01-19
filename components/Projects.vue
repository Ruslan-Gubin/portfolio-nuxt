<script setup lang="ts">
import Clip from './Clip.vue';


const projectsList = [
  { id: 1, name: 'Cezyo', description: 'B2B/B2C платформа для управления продажами и логистикой, включающая функционал для поставщиков производителей и клиентов. Реализовал работу с заказами, логистикой, интеграцию со сторонними службами доставки, а также административную панель.', image: '/image/Macbook-Air-dev.cezyo.com.webp', technologies: ["React", "SCSS", "Node js", "P2"] },
  { id: 2, name: "Giftoboom", image: '/image/Macbook-Air-giftoboom.front.wtsdemo.ru.webp', description: 'приложение для генерации инструкций по созданию картин из изображений, с графической обработкой и голосовыми подсказками.', technologies: ["React", "SCSS", "Node js", "P2"] },
  { id: 3, name: "Feejoy", image: '/image/Macbook-Air-en.feejoy.com.webp', description: 'сайт для управления системными решениями в области измерительных приборов, включая административную панель.', technologies: ["React", "SCSS", "Node js", "P2"] },
  { id: 4, name: "AG Clinic:", image: '/image/Macbook-Air-agclinic.ru.webp', description: 'комплексное решение для сети клиник, включающее управление расписанием, бронированием и отзывами.', technologies: ["React", "SCSS", "Node js", "P2"] },
  { id: 5, name: "Касперский", image: '/image/Macbook-Air-cybersecurity-ai.datalesson.ru.webp', description: 'Интерактивный тренажер для «Урока цифры» по теме Касперский кибербезопасность.', technologies: ["React", "SCSS", "Node js", "P2"] },
  { id: 5, name: "Яндекс такси", image: '/image/Macbook-Air-kod-goroda.datalesson.ru.webp', description: 'Интерактивный тренажер для «Урока цифры» по теме такси.', technologies: ["React", "SCSS", "Node js", "P2"] },
  { id: 6, name: "Andaman", image: '/image/Macbook-Air-andaman.city.webp', description: 'Комплекс апартаментов и резиденций с курортной инфраструктурой под управлением отельной сети Radisson', technologies: ["Next js", "SCSS", "Strapi"] },
];

</script>

<template>
  <section class='wrapper'>
    <div class='target' id='target-projects'></div>

    <section class='content'>
      <h1 class='title'>Проекты</h1>
      <ul class='projects'>
        <li v-for='project in projectsList' :key="project.id" class='projectItem'>
          <NuxtLink :to="{ name: 'projects-id', params: { id: project.id } }">
            <img class='projectImg' :src="project.image" alt='project image' />
            <div class='itemContent'>
              <div class='itemContentHeader'>
                <h3 class='itemContentTitle'>{{ project.name }}</h3>
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
}

.target {
  position: absolute;
  top: -80px;
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: var(--padding-main);
  max-width: var(--content-max-width);
  margin: 0 auto;
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
}


.projectImg {
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
