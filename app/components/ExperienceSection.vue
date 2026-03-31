<script setup lang="ts">
const timeline = [
  {
    title: 'Frontend Developer & UI Designer',
    company: 'Freelance (Self-employed)',
    period: '2021 – Present',
    icon: 'i-heroicons-briefcase',
    color: '#7c3aed',
    description: 'Building responsive web UIs for clients using Vue.js, Nuxt.js, and Tailwind CSS.',
    points: [
      'Built responsive web UIs using Vue.js, Nuxt.js, and Tailwind CSS',
      'Designed visual identities including logos, flyers, and banners',
      'Managed projects from design to deployment',
    ],
  },
  {
    title: 'BS Computer Science',
    company: 'University of Agriculture, Sub Campus Toba Tek Singh',
    period: '2021 – Present',
    icon: 'i-heroicons-academic-cap',
    color: '#f472b6',
    description: 'Currently in 8th semester, combining academic knowledge with practical development.',
    points: [
      'Specializing in software engineering and web technologies',
      'Built team projects applying real-world patterns',
    ],
  },
  {
    title: 'Microsoft Azure AI Engineer Associate',
    company: 'Microsoft Certification',
    period: '2023',
    icon: 'i-heroicons-check-badge',
    color: '#fb923c',
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
    color: '#34d399',
    description: 'Completed intensive 6-month web development program.',
    points: [
      'Full-stack web development fundamentals',
      'Modern JavaScript frameworks and tools',
    ],
  },
]
</script>

<template>
  <section class="py-16 relative overflow-hidden">
    <UContainer>
      <div class="mb-14 reveal">
        <p class="text-violet-400 font-mono text-xs mb-2">// my journey</p>
        <h2 class="font-display font-black text-4xl md:text-5xl text-white">
          Timeline<span class="gradient-text">.</span>
        </h2>
      </div>

      <div class="max-w-2xl space-y-4">
        <div v-for="(item, i) in timeline" :key="item.title"
          class="card-surface rounded-2xl p-6 reveal"
          :style="{ animationDelay: `${i * 0.1}s` }">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              :style="{ background: `${item.color}15` }">
              <UIcon :name="item.icon" class="w-5 h-5" :style="{ color: item.color }" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-3 mb-1">
                <h3 class="font-display font-bold text-white text-base">{{ item.title }}</h3>
                <span class="text-stone-600 text-xs font-mono flex-shrink-0">{{ item.period }}</span>
              </div>
              <p class="text-violet-400 text-sm mb-2">{{ item.company }}</p>
              <p class="text-stone-400 text-sm leading-relaxed">{{ item.description }}</p>
              <ul class="mt-3 space-y-1">
                <li v-for="point in item.points" :key="point"
                  class="flex items-start gap-2 text-xs text-stone-500">
                  <span class="w-1 h-1 rounded-full bg-violet-500/50 mt-1.5 flex-shrink-0" />
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
