<script setup lang="ts">
import { useFrameworkTheme } from '~/composables/useFrameworkTheme'

const { activeFramework, activeMeta, frameworks, setFramework } = useFrameworkTheme()
</script>

<template>
  <div
    class="page"
    :style="{ '--accent': activeMeta.color, '--accent-rgb': activeMeta.colorRgb }"
  >

  <svg width="0" height="0" style="position: absolute">
  <defs>
    <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.012 0.012"
        numOctaves="2"
        seed="92"
        result="noise"
      />
      <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="blurred"
        scale="85"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </defs>
</svg>

    <header class="top-header">
      <div class="brand">
        <span class="brand-dot" />
        <span class="brand-name">Aether Cards</span>
      </div>

      <div class="framework-switch" role="tablist">
        <button
          v-for="fw in frameworks"
          :key="fw.id"
          type="button"
          role="tab"
          :aria-selected="activeFramework === fw.id"
          class="fw-btn"
          :class="{ active: activeFramework === fw.id }"
          :style="activeFramework === fw.id ? { background: fw.color } : undefined"
          @click="setFramework(fw.id)"
        >
          {{ fw.label }}
        </button>
      </div>
    </header>

    <main class="content">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.top-header {
  position: relative;
  z-index: 2;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 700;
  font-size: 1.15rem;
  color: #fff;
}

.brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent, #7c3aed);
  box-shadow: 0 0 12px rgba(var(--accent-rgb, 124, 58, 237), 0.8);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}

.framework-switch {
  display: inline-flex;
  gap: 0.35rem;
  padding: 0.3rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.fw-btn {
  padding: 0.5rem 1.1rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: rgba(245, 246, 250, 0.6);
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.fw-btn:hover {
  color: #fff;
}

.fw-btn.active {
  color: #fff;
  box-shadow: 0 4px 16px rgba(var(--accent-rgb, 124, 58, 237), 0.45);
}
</style>
