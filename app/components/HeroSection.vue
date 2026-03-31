<template>
  <section id="home" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <!-- Animated orbs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-pulse-glow"
      style="background: radial-gradient(circle, #0d9488, transparent 70%); filter: blur(60px);" />
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 animate-pulse-glow"
      style="background: radial-gradient(circle, #06b6d4, transparent 70%); filter: blur(60px); animation-delay: 1.5s;" />
    <div class="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-6"
      style="background: radial-gradient(circle, #818cf8, transparent 70%); filter: blur(80px);" />

    <UContainer class="relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

        <!-- Left: Text content -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="animate-slide-right opacity-0" style="animation-fill-mode: forwards;">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-teal text-teal-400 text-sm font-medium">
              <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Available for freelance work
            </span>
          </div>

          <!-- Name -->
          <div class="animate-slide-right opacity-0 delay-100" style="animation-fill-mode: forwards;">
            <p class="text-slate-400 text-lg font-mono mb-2">
              <span class="text-teal-400">const</span> developer = {
            </p>
            <h1 class="font-display font-black leading-none">
              <span class="block text-6xl md:text-7xl lg:text-8xl text-white">Laiba</span>
              <span class="block text-6xl md:text-7xl lg:text-8xl gradient-text">Naseer</span>
            </h1>
            <p class="text-slate-400 text-lg font-mono mt-2">}</p>
          </div>

          <!-- Typing role -->
          <div class="animate-slide-right opacity-0 delay-200" style="animation-fill-mode: forwards;">
            <div class="flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full" />
              <div class="text-xl md:text-2xl font-display font-semibold text-slate-200">
                <span>{{ displayedRole }}</span>
                <span class="cursor-blink text-teal-400">|</span>
              </div>
            </div>
          </div>

          <!-- Description -->
          <p class="animate-slide-right opacity-0 delay-300 text-slate-400 text-lg leading-relaxed max-w-lg" style="animation-fill-mode: forwards;">
            High-performance Frontend Developer specializing in the
            <span class="text-teal-400 font-medium">Vue.js & Nuxt.js</span> ecosystem with
            <span class="text-cyan-400 font-medium">3+ years</span> of graphic design experience.
            Bridging the gap between high-fidelity design and clean, maintainable code.
          </p>

          <!-- Stats -->
          <div class="animate-slide-right opacity-0 delay-400 grid grid-cols-3 gap-4" style="animation-fill-mode: forwards;">
            <div v-for="stat in stats" :key="stat.label" class="glass rounded-2xl p-4 text-center card-hover">
              <div class="text-2xl font-display font-black gradient-text-teal">{{ stat.value }}</div>
              <div class="text-xs text-slate-500 mt-1">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA buttons -->
          <div class="animate-slide-right opacity-0 delay-500 flex flex-wrap gap-4" style="animation-fill-mode: forwards;">
            <a href="#projects" class="btn-magnetic group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-500" />
              <div class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span class="relative flex items-center gap-2">
                View My Work
                <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#contact" class="btn-magnetic group px-8 py-4 rounded-2xl font-semibold text-teal-400 border border-teal-500/40 hover:border-teal-400 hover:bg-teal-500/10 transition-all duration-300 flex items-center gap-2">
              Let's Talk
              <UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4" />
            </a>
          </div>

          <!-- Social links -->
          <div class="animate-slide-right opacity-0 delay-600 flex items-center gap-4" style="animation-fill-mode: forwards;">
            <span class="text-slate-600 text-sm">Find me on</span>
            <div class="flex gap-3">
              <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank"
                class="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/40 transition-all duration-300 card-hover">
                <UIcon :name="social.icon" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Visual -->
        <div class="relative flex items-center justify-center animate-fade-in opacity-0 delay-300" style="animation-fill-mode: forwards;">
          <!-- Rotating rings -->
          <div class="absolute w-80 h-80 rounded-full border border-teal-500/10 animate-spin" style="animation-duration: 20s;" />
          <div class="absolute w-96 h-96 rounded-full border border-cyan-500/5 animate-spin" style="animation-duration: 30s; animation-direction: reverse;" />
          <div class="absolute w-64 h-64 rounded-full border border-teal-400/15 animate-spin" style="animation-duration: 15s;" />

          <!-- Orbiting tech icons -->
          <div class="absolute w-72 h-72">
            <div v-for="(tech, i) in orbitTechs" :key="tech.name"
              class="absolute w-10 h-10 rounded-xl glass-teal flex items-center justify-center text-xs font-bold text-teal-400"
              :style="getOrbitStyle(i, orbitTechs.length)">
              {{ tech.short }}
            </div>
          </div>

          <!-- Center avatar placeholder -->
          <div class="relative z-10 animate-float">
            <div class="border-gradient p-1 rounded-3xl">
              <div class="w-64 h-64 rounded-3xl overflow-hidden glass flex items-center justify-center">
                <!-- Avatar placeholder with initials -->
                <div class="w-full h-full bg-gradient-to-br from-teal-900/50 to-cyan-900/30 flex flex-col items-center justify-center gap-4">
                  <div class="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-4xl font-black text-white font-display glow-teal">
                    LN
                  </div>
                  <div class="text-center">
                    <p class="text-white font-semibold">Laiba Naseer</p>
                    <p class="text-teal-400 text-sm">Frontend Dev & UI Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Glow under avatar -->
            <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-teal-500/20 blur-xl rounded-full" />
          </div>

          <!-- Floating badges -->
          <div class="absolute top-8 right-4 glass-teal rounded-2xl px-4 py-3 animate-float-slow">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span class="text-xs text-slate-300 font-medium">Open to work</span>
            </div>
          </div>
          <div class="absolute bottom-12 left-0 glass rounded-2xl px-4 py-3 animate-float-fast">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-star-solid" class="w-4 h-4 text-yellow-400" />
              <span class="text-xs text-slate-300 font-medium">Microsoft Certified</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span class="text-xs text-slate-600 font-mono">scroll</span>
        <div class="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1">
          <div class="w-1 h-2 rounded-full bg-teal-400 animate-bounce" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const roles = [
  'Frontend Developer',
  'Vue.js Specialist',
  'Nuxt.js Expert',
  'UI/UX Designer',
  'Graphic Designer',
]

const displayedRole = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false

function typeRole() {
  const current = roles[roleIndex]
  if (!isDeleting) {
    displayedRole.value = current.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      isDeleting = true
      setTimeout(typeRole, 2000)
      return
    }
  } else {
    displayedRole.value = current.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }
  setTimeout(typeRole, isDeleting ? 60 : 100)
}

onMounted(() => typeRole())

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Done' },
  { value: '10+', label: 'Happy Clients' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'i-simple-icons-github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-simple-icons-linkedin' },
  { label: 'Email', href: 'mailto:laibanaseertts@gmail.com', icon: 'i-heroicons-envelope' },
]

const orbitTechs = [
  { name: 'Vue', short: 'Vue' },
  { name: 'Nuxt', short: 'Nuxt' },
  { name: 'TS', short: 'TS' },
  { name: 'Tailwind', short: 'TW' },
  { name: 'Figma', short: 'Fig' },
  { name: 'Git', short: 'Git' },
]

function getOrbitStyle(index: number, total: number) {
  const angle = (index / total) * 360
  const rad = (angle * Math.PI) / 180
  const radius = 140
  const x = Math.cos(rad) * radius + 136 - 20
  const y = Math.sin(rad) * radius + 136 - 20
  return {
    left: `${x}px`,
    top: `${y}px`,
    animationDelay: `${index * 0.5}s`,
  }
}
</script>
