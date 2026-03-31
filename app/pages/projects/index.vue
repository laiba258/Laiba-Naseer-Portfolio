<script setup lang="ts">
import { projects, teamSnapshots } from '~/data/projects'

useHead({
  title: 'Projects — Laiba Naseer',
  meta: [{ name: 'description', content: 'Projects built by Laiba Naseer — Vue.js, Nuxt.js, and UI design work.' }],
})
</script>

<template>
  <div class="pt-28 pb-20">
    <UContainer>
      <div class="mb-16">
        <p class="text-violet-400 font-mono text-xs mb-2">// my work</p>
        <h1 class="font-display font-black text-5xl md:text-6xl text-white">
          Projects<span class="gradient-text">.</span>
        </h1>
        <p class="text-stone-400 mt-4 max-w-lg text-sm leading-relaxed">
          A mix of individual work I built and deployed, plus team learning projects
          I contributed to while growing my skills.
        </p>
      </div>

      <div class="mb-24">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" />
          <h2 class="font-display font-semibold text-base text-white">Individual Work</h2>
          <div class="flex-1 h-px bg-white/5" />
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <NuxtLink v-for="project in projects" :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="group block card-surface card-hover rounded-2xl overflow-hidden">
            <div class="relative h-52 overflow-hidden bg-stone-950">
              <img
                :src="`https://api.microlink.io/?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`"
                :alt="project.title"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :style="{ background: `${project.color}18` }">
                <span class="flex items-center gap-2 px-4 py-2 rounded-xl glass text-white text-sm font-medium">
                  <UIcon name="i-heroicons-eye" class="w-4 h-4" />
                  View Details
                </span>
              </div>
              <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-mono"
                :style="{ background: `${project.color}20`, color: project.accent, border: `1px solid ${project.color}30` }">
                ✦ individual
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="tag">{{ project.type }}</span>
                <span class="text-stone-600 text-xs font-mono">{{ project.year }}</span>
              </div>
              <h2 class="font-display font-bold text-xl text-white mb-2 group-hover:text-violet-300 transition-colors">
                {{ project.title }}
              </h2>
              <p class="text-stone-400 text-sm leading-relaxed mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in project.stack.slice(0, 4)" :key="tech" class="tag">{{ tech }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div>
        <div class="flex items-center gap-3 mb-2">
          <div class="w-2 h-2 rounded-full bg-pink-400 flex-shrink-0" />
          <h2 class="font-display font-semibold text-base text-white">Team Learning Projects</h2>
          <div class="flex-1 h-px bg-white/5" />
        </div>
        <p class="text-stone-600 text-xs font-mono mb-10 pl-5">
          // practice work built as a team while learning — not deployed individually
        </p>

        <div class="relative overflow-hidden mb-4">
          <div class="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style="background: linear-gradient(90deg, var(--bg), transparent)" />
          <div class="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style="background: linear-gradient(-90deg, var(--bg), transparent)" />
          <div class="flex gap-4 w-max animate-marquee-slow">
            <SnapshotCard v-for="(snap, i) in [...teamSnapshots, ...teamSnapshots]" :key="`r1-${i}`" :snap="snap" />
          </div>
        </div>

        <div class="relative overflow-hidden">
          <div class="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style="background: linear-gradient(90deg, var(--bg), transparent)" />
          <div class="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style="background: linear-gradient(-90deg, var(--bg), transparent)" />
          <div class="flex gap-4 w-max animate-marquee-slow-reverse">
            <SnapshotCard
              v-for="(snap, i) in [...[...teamSnapshots].reverse(), ...[...teamSnapshots].reverse()]"
              :key="`r2-${i}`" :snap="snap" />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
