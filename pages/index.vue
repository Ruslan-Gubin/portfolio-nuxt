<script setup lang="ts">
import Alert from "../components/Alert.vue";
import Contact from "../components/Contact.vue";
import About from "../components/About.vue";
import Technologies from "../components/Technologies.vue";
import Projects from "../components/Projects.vue";

useSeoMeta({
  title: 'Руслан Губин | Портфолио',
  ogTitle: 'Портфолио',
  description: "Руслан Губин — профессиональный Frontend (Full Stack) разработчик, специализирующийся на создании современных веб-приложений и цифровых решений. В портфолио — масштабируемые B2B и B2C платформы, образовательные ресурсы, административные панели, лабораторные информационные системы и мобильные приложения. Использую передовые технологии: React, Next.js, Vue.js, Nuxt.js, TypeScript, Node.js, NestJS и другие современные инструменты для разработки надежных и эффективных решений. Мои проекты ориентированы на масштабируемость, безопасность и высокую производительность, что позволяет клиентам достигать бизнес-целей и внедрять инновационные цифровые продукты.",
  ogDescription: "Я разработчик, специализирующийся на создании масштабируемых и эффективных веб-приложений, использующих современные технологии и инструменты для разработки. Мои опыт и навыки включают в себя создание клиентских решений и серверной части, позволяя развивать полноценные веб-приложения.",
  ogImage: '/image/og.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <About />
  <Projects />
  <Technologies />
  <Contact />
</template>
