<script setup lang="ts">
import { projects } from '~/data/projects'

const props = defineProps<{ preview?: boolean }>()

const displayProjects = computed(() =>
  props.preview ? projects.slice(0, 2) : projects
)
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <UContainer>
      <div class="flex items-end justify-between mb-14 reveal">
        <div>
          <p class="text-violet-400 font-mono text-xs mb-2">// selected work</p>
          <h2 class="font-display font-black text-4xl md:text-5xl text-white">
            Projects<span class="gradient-text">.</span>
          </h2>
        </div>
        <NuxtLink v-if="preview" to="/projects"
          class="hidden md:inline-flex btn-outline items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium">
          View all
          <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <NuxtLink v-for="(project, i) in displayProjects" :key="project.slug"
          :to="`/projects/${project.slug}`"
          class="group block card-surface card-hover rounded-2xl overflow-hidden reveal"
          :style="{ animationDelay: `${i * 0.1}s` }">
          <div class="relative h-52 overflow-hidden bg-stone-950">
            <img
              :src="`https://api.microlink.io/?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`"
              :alt="project.title"
              class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="{ background: `${project.color}18` }">
              <span class="flex items-center gap-2 px-4 py-2 rounded-xl glass text-white text-sm font-medium">
                <UIcon name="i-heroicons-eye" class="w-4 h-4" />
                View Details
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="tag">{{ project.type }}</span>
              <span class="text-stone-600 text-xs font-mono">{{ project.year }}</span>
            </div>
            <h3 class="font-display font-bold text-xl text-white mb-2 group-hover:text-violet-300 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-stone-400 text-sm leading-relaxed mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in project.stack.slice(0, 4)" :key="tech" class="tag">{{ tech }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div v-if="preview" class="mt-8 text-center md:hidden reveal">
        <NuxtLink to="/projects" class="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium">
          View all projects
          <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>
