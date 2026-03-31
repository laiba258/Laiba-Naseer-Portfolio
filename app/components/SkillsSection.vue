<script setup lang="ts">
const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'design', label: 'Design' },
]

const skills = [
  { name: 'Vue.js', label: 'Expert', level: 90, category: 'frontend', icon: '💚', color: '#42b883', colorEnd: '#35495e' },
  { name: 'Nuxt.js', label: 'Expert', level: 88, category: 'frontend', icon: '⚡', color: '#7c3aed', colorEnd: '#a78bfa' },
  { name: 'TypeScript', label: 'Proficient', level: 80, category: 'frontend', icon: '🔷', color: '#3178c6', colorEnd: '#60a5fa' },
  { name: 'Tailwind CSS', label: 'Expert', level: 92, category: 'frontend', icon: '🎨', color: '#06b6d4', colorEnd: '#0d9488' },
  { name: 'JavaScript', label: 'Expert', level: 88, category: 'frontend', icon: '🟡', color: '#f7df1e', colorEnd: '#f59e0b' },
  { name: 'HTML & CSS', label: 'Expert', level: 95, category: 'frontend', icon: '🌐', color: '#e34f26', colorEnd: '#f06529' },
  { name: 'REST APIs', label: 'Proficient', level: 75, category: 'backend', icon: '🔌', color: '#8b5cf6', colorEnd: '#a78bfa' },
  { name: 'Git & GitHub', label: 'Proficient', level: 82, category: 'backend', icon: '🐙', color: '#f97316', colorEnd: '#fb923c' },
  { name: 'SQLite / Drizzle', label: 'Familiar', level: 65, category: 'backend', icon: '🗄️', color: '#0ea5e9', colorEnd: '#38bdf8' },
  { name: 'SEO', label: 'Proficient', level: 72, category: 'backend', icon: '🔍', color: '#10b981', colorEnd: '#34d399' },
  { name: 'UI/UX Design', label: 'Expert', level: 88, category: 'design', icon: '✏️', color: '#ec4899', colorEnd: '#f472b6' },
  { name: 'Figma', label: 'Proficient', level: 82, category: 'design', icon: '🎭', color: '#a259ff', colorEnd: '#c084fc' },
  { name: 'Adobe Suite', label: 'Proficient', level: 78, category: 'design', icon: '🖌️', color: '#ff4444', colorEnd: '#ff6b6b' },
  { name: 'Graphic Design', label: 'Expert', level: 88, category: 'design', icon: '🎨', color: '#f59e0b', colorEnd: '#fbbf24' },
]

const allTechs = [
  { name: 'Vue.js', icon: '💚' }, { name: 'Nuxt.js', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' }, { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Figma', icon: '🎭' }, { name: 'Git', icon: '🐙' },
  { name: 'JavaScript', icon: '🟡' }, { name: 'HTML5', icon: '🌐' },
  { name: 'Adobe Suite', icon: '🖌️' }, { name: 'SQLite', icon: '🗄️' },
  { name: 'REST APIs', icon: '🔌' }, { name: 'SEO', icon: '🔍' },
]

const filteredSkills = computed(() =>
  activeCategory.value === 'all' ? skills : skills.filter(s => s.category === activeCategory.value)
)

onMounted(() => {
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach((bar) => {
      const el = bar as HTMLElement
      el.style.width = `${el.dataset.width}%`
    })
  }, 500)
})

watch(filteredSkills, () => {
  nextTick(() => {
    document.querySelectorAll('.skill-bar-fill').forEach((el: Element) => {
      const bar = el as HTMLElement
      bar.style.width = '0%'
      setTimeout(() => { bar.style.width = `${bar.dataset.width}%` }, 80)
    })
  })
})
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <UContainer>
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
        <div>
          <p class="text-violet-400 font-mono text-xs mb-2">// what I work with</p>
          <h2 class="font-display font-black text-4xl md:text-5xl text-white">
            Skills<span class="gradient-text">.</span>
          </h2>
        </div>
        <div class="flex flex-wrap gap-2">
          <button v-for="cat in categories" :key="cat.id"
            class="px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300"
            :class="activeCategory === cat.id ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20' : 'card-surface text-stone-500 hover:text-stone-300'"
            @click="activeCategory = cat.id">
            {{ cat.label }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-16">
        <div v-for="(skill, i) in filteredSkills" :key="skill.name"
          class="card-surface rounded-2xl p-4 group transition-all duration-300 hover:border-violet-500/20 skill-card"
          :style="{ animationDelay: `${i * 0.04}s` }">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
            :style="{ background: `${skill.color}15` }">
            <span class="text-xl leading-none">{{ skill.icon }}</span>
          </div>
          <p class="text-stone-200 text-sm font-medium leading-tight mb-1">{{ skill.name }}</p>
          <p class="text-xs font-mono" :style="{ color: skill.color }">{{ skill.label }}</p>
          <div class="mt-3 h-0.5 rounded-full w-full overflow-hidden bg-stone-800">
            <div class="skill-bar-fill h-full rounded-full" :data-width="skill.level"
              :style="{ background: `linear-gradient(90deg, ${skill.color}, ${skill.colorEnd})` }" />
          </div>
        </div>
      </div>

      <div class="reveal overflow-hidden">
        <p class="text-stone-700 text-xs font-mono mb-5 text-center">// tools & technologies</p>
        <div class="relative">
          <div class="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style="background: linear-gradient(90deg, var(--bg), transparent)" />
          <div class="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style="background: linear-gradient(-90deg, var(--bg), transparent)" />
          <div class="flex animate-marquee gap-3 w-max">
            <div v-for="(tech, idx) in [...allTechs, ...allTechs]" :key="`${tech.name}-${idx}`"
              class="flex items-center gap-2 flex-shrink-0 px-4 py-2 rounded-full card-surface text-stone-500 hover:text-stone-300 transition-colors">
              <span class="text-sm leading-none">{{ tech.icon }}</span>
              <span class="text-xs font-mono whitespace-nowrap">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
