<script setup lang="ts">
import { projects } from '~/data/projects'

const route = useRoute()
const project = computed(() => projects.find(p => p.slug === route.params.slug))

useHead(() => ({
  title: project.value ? `${project.value.title} — Laiba Naseer` : 'Project — Laiba Naseer',
}))
</script>

<template>
  <div class="pt-28 pb-20">
    <UContainer v-if="project">
      <NuxtLink to="/projects"
        class="inline-flex items-center gap-2 text-stone-500 hover:text-violet-400 transition-colors text-sm mb-10">
        <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
        All projects
      </NuxtLink>

      <div class="grid lg:grid-cols-5 gap-12">
        <div class="lg:col-span-2 space-y-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="tag">{{ project.type }}</span>
              <span class="text-stone-600 text-xs font-mono">{{ project.year }}</span>
            </div>
            <h1 class="font-display font-black text-4xl md:text-5xl text-white mb-4">
              {{ project.title }}
            </h1>
            <p class="text-stone-400 leading-relaxed">{{ project.longDescription }}</p>
          </div>

          <div class="card-surface p-6 rounded-2xl space-y-3">
            <p class="text-stone-500 text-xs font-mono mb-4">// highlights</p>
            <div v-for="point in project.highlights" :key="point"
              class="flex items-start gap-3 text-sm text-stone-300">
              <div class="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                :style="{ background: project.accent }" />
              {{ point }}
            </div>
          </div>

          <div>
            <p class="text-stone-500 text-xs font-mono mb-3">// tech stack</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
            </div>
          </div>

          <a :href="project.liveUrl" target="_blank" rel="noopener"
            class="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium">
            <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4" />
            Live Site
          </a>
        </div>

        <div class="lg:col-span-3">
          <div class="card-surface rounded-2xl overflow-hidden">
            <div class="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
              <div class="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div class="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <div class="flex-1 mx-3 h-6 rounded-md bg-stone-800 flex items-center px-3">
                <span class="text-stone-500 text-xs font-mono truncate">{{ project.liveUrl }}</span>
              </div>
              <a :href="project.liveUrl" target="_blank" rel="noopener"
                class="text-stone-600 hover:text-violet-400 transition-colors">
                <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-3.5 h-3.5" />
              </a>
            </div>
            <div class="relative bg-stone-950" style="height: 480px;">
              <img
                :src="`https://api.microlink.io/?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`"
                :alt="project.title"
                class="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div class="absolute inset-0 flex items-end justify-center pb-6 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-stone-950/40">
                <a :href="project.liveUrl" target="_blank" rel="noopener"
                  class="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium">
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4" />
                  Open Live Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <UContainer v-else class="text-center py-20">
      <p class="text-stone-500 text-lg">Project not found.</p>
      <NuxtLink to="/projects"
        class="btn-outline inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium mt-6">
        Back to projects
      </NuxtLink>
    </UContainer>
  </div>
</template>
