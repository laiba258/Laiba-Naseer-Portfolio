<template>
  <section class="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    <!-- Ambient blobs -->
    <div class="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 animate-pulse-glow pointer-events-none"
      style="background: radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%); filter: blur(80px); transform: translate(-30%, -30%);" />
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow pointer-events-none"
      style="background: radial-gradient(circle, rgba(244,114,182,0.3), transparent 70%); filter: blur(80px); transform: translate(30%, 30%); animation-delay: 2s;" />

    <UContainer class="relative z-10 w-full">
      <div class="max-w-4xl mx-auto">

        <!-- Availability badge -->
        <div class="animate-slide-up opacity-0 mb-8" style="animation-fill-mode: forwards;">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-purple text-violet-300 text-xs font-mono">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </span>
        </div>

        <!-- Main heading -->
        <div class="animate-slide-up opacity-0 delay-100 mb-6" style="animation-fill-mode: forwards;">
          <h1 class="font-display font-black leading-[1.05] tracking-tight">
            <span class="block text-5xl md:text-7xl lg:text-8xl text-white">Laiba Naseer</span>
            <span class="block text-4xl md:text-6xl lg:text-7xl gradient-text mt-1">
              Frontend Dev
            </span>
            <span class="block text-4xl md:text-6xl lg:text-7xl text-stone-500 mt-1">
              & UI Designer
            </span>
          </h1>
        </div>

        <!-- Description -->
        <p class="animate-slide-up opacity-0 delay-200 text-stone-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10" style="animation-fill-mode: forwards;">
          I build fast, beautiful web experiences with
          <span class="text-violet-400 font-medium">Vue.js & Nuxt.js</span> —
          and bring a designer's eye to every pixel. Currently in my final year of
          <span class="text-stone-300 font-medium">BS Computer Science</span>.
        </p>

        <!-- CTA row -->
        <div class="animate-slide-up opacity-0 delay-300 flex flex-wrap items-center gap-4 mb-14" style="animation-fill-mode: forwards;">
          <NuxtLink to="/projects"
            class="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm">
            See My Work
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
          </NuxtLink>
          <NuxtLink to="/contact"
            class="btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm">
            Let's Talk
          </NuxtLink>
          <div class="flex items-center gap-3 ml-2">
            <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank"
              class="w-9 h-9 rounded-xl glass flex items-center justify-center text-stone-500 hover:text-violet-400 transition-colors">
              <UIcon :name="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Honest quick facts -->
        <div class="animate-slide-up opacity-0 delay-400 grid grid-cols-2 md:grid-cols-4 gap-3" style="animation-fill-mode: forwards;">
          <div v-for="fact in facts" :key="fact.label"
            class="card-surface p-4 rounded-2xl">
            <div class="text-2xl font-display font-black text-white mb-0.5">{{ fact.value }}</div>
            <div class="text-xs text-stone-500">{{ fact.label }}</div>
          </div>
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div class="w-5 h-8 rounded-full border border-stone-700 flex items-start justify-center p-1">
          <div class="w-1 h-2 rounded-full bg-violet-400 animate-bounce" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const facts = [
  { value: '3+', label: 'Years in design' },
  { value: '2', label: 'Certifications' },
  { value: 'Vue', label: 'Primary stack' },
  { value: 'PK', label: 'Based in Pakistan' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'i-simple-icons-github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-simple-icons-linkedin' },
]
</script>
