<template>
  <section id="skills" class="py-32 relative overflow-hidden">
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
      style="background: radial-gradient(circle, #0d9488, transparent 70%); filter: blur(80px);" />

    <UContainer>
      <div class="text-center mb-20 reveal">
        <p class="text-teal-400 font-mono text-sm mb-3">// what I work with</p>
        <h2 class="font-display font-black text-5xl md:text-6xl text-white mb-4">
          My <span class="gradient-text">Skills</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto" />
      </div>

      <!-- Skill categories tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 reveal">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
          :class="activeCategory === cat.id
            ? 'bg-gradient-to-r from-teal-600 to-cyan-500 text-white shadow-lg shadow-teal-500/25'
            : 'glass text-slate-400 hover:text-white hover:border-teal-500/30'"
          @click="activeCategory = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills grid -->
      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <div
          v-for="(skill, i) in filteredSkills"
          :key="skill.name"
          class="glass rounded-2xl p-5 card-hover reveal"
          :style="{ animationDelay: `${i * 0.05}s` }"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                :style="{ background: `${skill.color}15` }">
                <span>{{ skill.emoji }}</span>
              </div>
              <span class="text-slate-200 font-medium">{{ skill.name }}</span>
            </div>
            <span class="text-teal-400 font-mono text-sm font-bold">{{ skill.level }}%</span>
          </div>
          <div class="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              class="skill-bar-fill"
              :data-width="skill.level"
              :style="{ background: `linear-gradient(90deg, ${skill.color}, ${skill.colorEnd})` }"
            />
          </div>
        </div>
      </div>

      <!-- Tech stack marquee -->
      <div class="reveal overflow-hidden">
        <p class="text-center text-slate-600 text-xs font-mono mb-6">// tech stack & tools</p>
        <div class="relative">
          <div class="absolute left-0 top-0 bottom-0 w-20 z-10"
            style="background: linear-gradient(90deg, #030712, transparent)" />
          <div class="absolute right-0 top-0 bottom-0 w-20 z-10"
            style="background: linear-gradient(-90deg, #030712, transparent)" />
          <div class="flex animate-marquee gap-4 w-max">
            <div v-for="tech in [...allTechs, ...allTechs]" :key="`${tech.name}-${Math.random()}`"
              class="flex items-center gap-2 glass rounded-xl px-4 py-2.5 flex-shrink-0">
              <span class="text-lg">{{ tech.emoji }}</span>
              <span class="text-slate-400 text-sm font-medium whitespace-nowrap">{{ tech.name }}</span>
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
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & Tools' },
  { id: 'design', label: 'Design' },
]

const skills = [
  { name: 'Vue.js (2 & 3)', level: 95, category: 'frontend', emoji: '💚', color: '#42b883', colorEnd: '#35495e' },
  { name: 'Nuxt.js (2 & 3)', level: 93, category: 'frontend', emoji: '⚡', color: '#00dc82', colorEnd: '#0d9488' },
  { name: 'TypeScript', level: 85, category: 'frontend', emoji: '🔷', color: '#3178c6', colorEnd: '#06b6d4' },
  { name: 'Tailwind CSS', level: 97, category: 'frontend', emoji: '🎨', color: '#06b6d4', colorEnd: '#0d9488' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'frontend', emoji: '🟡', color: '#f7df1e', colorEnd: '#f59e0b' },
  { name: 'HTML5 & CSS3', level: 98, category: 'frontend', emoji: '🌐', color: '#e34f26', colorEnd: '#f06529' },
  { name: 'Nuxt UI / Nuxt Hub', level: 88, category: 'backend', emoji: '🧩', color: '#0d9488', colorEnd: '#06b6d4' },
  { name: 'RESTful APIs', level: 80, category: 'backend', emoji: '🔌', color: '#8b5cf6', colorEnd: '#a78bfa' },
  { name: 'Git & GitHub', level: 88, category: 'backend', emoji: '🐙', color: '#f97316', colorEnd: '#fb923c' },
  { name: 'SQLite', level: 72, category: 'backend', emoji: '🗄️', color: '#0ea5e9', colorEnd: '#38bdf8' },
  { name: 'UI/UX Design', level: 90, category: 'design', emoji: '✏️', color: '#ec4899', colorEnd: '#f472b6' },
  { name: 'Figma', level: 85, category: 'design', emoji: '🎭', color: '#a259ff', colorEnd: '#c084fc' },
  { name: 'Adobe Suite', level: 80, category: 'design', emoji: '🖌️', color: '#ff0000', colorEnd: '#ff6b6b' },
  { name: 'Graphic Design', level: 92, category: 'design', emoji: '🎨', color: '#f59e0b', colorEnd: '#fbbf24' },
  { name: 'SEO Optimization', level: 78, category: 'backend', emoji: '🔍', color: '#10b981', colorEnd: '#34d399' },
  { name: 'Meta Ads', level: 75, category: 'backend', emoji: '📢', color: '#1877f2', colorEnd: '#60a5fa' },
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

// Animate skill bars when visible
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-bar-fill')
        bars.forEach((bar) => {
          const el = bar as HTMLElement
          const width = el.dataset.width
          setTimeout(() => { el.style.width = `${width}%` }, 200)
        })
      }
    })
  }, { threshold: 0.2 })

  const section = document.getElementById('skills')
  if (section) observer.observe(section)
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
