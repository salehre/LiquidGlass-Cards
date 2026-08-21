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
        <filter id="glass-distortion-2" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.018"
              numOctaves="2"
              seed="92"
              result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="120"
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

    <footer class="site-footer">
      <div class="footer-divider" />
      <p class="footer-text">powered by <span class="author"> Saleh Rezaei</span></p>
    </footer>

    <a href="#" class="support-btn" aria-label="Support">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    </a>
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

.site-footer {
  position: relative;
  z-index: 2;
  padding: 1.5rem 2rem 2rem;
}

.footer-divider {
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
}

.footer-text {
  margin: 0;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(245, 246, 250, 0.5);
}

.support-btn {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 50;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.support-btn:hover {
  transform: translateY(-2px);
  background: var(--accent, #7c3aed);
  box-shadow: 0 10px 28px rgba(var(--accent-rgb, 124, 58, 237), 0.5);
}

.author{
  color: var(--accent, #7c3aed);
  text-shadow: 0 2px 28px rgba(var(--accent-rgb, 124, 58, 237), 1.5);
}
</style>