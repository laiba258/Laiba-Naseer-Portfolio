<template>
  <section class="py-16 relative overflow-hidden">
    <UContainer>
      <div class="mb-14 reveal">
        <p class="text-violet-400 font-mono text-xs mb-2">// get to know me</p>
        <h2 class="font-display font-black text-4xl md:text-5xl text-white">
          About<span class="gradient-text">.</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-14 items-start">
        <!-- Left: text -->
        <div class="reveal-left space-y-6">
          <p class="text-stone-300 text-lg leading-relaxed">
            I'm a Frontend Developer and UI Designer based in
            <span class="text-white font-medium">Toba Tek Singh, Pakistan</span>.
            I specialize in the Vue.js and Nuxt.js ecosystem, and I bring over
            <span class="text-violet-400 font-medium">3 years of graphic design experience</span>
            to every project I touch.
          </p>
          <p class="text-stone-400 leading-relaxed">
            I'm currently in my final year of a BS in Computer Science at the University of Agriculture,
            Sub Campus Toba Tek Singh. I love the intersection of design and engineering — where things
            look great and work even better.
          </p>
          <p class="text-stone-400 leading-relaxed">
            Most of my projects so far have been team learning projects while I was growing my skills.
            I'm now actively looking for freelance work and opportunities to build things independently.
          </p>

          <!-- Education -->
          <div class="card-surface p-5 rounded-2xl border-l-2 border-violet-500">
            <div class="flex items-start gap-4">
              <div class="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <UIcon name="i-heroicons-academic-cap" class="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm">BS Computer Science</h4>
                <p class="text-stone-400 text-sm">University of Agriculture, Sub Campus Toba Tek Singh</p>
                <p class="text-stone-600 text-xs mt-1">8th Semester · Graduating soon</p>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div class="space-y-3">
            <p class="text-stone-600 text-xs font-mono">// certifications</p>
            <div v-for="cert in certifications" :key="cert.title"
              class="flex items-center gap-3 card-surface p-4 rounded-xl">
              <UIcon name="i-heroicons-check-badge" class="w-5 h-5 text-violet-400 flex-shrink-0" />
              <div>
                <p class="text-stone-200 text-sm font-medium">{{ cert.title }}</p>
                <p class="text-stone-500 text-xs">{{ cert.issuer }}</p>
              </div>
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            download="Laiba_Naseer_Resume.pdf"
            class="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
          >
            <UIcon name="i-heroicons-arrow-down-tray" class="w-4 h-4" />
            Download Resume
          </a>
        </div>

        <!-- Right: info card -->
        <div class="reveal-right">
          <div class="card-surface rounded-2xl p-6 space-y-5">
            <!-- Profile -->
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-xl font-black text-white font-display flex-shrink-0">
                LN
              </div>
              <div>
                <h3 class="font-display font-bold text-white">Laiba Naseer</h3>
                <p class="text-violet-400 text-sm">Frontend Dev & UI Designer</p>
                <div class="flex items-center gap-1 mt-0.5">
                  <UIcon name="i-heroicons-map-pin" class="w-3 h-3 text-stone-600" />
                  <span class="text-stone-600 text-xs">Toba Tek Singh, Pakistan</span>
                </div>
              </div>
            </div>

            <div class="h-px bg-white/5" />

            <!-- Info grid -->
            <div class="grid grid-cols-2 gap-3">
              <div v-for="info in infoItems" :key="info.label" class="card-surface-light rounded-xl p-3">
                <div class="flex items-center gap-1.5 mb-1">
                  <UIcon :name="info.icon" class="w-3 h-3 text-violet-400" />
                  <span class="text-stone-600 text-xs">{{ info.label }}</span>
                </div>
                <p class="text-stone-200 text-sm font-medium truncate">{{ info.value }}</p>
              </div>
            </div>

            <div class="h-px bg-white/5" />

            <!-- Interests -->
            <div>
              <p class="text-stone-600 text-xs font-mono mb-3">// interests</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="interest in interests" :key="interest" class="tag">{{ interest }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const infoItems = [
  { label: 'Email', value: 'laibanaseertts@gmail.com', icon: 'i-heroicons-envelope' },
  { label: 'Phone', value: '+92 345 7671494', icon: 'i-heroicons-phone' },
  { label: 'Location', value: 'Toba Tek Singh, PK', icon: 'i-heroicons-map-pin' },
  { label: 'Status', value: 'Open to Work', icon: 'i-heroicons-briefcase' },
]

const interests = ['Vue.js', 'UI Design', 'Figma', 'Open Source', 'Learning']

const certifications = [
  { title: 'Microsoft Azure AI Engineer Associate', issuer: 'Microsoft' },
  { title: 'Web Development (6-Month Course)', issuer: 'Ecommerce by Experts, Toba' },
]
</script>
