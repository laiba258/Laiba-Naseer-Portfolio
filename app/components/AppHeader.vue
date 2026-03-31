<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
    :class="scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'"
  >
    <UContainer>
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="group flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg border-glow bg-[#0c0a09] flex items-center justify-center text-white font-bold font-mono text-sm">
            LN
          </div>
          <span class="font-display font-bold text-base text-white group-hover:text-violet-400 transition-colors">
            Laiba<span class="text-violet-400">.</span>
          </span>
        </NuxtLink>

        <!-- Desktop nav -->
        <ul class="hidden md:flex items-center gap-7">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="nav-link text-sm font-medium text-stone-400 hover:text-white transition-colors"
              :class="{ active: isActive(link.to) }"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- CTA + Mobile toggle -->
        <div class="flex items-center gap-3">
          <a
            href="mailto:laibanaseertts@gmail.com"
            class="hidden md:flex btn-outline items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
          >
            <UIcon name="i-heroicons-envelope" class="w-3.5 h-3.5" />
            Hire Me
          </a>
          <button
            class="md:hidden p-2 rounded-lg glass text-stone-400 hover:text-white transition-colors"
            @click="mobileOpen = !mobileOpen"
          >
            <UIcon :name="mobileOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-5 h-5" />
          </button>
        </div>
      </nav>
    </UContainer>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="md:hidden glass border-t border-white/5 mt-2">
        <UContainer>
          <ul class="py-4 flex flex-col gap-1">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-400 hover:text-white hover:bg-white/5 transition-all"
                @click="mobileOpen = false"
              >
                <UIcon :name="link.icon" class="w-4 h-4 text-violet-400" />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </UContainer>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home', icon: 'i-heroicons-home' },
  { to: '/about', label: 'About', icon: 'i-heroicons-user' },
  { to: '/projects', label: 'Projects', icon: 'i-heroicons-rectangle-stack' },
  { to: '/contact', label: 'Contact', icon: 'i-heroicons-chat-bubble-left-right' },
]

function isActive(path: string) {
  return route.path === path
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all 0.3s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
