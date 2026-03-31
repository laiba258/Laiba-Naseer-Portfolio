<template>
  <section id="projects" class="py-32 relative overflow-hidden">
    <div class="absolute right-0 bottom-0 w-96 h-96 rounded-full opacity-5"
      style="background: radial-gradient(circle, #818cf8, transparent 70%); filter: blur(80px);" />

    <UContainer>
      <div class="text-center mb-20 reveal">
        <p class="text-teal-400 font-mono text-sm mb-3">// what I've built</p>
        <h2 class="font-display font-black text-5xl md:text-6xl text-white mb-4">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto mb-6" />
        <p class="text-slate-400 max-w-xl mx-auto">
          A selection of projects that showcase my skills in building performant, beautiful web applications.
        </p>
      </div>

      <!-- Featured projects -->
      <div class="space-y-8 mb-16">
        <div
          v-for="(project, i) in featuredProjects"
          :key="project.title"
          class="group reveal"
          :class="i % 2 === 0 ? 'reveal-left' : 'reveal-right'"
        >
          <div class="border-gradient rounded-3xl p-1 card-hover">
            <div class="glass rounded-3xl overflow-hidden">
              <div class="grid md:grid-cols-2 gap-0">
                <!-- Project visual -->
                <div
                  class="relative h-64 md:h-auto overflow-hidden"
                  :class="i % 2 === 1 ? 'md:order-2' : ''"
                >
                  <div class="absolute inset-0 flex items-center justify-center"
                    :style="{ background: project.gradient }">
                    <!-- Mock browser window -->
                    <div class="w-4/5 glass rounded-xl overflow-hidden shadow-2xl">
                      <div class="flex items-center gap-1.5 px-3 py-2 bg-black/30">
                        <div class="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <div class="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        <div class="flex-1 mx-2 h-4 rounded bg-white/10 flex items-center px-2">
                          <span class="text-white/40 text-xs truncate">{{ project.url }}</span>
                        </div>
                      </div>
                      <div class="h-32 flex items-center justify-center p-4">
                        <div class="text-center">
                          <div class="text-4xl mb-2">{{ project.emoji }}</div>
                          <p class="text-white/60 text-xs">{{ project.title }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Overlay on hover -->
                  <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a :href="project.liveUrl" target="_blank"
                      class="px-4 py-2 rounded-xl bg-teal-500 text-white text-sm font-medium hover:bg-teal-400 transition-colors flex items-center gap-2">
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>

                <!-- Project info -->
                <div class="p-8 flex flex-col justify-center" :class="i % 2 === 1 ? 'md:order-1' : ''">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="px-2 py-1 rounded-lg bg-teal-500/10 text-teal-400 text-xs font-mono">
                      {{ project.type }}
                    </span>
                    <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span class="text-green-400 text-xs">Live</span>
                  </div>

                  <h3 class="font-display font-bold text-2xl text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {{ project.title }}
                  </h3>

                  <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    {{ project.description }}
                  </p>

                  <!-- Highlights -->
                  <ul class="space-y-2 mb-6">
                    <li v-for="point in project.highlights" :key="point"
                      class="flex items-start gap-2 text-sm text-slate-400">
                      <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      {{ point }}
                    </li>
                  </ul>

                  <!-- Tech stack -->
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span v-for="tech in project.stack" :key="tech"
                      class="px-3 py-1 rounded-full glass text-slate-400 text-xs font-mono hover:text-teal-400 transition-colors">
                      {{ tech }}
                    </span>
                  </div>

                  <!-- Links -->
                  <div class="flex gap-3">
                    <a :href="project.liveUrl" target="_blank"
                      class="btn-magnetic flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-sm font-medium">
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4" />
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More projects CTA -->
      <div class="text-center reveal">
        <p class="text-slate-500 mb-4">More projects coming soon...</p>
        <a href="https://github.com" target="_blank"
          class="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass text-slate-400 hover:text-white hover:border-teal-500/30 transition-all">
          <UIcon name="i-simple-icons-github" class="w-5 h-5" />
          View GitHub Profile
        </a>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const featuredProjects = [
  {
    title: 'NutriMate',
    type: 'Full-Stack App',
    emoji: '🥗',
    url: 'nutrimate-sigma.vercel.app',
    liveUrl: 'https://nutrimate-sigma.vercel.app',
    gradient: 'linear-gradient(135deg, rgba(13,148,136,0.3) 0%, rgba(6,182,212,0.2) 100%)',
    description: 'A high-performance nutrition tracking application built with Nuxt 3 and Tailwind CSS. Features a modular component architecture for scalability and clean code maintenance.',
    highlights: [
      'Engineered with Nuxt 3 and Tailwind CSS for peak performance',
      'Modular component architecture for scalability',
      'SEO-optimized with smooth, responsive user experience',
    ],
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'TypeScript', 'Vercel'],
  },
  {
    title: 'Vantage Blog Engine',
    type: 'Blog Platform',
    emoji: '✍️',
    url: 'blogsite-nine-iota.vercel.app',
    liveUrl: 'https://blogsite-nine-iota.vercel.app',
    gradient: 'linear-gradient(135deg, rgba(129,140,248,0.3) 0%, rgba(6,182,212,0.2) 100%)',
    description: 'A custom-built blog engine focusing on complex state management and API integrations within the Vue ecosystem. Prioritizes content readability and accessibility.',
    highlights: [
      'Custom blog engine with complex state management',
      'API integrations within the Vue ecosystem',
      'User-friendly interface prioritizing content readability',
    ],
    stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'REST API', 'Vercel'],
  },
]
</script>
