<template>
  <div>
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Laiba Naseer — Frontend Developer & UI Designer',
  meta: [
    {
      name: 'description',
      content: 'High-performance Frontend Developer specializing in Vue.js & Nuxt.js with 3+ years of graphic design experience. Available for freelance work.',
    },
    { property: 'og:title', content: 'Laiba Naseer — Frontend Developer & UI Designer' },
    { property: 'og:description', content: 'Vue.js & Nuxt.js specialist crafting beautiful, performant web experiences.' },
  ],
})
</script>
