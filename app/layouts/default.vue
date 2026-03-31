<template>
  <div class="min-h-screen mesh-bg relative">
    <!-- Particle canvas -->
    <canvas id="particles-canvas" />

    <!-- Cursor glow follower -->
    <div
      ref="cursorGlow"
      class="pointer-events-none fixed z-50 w-80 h-80 rounded-full opacity-0 transition-opacity duration-300"
      style="background: radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%); transform: translate(-50%, -50%);"
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

function initParticles() {
  const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement
  if (!canvas) return
  const ctx = canvas.getContext('2d')!

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles: Array<{
    x: number; y: number; vx: number; vy: number
    size: number; opacity: number; color: string
  }> = []

  const colors = ['rgba(13,148,136,', 'rgba(6,182,212,', 'rgba(129,140,248,']

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    })
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0) p.x = canvas.width
      if (p.x > canvas.width) p.x = 0
      if (p.y < 0) p.y = canvas.height
      if (p.y > canvas.height) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `${p.color}${p.opacity})`
      ctx.fill()
    })

    // Draw connections
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach((p2) => {
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(13,148,136,${0.08 * (1 - dist / 120)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })
    })

    requestAnimationFrame(animate)
  }
  animate()

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}
</script>
