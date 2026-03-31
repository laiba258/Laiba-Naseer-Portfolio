<template>
  <div>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection :preview="true" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Laiba Naseer — Frontend Developer & UI Designer',
  meta: [
    { name: 'description', content: 'Frontend Developer specializing in Vue.js & Nuxt.js with a background in graphic design. Based in Pakistan.' },
  ],
})
</script>
