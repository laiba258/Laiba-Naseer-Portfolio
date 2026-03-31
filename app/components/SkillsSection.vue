<template>
  <section class="py-24 relative overflow-hidden">
    <UContainer>
      <div class="flex items-end justify-between mb-14 reveal">
        <div>
          <p class="text-violet-400 font-mono text-xs mb-2">// what I work with</p>
          <h2 class="font-display font-black text-4xl md:text-5xl text-white">
            Skills<span class="gradient-text">.</span>
          </h2>
        </div>
      </div>

      <!-- Category tabs -->
      <div class="flex flex-wrap gap-2 mb-10 reveal">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="activeCategory === cat.id
            ? 'btn-primary'
            : 'card-surface text-stone-400 hover:text-white'"
          @click="activeCategory = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills grid -->
      <div class="grid md:grid-cols-2 gap-4 mb-16">
        <div
          v-for="(skill, i) in filteredSkills"
          :key="skill.name"
          class="card-surface rounded-xl p-4 reveal"
          :style="{ animationDelay: `${i * 0.04}s` }"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <span class="text-xl">{{ skill.emoji }}</span>
              <span class="text-stone-200 text-sm font-medium">{{ skill.name }}</span>
            </div>
            <span class="text-stone-500 font-mono text-xs">{{ skill.level }}%</span>
          </div>
          <div class="h-1 bg-stone-800 rounded-full overflow-hidden">
            <div
              class="skill-bar-fill h-full rounded-full"
              :data-width="skill.level"
              :style="{ background: `linear-gradient(90deg, ${skill.color}, ${skill.colorEnd})` }"
            />
          </div>
        </div>
      </div>

      <!-- Marquee -->
      <div class="reveal overflow-hidden">
        <p class="text-center text-stone-700 text-xs font-mono mb-5">// tools & technologies</p>
        <div class="relative">
          <div class="absolute left-0 top-0 bottom-0 w-16 z-10"
            style="background: linear-gradient(90deg, #0c0a09, transparent)" />
          <div class="absolute right-0 top-0 bottom-0 w-16 z-10"
            style="background: linear-gradient(-90deg, #0c0a09, transparent)" />
          <div class="flex animate-marquee gap-3 w-max">
            <div v-for="(tech, idx) in [...allTechs, ...allTechs]" :key="`${tech.name}-${idx}`"
              class="flex items-center gap-2 card-surface rounded-xl px-4 py-2 flex-shrink-0">
              <span class="text-base">{{ tech.emoji }}</span>
              <span class="text-stone-400 text-sm whitespace-nowrap">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Tools & Backend' },
  { id: 'design', label: 'Design' },
]

const skills = [
  { name: 'Vue.js (2 & 3)', level: 90, category: 'frontend', emoji: '💚', color: '#42b883', colorEnd: '#35495e' },
  { name: 'Nuxt.js (2 & 3)', level: 88, category: 'frontend', emoji: '⚡', color: '#7c3aed', colorEnd: '#a78bfa' },
  { name: 'TypeScript', level: 80, category: 'frontend', emoji: '🔷', color: '#3178c6', colorEnd: '#60a5fa' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend', emoji: '🎨', color: '#06b6d4', colorEnd: '#0d9488' },
  { name: 'JavaScript (ES6+)', level: 85, category: 'frontend', emoji: '🟡', color: '#f7df1e', colorEnd: '#f59e0b' },
  { name: 'HTML5 & CSS3', level: 95, category: 'frontend', emoji: '🌐', color: '#e34f26', colorEnd: '#f06529' },
  { name: 'RESTful APIs', level: 75, category: 'backend', emoji: '🔌', color: '#8b5cf6', colorEnd: '#a78bfa' },
  { name: 'Git & GitHub', level: 82, category: 'backend', emoji: '🐙', color: '#f97316', colorEnd: '#fb923c' },
  { name: 'SQLite', level: 65, category: 'backend', emoji: '🗄️', color: '#0ea5e9', colorEnd: '#38bdf8' },
  { name: 'SEO Optimization', level: 72, category: 'backend', emoji: '🔍', color: '#10b981', colorEnd: '#34d399' },
  { name: 'UI/UX Design', level: 88, category: 'design', emoji: '✏️', color: '#ec4899', colorEnd: '#f472b6' },
  { name: 'Figma', level: 82, category: 'design', emoji: '🎭', color: '#a259ff', colorEnd: '#c084fc' },
  { name: 'Adobe Suite', level: 78, category: 'design', emoji: '🖌️', color: '#ff0000', colorEnd: '#ff6b6b' },
  { name: 'Graphic Design', level: 88, category: 'design', emoji: '🎨', color: '#f59e0b', colorEnd: '#fbbf24' },
]

const filteredSkills = computed(() =>
  activeCategory.value === 'all' ? skills : skills.filter(s => s.category === activeCategory.value)
)

const allTechs = [
  { name: 'Vue.js', emoji: '💚' }, { name: 'Nuxt.js', emoji: '⚡' },
  { name: 'TypeScript', emoji: '🔷' }, { name: 'Tailwind CSS', emoji: '🎨' },
  { name: 'Figma', emoji: '🎭' }, { name: 'Git', emoji: '🐙' },
  { name: 'JavaScript', emoji: '🟡' }, { name: 'HTML5', emoji: '🌐' },
  { name: 'Adobe Suite', emoji: '🖌️' }, { name: 'SQLite', emoji: '🗄️' },
  { name: 'REST APIs', emoji: '🔌' }, { name: 'SEO', emoji: '🔍' },
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
          const el = bar as HTMLElement
          setTimeout(() => { el.style.width = `${el.dataset.width}%` }, 200)
        })
      }
    })
  }, { threshold: 0.2 })

  const section = document.querySelector('#skills-section')
  if (section) observer.observe(section)
  else {
    // fallback: animate all visible
    setTimeout(() => {
      document.querySelectorAll('.skill-bar-fill').forEach((bar) => {
        const el = bar as HTMLElement
        el.style.width = `${el.dataset.width}%`
      })
    }, 500)
  }
})

watch(activeCategory, () => {
  nextTick(() => {
    setTimeout(() => {
      document.querySelectorAll('.skill-bar-fill').forEach((bar) => {
        const el = bar as HTMLElement
        el.style.width = '0%'
        setTimeout(() => { el.style.width = `${el.dataset.width}%` }, 100)
      })
    }, 50)
  })
})
</script>
