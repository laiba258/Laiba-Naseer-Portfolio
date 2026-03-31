<script setup lang="ts">
const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)
const isDark = ref(true)

const navLinks = [
  { to: '/', label: 'Home', icon: 'i-heroicons-home' },
  { to: '/about', label: 'About', icon: 'i-heroicons-user' },
  { to: '/projects', label: 'Projects', icon: 'i-heroicons-rectangle-stack' },
  { to: '/contact', label: 'Contact', icon: 'i-heroicons-chat-bubble-left-right' },
]

function isActive(path: string) {
  return route.path === path
}

function toggleMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('light-mode', !isDark.value)
}

onMounted(() => {
  const saved = localStorage.getItem('colorMode')
  if (saved === 'light') {
    isDark.value = false
    document.documentElement.classList.add('light-mode')
  }
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})

watch(isDark, val => localStorage.setItem('colorMode', val ? 'dark' : 'light'))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
    :class="scrolled ? 'header-scrolled py-3' : 'py-5'"
  >
    <UContainer>
      <nav class="flex items-center justify-between">
        <NuxtLink to="/" class="group flex items-center gap-2.5 flex-shrink-0">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white font-bold font-mono text-sm">
            LN
          </div>
          <span class="font-display font-bold text-base group-hover:text-violet-400 transition-colors"
            :class="isDark ? 'text-white' : 'text-stone-900'">
            Laiba<span class="text-violet-400">.</span>
          </span>
        </NuxtLink>

        <ul class="hidden md:flex items-center gap-7">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="nav-link text-sm font-medium transition-colors"
              :class="[isActive(link.to) ? 'active' : '', isDark ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-900']"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="flex items-center gap-2">
          <button
            class="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
            :class="isDark ? 'glass text-stone-400 hover:text-violet-400' : 'bg-stone-100 text-stone-600 hover:text-violet-600'"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleMode"
          >
            <UIcon :name="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'" class="w-4 h-4" />
          </button>

          <a
            href="mailto:laibanaseertts@gmail.com?subject=Hiring%20Inquiry%20from%20Portfolio&body=Hi%20Laiba%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20potential%20opportunity.%0A%0A"
            class="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            :class="isDark ? 'border border-violet-500/40 text-violet-300 hover:border-violet-400 hover:bg-violet-500/10' : 'border border-violet-400 text-violet-600 hover:bg-violet-50'"
          >
            <UIcon name="i-heroicons-envelope" class="w-3.5 h-3.5" />
            Hire Me
          </a>

          <button
            class="md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
            :class="isDark ? 'glass text-stone-400 hover:text-white' : 'bg-stone-100 text-stone-600'"
            @click="mobileOpen = !mobileOpen"
          >
            <UIcon :name="mobileOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-4 h-4" />
          </button>
        </div>
      </nav>
    </UContainer>

    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="md:hidden border-t mt-2"
        :class="isDark ? 'border-white/5' : 'border-stone-100'"
        :style="isDark
          ? 'background: rgba(12,10,9,0.92); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);'
          : 'background: rgba(255,255,255,0.92); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); box-shadow: 0 8px 32px rgba(0,0,0,0.08);'"
      >
        <UContainer>
          <ul class="py-4 flex flex-col gap-1">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
                :class="isDark ? 'text-stone-400 hover:text-white hover:bg-white/5' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'"
                @click="mobileOpen = false"
              >
                <UIcon :name="link.icon" class="w-4 h-4 text-violet-400" />
                {{ link.label }}
              </NuxtLink>
            </li>
            <li class="px-4 pt-2">
              <a
                href="mailto:laibanaseertts@gmail.com?subject=Hiring%20Inquiry%20from%20Portfolio&body=Hi%20Laiba%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20potential%20opportunity.%0A%0A"
                class="flex items-center gap-2 py-2 text-sm font-medium text-violet-400"
              >
                <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
                Hire Me
              </a>
            </li>
          </ul>
        </UContainer>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.header-scrolled {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
:global(.light-mode) .header-scrolled {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all 0.3s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
