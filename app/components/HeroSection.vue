<script setup lang="ts">
const facts = [
  { value: '3+', label: 'Years design' },
  { value: '2', label: 'Certs' },
  { value: 'Vue', label: 'Stack' },
  { value: 'PK', label: 'Pakistan' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/laiba258', icon: 'i-simple-icons-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laiba-naseer-9564a1397', icon: 'i-simple-icons-linkedin' },
  { label: 'Email', href: 'mailto:laibanaseertts@gmail.com', icon: 'i-heroicons-envelope' },
]

const orbitTechs = [
  { name: 'Vue', short: 'Vue' },
  { name: 'Nuxt', short: 'Nuxt' },
  { name: 'TypeScript', short: 'TS' },
  { name: 'Tailwind', short: 'TW' },
  { name: 'Figma', short: 'Fig' },
  { name: 'Git', short: 'Git' },
]

function getOrbitStyle(index: number, total: number) {
  const angle = (index / total) * 360
  const rad = (angle * Math.PI) / 180
  const radius = 138
  const x = Math.cos(rad) * radius + 136 - 24
  const y = Math.sin(rad) * radius + 136 - 14
  return { left: `${x}px`, top: `${y}px` }
}
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    <div class="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 animate-pulse-glow pointer-events-none"
      style="background: radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%); filter: blur(80px); transform: translate(-30%, -30%);" />
    <div class="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15 animate-pulse-glow pointer-events-none"
      style="background: radial-gradient(circle, rgba(244,114,182,0.3), transparent 70%); filter: blur(80px); transform: translate(30%, 30%); animation-delay: 2s;" />

    <UContainer class="relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[80vh]">

        <div class="order-2 lg:order-1">
          <div class="animate-slide-up opacity-0 mb-6" style="animation-fill-mode: forwards;">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-purple text-violet-300 text-xs font-mono">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </span>
          </div>

          <div class="animate-slide-up opacity-0 delay-100 mb-5" style="animation-fill-mode: forwards;">
            <h1 class="font-display font-black leading-[1.05] tracking-tight">
              <span class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">Laiba Naseer</span>
              <span class="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl gradient-text mt-1">Frontend Dev</span>
              <span class="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-500 mt-1">& UI Designer</span>
            </h1>
          </div>

          <p class="animate-slide-up opacity-0 delay-200 text-stone-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg mb-8" style="animation-fill-mode: forwards;">
            I build fast, beautiful web experiences with
            <span class="text-violet-400 font-medium">Vue.js & Nuxt.js</span> —
            and bring a designer's eye to every pixel. Final year
            <span class="text-stone-300 font-medium">CS student</span> based in Pakistan.
          </p>

          <div class="animate-slide-up opacity-0 delay-300 flex flex-wrap items-center gap-3 mb-8" style="animation-fill-mode: forwards;">
            <NuxtLink to="/projects" class="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm">
              See My Work
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm">
              Let's Talk
            </NuxtLink>
          </div>

          <div class="animate-slide-up opacity-0 delay-400" style="animation-fill-mode: forwards;">
            <div class="flex items-center gap-3 mb-5">
              <span class="text-stone-600 text-xs">Find me on</span>
              <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank" rel="noopener"
                class="w-8 h-8 rounded-xl glass flex items-center justify-center text-stone-500 hover:text-violet-400 transition-colors">
                <UIcon :name="social.icon" class="w-3.5 h-3.5" />
              </a>
            </div>
            <div class="grid grid-cols-4 gap-2 max-w-xs">
              <div v-for="fact in facts" :key="fact.label" class="card-surface p-3 rounded-xl text-center">
                <div class="text-base font-display font-black text-white mb-0.5">{{ fact.value }}</div>
                <div class="text-[10px] text-stone-500 leading-tight">{{ fact.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex items-center justify-center">
          <div class="lg:hidden animate-fade-in opacity-0 delay-200" style="animation-fill-mode: forwards;">
            <div class="flex flex-col items-center gap-4">
              <div class="w-28 h-28 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-4xl font-black text-white font-display glow-purple">
                LN
              </div>
              <div class="text-center">
                <p class="text-white font-semibold text-sm">Laiba Naseer</p>
                <p class="text-violet-400 text-xs mt-0.5">Frontend Dev & UI Designer</p>
                <div class="flex items-center justify-center gap-1.5 mt-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span class="text-stone-500 text-xs">Open to work</span>
                </div>
              </div>
              <div class="flex flex-wrap justify-center gap-2 max-w-xs">
                <span v-for="tech in orbitTechs" :key="tech.name"
                  class="px-3 py-1 rounded-xl glass-purple text-xs font-bold text-violet-300 font-mono">
                  {{ tech.short }}
                </span>
              </div>
            </div>
          </div>

          <div class="hidden lg:flex relative items-center justify-center w-full h-[480px] animate-fade-in opacity-0 delay-300" style="animation-fill-mode: forwards;">
            <div class="absolute w-72 h-72 rounded-full border border-violet-500/10 animate-spin" style="animation-duration: 22s;" />
            <div class="absolute w-96 h-96 rounded-full border border-pink-500/5 animate-spin" style="animation-duration: 35s; animation-direction: reverse;" />
            <div class="absolute w-56 h-56 rounded-full border border-violet-400/15 animate-spin" style="animation-duration: 14s;" />

            <div class="absolute w-72 h-72">
              <div v-for="(tech, i) in orbitTechs" :key="tech.name"
                class="absolute px-3 py-1.5 rounded-xl glass-purple text-xs font-bold text-violet-300 font-mono"
                :style="getOrbitStyle(i, orbitTechs.length)">
                {{ tech.short }}
              </div>
            </div>

            <div class="relative z-10 animate-float">
              <div class="w-44 h-44 rounded-full" style="border: 1px solid rgba(124,58,237,0.35); box-shadow: 0 0 40px rgba(124,58,237,0.15), inset 0 0 30px rgba(124,58,237,0.04);">
                <div class="w-full h-full rounded-full flex flex-col items-center justify-center gap-2">
                  <div class="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-xl font-black text-white font-display glow-purple">
                    LN
                  </div>
                  <div class="text-center px-2">
                    <p class="text-white font-semibold text-xs">Laiba Naseer</p>
                    <p class="text-violet-400 text-[10px] mt-0.5">Frontend Dev & UI Designer</p>
                  </div>
                </div>
              </div>
              <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-5 bg-violet-500/15 blur-xl rounded-full" />
            </div>

            <div class="absolute top-10 right-8 glass-purple rounded-2xl px-3 py-2 animate-float-slow">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span class="text-xs text-stone-300 font-medium">Open to work</span>
              </div>
            </div>
            <div class="absolute bottom-16 left-8 glass rounded-2xl px-3 py-2 animate-float">
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-badge" class="w-4 h-4 text-violet-400" />
                <span class="text-xs text-stone-300 font-medium">MS Certified</span>
              </div>
            </div>
            <div class="absolute top-1/2 right-4 glass rounded-xl px-3 py-2 animate-float-slow" style="animation-delay: 1s;">
              <div class="flex items-center gap-1.5">
                <span class="text-sm">💚</span>
                <span class="text-xs text-stone-300 font-mono">Vue.js</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30">
        <span class="text-xs text-stone-600 font-mono">scroll</span>
        <div class="w-5 h-8 rounded-full border border-stone-700 flex items-start justify-center p-1">
          <div class="w-1 h-2 rounded-full bg-violet-400 animate-bounce" />
        </div>
      </div>
    </UContainer>
  </section>
</template>
