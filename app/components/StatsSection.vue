<template>
  <section class="py-16 relative overflow-hidden">
    <div class="absolute inset-0 glass border-y border-white/5" />
    <UContainer class="relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="text-center reveal"
          :style="{ animationDelay: `${i * 0.1}s` }"
        >
          <div class="relative inline-block mb-2">
            <span class="font-display font-black text-5xl gradient-text-teal">{{ stat.value }}</span>
            <span class="text-teal-400 font-bold text-2xl">{{ stat.suffix }}</span>
          </div>
          <p class="text-slate-500 text-sm">{{ stat.label }}</p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '3', suffix: '+', label: 'Years of Experience' },
  { value: '20', suffix: '+', label: 'Projects Completed' },
  { value: '10', suffix: '+', label: 'Happy Clients' },
  { value: '2', suffix: '', label: 'Certifications' },
]
</script>
