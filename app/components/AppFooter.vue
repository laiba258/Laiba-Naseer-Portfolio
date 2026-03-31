<template>
  <footer class="relative border-t border-white/5 py-14 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.06), transparent)" />

    <UContainer class="relative z-10">
      <div class="grid md:grid-cols-3 gap-10 mb-10">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
              LN
            </div>
            <span class="font-display font-bold text-white">Laiba<span class="text-violet-400">.</span></span>
          </div>
          <p class="text-stone-500 text-sm leading-relaxed max-w-xs">
            Frontend Developer & UI Designer crafting beautiful, performant web experiences.
          </p>
          <div class="flex gap-3">
            <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank"
              class="w-8 h-8 rounded-lg card-surface flex items-center justify-center text-stone-500 hover:text-violet-400 transition-colors">
              <UIcon :name="social.icon" class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <!-- Quick links -->
        <div>
          <p class="text-stone-500 text-xs font-mono mb-4">// navigation</p>
          <ul class="space-y-2.5">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink :to="link.to"
                class="text-stone-500 text-sm hover:text-violet-400 transition-colors flex items-center gap-2">
                <span class="w-1 h-1 rounded-full bg-violet-500/40" />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <p class="text-stone-500 text-xs font-mono mb-4">// contact</p>
          <div class="space-y-3">
            <a href="mailto:laibanaseertts@gmail.com"
              class="flex items-center gap-2 text-stone-500 text-sm hover:text-violet-400 transition-colors">
              <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-violet-500/50" />
              laibanaseertts@gmail.com
            </a>
            <a href="tel:+923457671494"
              class="flex items-center gap-2 text-stone-500 text-sm hover:text-violet-400 transition-colors">
              <UIcon name="i-heroicons-phone" class="w-4 h-4 text-violet-500/50" />
              +92 345 7671494
            </a>
            <div class="flex items-center gap-2 text-stone-500 text-sm">
              <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-violet-500/50" />
              Toba Tek Singh, Pakistan
            </div>
          </div>
        </div>
      </div>

      <div class="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mb-6" />

      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-stone-700 text-sm">
          © {{ new Date().getFullYear() }} Laiba Naseer · Built with Nuxt 4 & Tailwind CSS
        </p>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span class="text-stone-600 text-xs">Available for work</span>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { label: 'GitHub', href: 'https://github.com/laiba258', icon: 'i-simple-icons-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laiba-naseer-9564a1397', icon: 'i-simple-icons-linkedin' },
  { label: 'Email', href: 'mailto:laibanaseertts@gmail.com', icon: 'i-heroicons-envelope' },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]
</script>
