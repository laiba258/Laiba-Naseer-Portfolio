<script setup lang="ts">
useHead({
  title: 'Laiba Naseer — React Frontend Developer & UI Designer',
  meta: [
    { name: 'description', content: 'React Frontend Developer specializing in React, Vue.js, and Nuxt.js with a background in UI design. Based in Pakistan.' },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection :preview="true" />
  </div>
</template>
