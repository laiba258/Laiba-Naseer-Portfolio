<template>
  <section id="about" class="py-32 relative overflow-hidden">
    <!-- Background accent -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
      style="background: radial-gradient(circle, #06b6d4, transparent 70%); filter: blur(80px);" />

    <UContainer>
      <!-- Section header -->
      <div class="text-center mb-20 reveal">
        <p class="text-teal-400 font-mono text-sm mb-3">// get to know me</p>
        <h2 class="font-display font-black text-5xl md:text-6xl text-white mb-4">
          About <span class="gradient-text">Me</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto" />
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Visual card -->
        <div class="reveal-left">
          <div class="relative">
            <!-- Main card -->
            <div class="border-gradient rounded-3xl p-1">
              <div class="glass rounded-3xl p-8 space-y-6">
                <!-- Profile header -->
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-2xl font-black text-white font-display glow-teal flex-shrink-0">
                    LN
                  </div>
                  <div>
                    <h3 class="font-display font-bold text-xl text-white">Laiba Naseer</h3>
                    <p class="text-teal-400 text-sm">Frontend Dev & UI Designer</p>
                    <div class="flex items-center gap-1 mt-1">
                      <UIcon name="i-heroicons-map-pin" class="w-3 h-3 text-slate-500" />
                      <span class="text-slate-500 text-xs">Toba Tek Singh, Punjab, Pakistan</span>
                    </div>
                  </div>
                </div>

                <div class="h-px bg-gradient-to-r from-teal-500/20 to-transparent" />

                <!-- Info grid -->
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="info in infoItems" :key="info.label" class="glass rounded-xl p-3">
                    <div class="flex items-center gap-2 mb-1">
                      <UIcon :name="info.icon" class="w-3.5 h-3.5 text-teal-400" />
                      <span class="text-slate-500 text-xs">{{ info.label }}</span>
                    </div>
                    <p class="text-slate-200 text-sm font-medium">{{ info.value }}</p>
                  </div>
                </div>

                <div class="h-px bg-gradient-to-r from-teal-500/20 to-transparent" />

                <!-- Interests -->
                <div>
                  <p class="text-slate-500 text-xs mb-3 font-mono">// interests</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="interest in interests" :key="interest"
                      class="px-3 py-1 rounded-full glass-teal text-teal-400 text-xs font-medium">
                      {{ interest }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 glass-teal rounded-2xl p-3 animate-float">
              <UIcon name="i-heroicons-academic-cap" class="w-6 h-6 text-teal-400" />
            </div>
            <div class="absolute -bottom-4 -left-4 glass rounded-2xl p-3 animate-float-slow">
              <UIcon name="i-heroicons-code-bracket" class="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        </div>

        <!-- Right: Text content -->
        <div class="reveal-right space-y-8">
          <div class="space-y-4">
            <h3 class="font-display font-bold text-3xl text-white">
              Crafting Digital Experiences That
              <span class="gradient-text"> Leave an Impression</span>
            </h3>
            <p class="text-slate-400 leading-relaxed">
              I'm a passionate Frontend Developer and UI Designer based in Pakistan, specializing in the
              Vue.js and Nuxt.js ecosystem. With over 3 years of graphic design experience, I bridge the
              gap between stunning visuals and clean, performant code.
            </p>
            <p class="text-slate-400 leading-relaxed">
              Currently pursuing my BS in Computer Science at the University of Agriculture, Sub Campus
              Toba Tek Singh (8th semester), I combine academic knowledge with real-world freelance
              experience to deliver exceptional digital products.
            </p>
          </div>

          <!-- Education card -->
          <div class="glass rounded-2xl p-6 border-l-2 border-teal-500">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                <UIcon name="i-heroicons-academic-cap" class="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p class="text-teal-400 text-xs font-mono mb-1">// education</p>
                <h4 class="text-white font-semibold">BS Computer Science</h4>
                <p class="text-slate-400 text-sm">University of Agriculture, Sub Campus Toba Tek Singh</p>
                <p class="text-slate-500 text-xs mt-1">Currently enrolled · 8th Semester</p>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div class="space-y-3">
            <p class="text-slate-500 text-xs font-mono">// certifications</p>
            <div v-for="cert in certifications" :key="cert.title"
              class="flex items-center gap-3 glass rounded-xl p-4 card-hover">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <UIcon name="i-heroicons-check-badge" class="w-4 h-4 text-teal-400" />
              </div>
              <div>
                <p class="text-slate-200 text-sm font-medium">{{ cert.title }}</p>
                <p class="text-slate-500 text-xs">{{ cert.issuer }}</p>
              </div>
            </div>
          </div>

          <!-- Download CV button -->
          <a href="#" class="btn-magnetic inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-teal text-teal-400 font-medium hover:text-white hover:bg-teal-500/20 transition-all duration-300">
            <UIcon name="i-heroicons-arrow-down-tray" class="w-5 h-5" />
            Download Resume
          </a>
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
  { label: 'Availability', value: 'Open to Work', icon: 'i-heroicons-briefcase' },
]

const interests = [
  'Learning new tech', 'Web Dev tools', 'Creative Design',
  'Educational content', 'Open Source',
]

const certifications = [
  { title: 'Microsoft Certified: Azure AI Engineer Associate', issuer: 'Microsoft' },
  { title: 'Web Development 6-Month Course', issuer: 'Ecommerce by Experts, Toba' },
]
</script>
