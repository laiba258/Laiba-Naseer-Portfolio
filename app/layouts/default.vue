<template>
  <div class="min-h-screen mesh-bg relative">
    <!-- Particle canvas -->
    <canvas ref="particleCanvas" class="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50" />

    <!-- Cursor glow -->
    <div
      ref="cursorGlow"
      class="pointer-events-none fixed z-50 w-80 h-80 rounded-full opacity-0 transition-opacity duration-300"
      style="background: radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%); transform: translate(-50%, -50%);"
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
const particleCanvas = ref<HTMLCanvasElement | null>(null)
const route = useRoute()

let observer: IntersectionObserver | null = null

function initRevealObserver() {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )
  // Small delay to let the new page DOM render
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      el.classList.remove('visible')
      observer?.observe(el)
    })
  }, 50)
}

// Re-run observer on every route change
watch(() => route.path, () => {
  nextTick(() => initRevealObserver())
})

onMounted(() => {
  // Cursor glow
  const handleMouseMove = (e: MouseEvent) => {
    if (!cursorGlow.value) return
    cursorGlow.value.style.left = `${e.clientX}px`
    cursorGlow.value.style.top = `${e.clientY}px`
    cursorGlow.value.style.opacity = '1'
  }
  window.addEventListener('mousemove', handleMouseMove)

  // Particles
  initParticles()

  // Initial reveal
  nextTick(() => initRevealObserver())

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    observer?.disconnect()
  })
})

function initParticles() {
  const canvas = particleCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')!

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles: Array<{
    x: number; y: number; vx: number; vy: number
    size: number; opacity: number; color: string
  }> = []

  const colors = ['rgba(124,58,237,', 'rgba(244,114,182,', 'rgba(167,139,250,']

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.4 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    })
  }

  let animId: number
  function animate() {
    ctx.clearRect(0, 0, canvas!.width, canvas!.height)
    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0) p.x = canvas!.width
      if (p.x > canvas!.width) p.x = 0
      if (p.y < 0) p.y = canvas!.height
      if (p.y > canvas!.height) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `${p.color}${p.opacity})`
      ctx.fill()
    })

    // Connections
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach((p2) => {
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 110) {
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(124,58,237,${0.07 * (1 - dist / 110)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })
    })

    animId = requestAnimationFrame(animate)
  }
  animate()

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}
</script>
