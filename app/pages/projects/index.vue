<template>
  <div class="pt-28 pb-20">
    <UContainer>
      <div class="mb-14">
        <p class="text-violet-400 font-mono text-xs mb-2">// all work</p>
        <h1 class="font-display font-black text-5xl md:text-6xl text-white">
          Projects<span class="gradient-text">.</span>
        </h1>
        <p class="text-stone-400 mt-4 max-w-lg">
          A collection of projects I've worked on — mostly team learning projects while building my skills.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="(project, i) in projects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
          class="group block card-surface card-hover rounded-2xl overflow-hidden"
          :style="{ animationDelay: `${i * 0.1}s` }"
        >
          <!-- Preview -->
          <div class="relative h-52 overflow-hidden bg-stone-950">
            <div class="absolute inset-0 scale-[0.6] origin-top-left w-[167%] h-[167%] pointer-events-none">
              <iframe
                :src="project.liveUrl"
                class="w-full h-full border-none"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                title="Project preview"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="{ background: `${project.color}18` }">
              <span class="flex items-center gap-2 px-4 py-2 rounded-xl glass text-white text-sm font-medium">
                <UIcon name="i-heroicons-eye" class="w-4 h-4" />
                View Details
              </span>
            </div>
            <div v-if="project.teamProject" class="absolute top-3 right-3 px-2.5 py-1 rounded-full glass text-xs text-stone-400 font-mono">
              team project
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
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({
  title: 'Projects — Laiba Naseer',
  meta: [{ name: 'description', content: 'Projects built by Laiba Naseer — Vue.js, Nuxt.js, and UI design work.' }],
})
</script>
