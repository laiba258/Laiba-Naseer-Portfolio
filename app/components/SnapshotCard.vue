<script setup lang="ts">
import type { TeamSnapshot } from '~/data/projects'
defineProps<{ snap: TeamSnapshot }>()
</script>

<template>
  <div class="flex-shrink-0 card-surface rounded-2xl overflow-hidden group cursor-default" style="width: 260px;">
    <div class="relative overflow-hidden bg-stone-900" style="height: 160px;">
      <img :src="snap.image" :alt="snap.title"
        class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
    </div>
    <div class="p-4">
      <p class="text-white text-sm font-semibold mb-1 leading-tight">{{ snap.title }}</p>
      <p class="text-stone-500 text-xs leading-relaxed mb-3 line-clamp-2">{{ snap.description }}</p>
      <div class="flex flex-wrap gap-1">
        <span v-for="tech in snap.stack.slice(0, 3)" :key="tech"
          class="text-xs px-2 py-0.5 rounded-full font-mono"
          :style="{ background: `${snap.color}15`, color: snap.color, border: `1px solid ${snap.color}25` }">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
