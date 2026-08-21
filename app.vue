<script setup lang="ts">
import {nextTick, onMounted, onUnmounted, ref, watch} from 'vue'
import {useFrameworkTheme} from '~/composables/useFrameworkTheme'
import { Icon } from "@iconify/vue";

const {activeFramework, activeMeta, frameworks, setFramework} = useFrameworkTheme()

const switchRef = ref<HTMLElement | null>(null)
const indicatorRef = ref<HTMLElement | null>(null)
const tabRefs = new Map<string, HTMLElement>()

// آیدی تایمر فاز ۲ که در حال انتظاره - برای کنسل کردنش موقع کلیک سریع بعدی
let settleTimeout: ReturnType<typeof window.setTimeout> | null = null

function setTabRef(el: Element | null, id: string) {
  if (el instanceof HTMLElement) tabRefs.set(id, el)
}

function moveIndicator(jelly: boolean) {
  const track = switchRef.value
  const indicator = indicatorRef.value
  const tab = tabRefs.get(activeFramework.value)
  if (!track || !indicator || !tab) return

  // هر تایمر فاز ۲ قبلی که هنوز در انتظاره رو کنسل کن
  // تا موقعیت/عرض تب قدیمی رو روی انیمیشن جدید override نکنه
  if (settleTimeout !== null) {
    window.clearTimeout(settleTimeout)
    settleTimeout = null
  }

  const trackRect = track.getBoundingClientRect()
  const tabRect = tab.getBoundingClientRect()
  const x = tabRect.left - trackRect.left
  const width = tabRect.width

  indicator.style.background = activeMeta.value.color

  if (!jelly) {
    indicator.style.transition = 'none'
    indicator.style.transform = `translateX(${x}px)`
    indicator.style.width = `${width}px`
    void indicator.offsetWidth
    indicator.style.transition = ''
    return
  }

  const prevX = indicator.getBoundingClientRect().left - trackRect.left
  const prevWidth = indicator.getBoundingClientRect().width
  const movingRight = x > prevX

  indicator.style.transition = 'transform 0.12s ease-out, width 0.12s ease-out'
  if (movingRight) {
    indicator.style.transform = `translateX(${prevX}px)`
    indicator.style.width = `${x + width - prevX}px`
  } else {
    indicator.style.transform = `translateX(${x}px)`
    indicator.style.width = `${prevX + prevWidth - x}px`
  }

  settleTimeout = window.setTimeout(() => {
    indicator.style.transition =
        'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
    indicator.style.transform = `translateX(${x}px)`
    indicator.style.width = `${width}px`
    settleTimeout = null
  }, 120)
}

const links = [
  { label: 'GitHub', href: 'https://github.com/salehre/LiquidGlass-Cards', icon: 'mdi:github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saleh-rezaei-1985b5415/', icon: 'mdi:linkedin' },
  { label: 'Gmail', href: 'mailto:salehrezaeipoor123@gmail.com', icon: 'tabler:brand-gmail' },
]

onMounted(() => nextTick(() => moveIndicator(false)))
onUnmounted(() => {
  if (settleTimeout !== null) window.clearTimeout(settleTimeout)
})
watch(activeFramework, () => nextTick(() => moveIndicator(true)))
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
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred"/>
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
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred"/>
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
      <div class="flex flex-wrap gap-3">
        <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            target="_blank"
            class="social group inline-flex h-11 w-11 items-center"
        >
          <Icon :icon="link.icon" class=" text-xl h-8 w-8"/>
        </a>
      </div>

      <div ref="switchRef" class="framework-switch" role="tablist">
        <span ref="indicatorRef" class="jelly-indicator"/>
        <button
            v-for="fw in frameworks"
            :key="fw.id"
            :ref="(el) => setTabRef(el as Element, fw.id)"
            type="button"
            role="tab"
            :aria-selected="activeFramework === fw.id"
            class="fw-btn"
            :class="{ active: activeFramework === fw.id }"
            @click="setFramework(fw.id)"
        >
          {{ fw.label }}
        </button>
      </div>
    </header>

    <main class="content">
      <NuxtPage/>
    </main>

    <footer class="site-footer">
      <div class="footer-divider"/>
      <p class="footer-text">powered by <span class="author"> Saleh Rezaei</span></p>
    </footer>

    <a href="https://www.coffeete.ir/salehrezaei" target="_blank" class="support-btn font-semibold text-lg "
       aria-label="Support">
      <Icon icon="tabler:coffee" color="#F26C50" class="support-icon" width="22" height="22"/>
      support
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

.social{
  color: #ececec;
}
.social:hover{
  color: var(--accent, #7c3aed);
}

.framework-switch {
  display: inline-flex;
  position: relative;
  gap: 0.35rem;
  padding: 0.3rem 0.35rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.jelly-indicator {
  position: absolute;
  top: 0.3rem;
  left: 0;
  height: calc(100% - 0.6rem);
  border-radius: 13px;
  z-index: 0;
  pointer-events: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.fw-btn {
  padding: 0.5rem 1.1rem;
  position: relative;
  z-index: 1;
  border: none;
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
  right: 3rem;
  bottom: 2rem;
  padding: 9px 15px;
  text-decoration: none;
  z-index: 50;
  display: flex;
  border-radius: 9px;
  background: #efe2d1;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  color: #1c1b1b;
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.support-btn:hover {
  transform: translateY(-1px);
}

.support-icon {
  margin-top: 1px;
  margin-right: 2px;
}

.author {
  color: var(--accent, #7c3aed);
  text-shadow: 0 2px 28px rgba(var(--accent-rgb, 124, 58, 237), 1.5);
}
</style>