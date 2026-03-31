<template>
  <div class="min-h-screen mesh-bg relative">
    <!-- Cursor glow -->
    <div
      ref="cursorGlow"
      class="pointer-events-none fixed z-50 w-72 h-72 rounded-full opacity-0 transition-opacity duration-500"
      style="background: radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%); transform: translate(-50%, -50%);"
    />

    <AppHeader />

    <main class="relative z-10">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const cursorGlow = ref<HTMLElement | null>(null)

onMounted(() => {
  const handleMouseMove = (e: MouseEvent) => {
    if (!cursorGlow.value) return
    cursorGlow.value.style.left = `${e.clientX}px`
    cursorGlow.value.style.top = `${e.clientY}px`
    cursorGlow.value.style.opacity = '1'
  }
  window.addEventListener('mousemove', handleMouseMove)

  // Intersection observer for reveal animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    observer.disconnect()
  })
})
</script>
