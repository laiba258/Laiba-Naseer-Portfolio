<template>
  <footer class="border-t border-white/5 py-10">
    <UContainer>
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Brand -->
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
            LN
          </div>
          <span class="font-display font-bold text-white">Laiba<span class="text-violet-400">.</span></span>
        </div>

        <!-- Nav -->
        <div class="flex items-center gap-6">
          <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
            class="text-stone-600 text-sm hover:text-violet-400 transition-colors">
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Socials -->
        <div class="flex items-center gap-3">
          <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank"
            class="w-8 h-8 rounded-lg card-surface flex items-center justify-center text-stone-600 hover:text-violet-400 transition-colors">
            <UIcon :name="social.icon" class="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div class="h-px bg-white/5 my-6" />

      <div class="flex flex-col md:flex-row items-center justify-between gap-3">
        <p class="text-stone-700 text-xs">
          © {{ new Date().getFullYear() }} Laiba Naseer · Built with Nuxt 4 & Tailwind CSS
        </p>
        <div class="flex items-center gap-2">
          <div class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span class="text-stone-700 text-xs">Available for work</span>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'i-simple-icons-github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-simple-icons-linkedin' },
  { label: 'Email', href: 'mailto:laibanaseertts@gmail.com', icon: 'i-heroicons-envelope' },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]
</script>
