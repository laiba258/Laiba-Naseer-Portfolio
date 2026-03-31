<template>
  <section id="experience" class="py-32 relative overflow-hidden">
    <div class="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-teal-500/20 to-transparent" />

    <UContainer>
      <div class="text-center mb-20 reveal">
        <p class="text-teal-400 font-mono text-sm mb-3">// my journey</p>
        <h2 class="font-display font-black text-5xl md:text-6xl text-white mb-4">
          Experience & <span class="gradient-text">Timeline</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto" />
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Timeline -->
        <div class="relative">
          <!-- Center line -->
          <div class="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style="background: linear-gradient(180deg, #0d9488, rgba(13,148,136,0.1))" />

          <div class="space-y-12">
            <div
              v-for="(item, i) in timeline"
              :key="item.title"
              class="relative"
              :class="i % 2 === 0 ? 'reveal-left' : 'reveal-right'"
            >
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <!-- Left side -->
                <div :class="i % 2 === 0 ? 'md:text-right' : 'md:order-2'">
                  <div class="glass rounded-2xl p-6 card-hover border-gradient" :class="i % 2 === 0 ? '' : ''">
                    <div class="flex items-center gap-2 mb-2" :class="i % 2 === 0 ? 'justify-end' : ''">
                      <span class="px-2 py-1 rounded-lg text-xs font-mono"
                        :style="{ background: `${item.color}15`, color: item.color }">
                        {{ item.period }}
                      </span>
                    </div>
                    <h3 class="font-display font-bold text-xl text-white mb-1">{{ item.title }}</h3>
                    <p class="text-teal-400 text-sm font-medium mb-3">{{ item.company }}</p>
                    <p class="text-slate-400 text-sm leading-relaxed">{{ item.description }}</p>
                    <ul class="mt-3 space-y-1">
                      <li v-for="point in item.points" :key="point"
                        class="flex items-start gap-2 text-xs text-slate-500"
                        :class="i % 2 === 0 ? 'justify-end flex-row-reverse' : ''">
                        <UIcon name="i-heroicons-chevron-right" class="w-3 h-3 text-teal-500 flex-shrink-0 mt-0.5" />
                        {{ point }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Center dot -->
                <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div class="w-12 h-12 rounded-full glass-teal flex items-center justify-center glow-teal">
                    <UIcon :name="item.icon" class="w-5 h-5 text-teal-400" />
                  </div>
                </div>

                <!-- Right side (empty for alternating) -->
                <div :class="i % 2 === 0 ? '' : 'md:order-1'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const timeline = [
  {
    title: 'Independent Web Developer & UI Designer',
    company: 'Freelance (Self-employed)',
    period: '2021 – Present',
    icon: 'i-heroicons-briefcase',
    color: '#0d9488',
    description: 'Developing modern, responsive web UIs for diverse international clients.',
    points: [
      'Built responsive web UIs using Vue.js, Nuxt.js, and Tailwind CSS',
      'Managed entire project lifecycle from design to deployment',
      'Designed visual identities including logos, flyers, and banners',
    ],
  },
  {
    title: 'BS Computer Science',
    company: 'University of Agriculture, Sub Campus Toba Tek Singh',
    period: '2021 – Present',
    icon: 'i-heroicons-academic-cap',
    color: '#06b6d4',
    description: 'Currently in 8th semester, combining academic knowledge with practical development.',
    points: [
      'Specializing in software engineering and web technologies',
      'Active in tech communities and hackathons',
    ],
  },
  {
    title: 'Microsoft Azure AI Engineer Associate',
    company: 'Microsoft Certification',
    period: '2023',
    icon: 'i-heroicons-check-badge',
    color: '#818cf8',
    description: 'Earned Microsoft certification in Azure AI Engineering.',
    points: [
      'Azure AI services and cognitive APIs',
      'Machine learning model deployment',
    ],
  },
  {
    title: 'Web Development Course',
    company: 'Ecommerce by Experts, Toba',
    period: '2021',
    icon: 'i-heroicons-code-bracket',
    color: '#f59e0b',
    description: 'Completed intensive 6-month web development program.',
    points: [
      'Full-stack web development fundamentals',
      'Modern JavaScript frameworks and tools',
    ],
  },
]
</script>
