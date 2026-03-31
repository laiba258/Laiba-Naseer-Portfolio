<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
    :class="scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'"
  >
    <UContainer>
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="group flex items-center gap-2">
          <div class="relative w-9 h-9">
            <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
            <span class="relative z-10 flex items-center justify-center w-full h-full text-white font-bold font-mono text-sm">LN</span>
          </div>
          <span class="font-display font-bold text-lg text-white group-hover:text-teal-400 transition-colors">
            Laiba<span class="text-teal-400">.</span>
          </span>
        </NuxtLink>

        <!-- Desktop nav -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors"
              :class="{ active: activeSection === link.section }"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- CTA + Mobile toggle -->
        <div class="flex items-center gap-3">
          <a
            href="mailto:laibanaseertts@gmail.com"
            class="hidden md:flex btn-magnetic items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white border border-teal-500/40 hover:border-teal-400 hover:bg-teal-500/10 transition-all duration-300"
          >
            <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-teal-400" />
            Hire Me
          </a>

          <!-- Mobile menu button -->
          <button
            class="md:hidden p-2 rounded-lg glass text-slate-400 hover:text-white transition-colors"
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
                class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                @click="mobileOpen = false"
              >
                <UIcon :name="link.icon" class="w-4 h-4 text-teal-400" />
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
const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('home')

const navLinks = [
  { to: '/#home', label: 'Home', section: 'home', icon: 'i-heroicons-home' },
  { to: '/#about', label: 'About', section: 'about', icon: 'i-heroicons-user' },
  { to: '/#skills', label: 'Skills', section: 'skills', icon: 'i-heroicons-code-bracket' },
  { to: '/#projects', label: 'Projects', section: 'projects', icon: 'i-heroicons-rectangle-stack' },
  { to: '/#experience', label: 'Experience', section: 'experience', icon: 'i-heroicons-briefcase' },
  { to: '/#contact', label: 'Contact', section: 'contact', icon: 'i-heroicons-chat-bubble-left-right' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20

    // Active section detection
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
    for (const id of sections.reverse()) {
      const el = document.getElementById(id)
      if (el && window.scrollY >= el.offsetTop - 100) {
        activeSection.value = id
        break
      }
    }
  })
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
