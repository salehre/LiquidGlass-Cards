<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CardEntry } from '~/data/cardRegistry'
import { useFrameworkTheme } from '~/composables/useFrameworkTheme'

const props = defineProps<{
  entry: CardEntry
}>()

const view = ref<'preview' | 'code'>('preview')

const { activeFramework } = useFrameworkTheme()

const activeCode = computed(() => props.entry.code[activeFramework.value])

// Add / rename entries here once the images are in public/image.
const backgrounds = [
  '/images/orange.webp',
  '/images/sky.webp',
  '/images/emerald.webp',
  '/images/rose.webp',
]

const currentBg = ref(backgrounds[0])

function shuffleBackground() {
  const options = backgrounds.filter((bg) => bg !== currentBg.value)
  const pick = options[Math.floor(Math.random() * options.length)]
  currentBg.value = pick ?? backgrounds[0]
}
</script>

<template>
  <div class="panel stage-panel">
    <div class="stage-toolbar">
      <div class="toggle-group" role="tablist">
        <button
          type="button"
          role="tab"
          :aria-selected="view === 'preview'"
          class="toggle-btn"
          :class="{ active: view === 'preview' }"
          @click="view = 'preview'"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Preview
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="view === 'code'"
          class="toggle-btn"
          :class="{ active: view === 'code' }"
          @click="view = 'code'"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
          </svg>
          Code
        </button>
      </div>

      <button
        v-if="view === 'preview'"
        type="button"
        class="shuffle-btn"
        title="Shuffle background"
        @click="shuffleBackground"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m18 4 3 3-3 3" />
          <path d="M2 7h5c1.5 0 2.5.5 3.5 2l5 8c1 1.5 2 2 3.5 2h3" />
          <path d="m18 20 3-3-3-3" />
          <path d="M2 17h5c1.5 0 2.5-.5 3.5-2M13.5 8.5c1-1.5 2-2 3.5-2H21" />
        </svg>
      </button>
    </div>

    <div v-if="view === 'preview'" class="preview-stage">
      <div class="preview-bg" :style="{ backgroundImage: `url('${currentBg}')` }" />
      <div class="preview-overlay" />
      <div class="relative z-10 flex w-full items-center justify-center">
        <component :is="entry.component" />
      </div>
    </div>

    <CodeBlock v-else :code="activeCode" :framework="activeFramework" />
  </div>
</template>

<style scoped>
.panel {
  border-radius: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
}

.stage-panel {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.stage-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toggle-group {
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.25rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.toggle-btn {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: rgba(245, 246, 250, 0.55);
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toggle-btn svg {
  width: 14px;
  height: 14px;
}

.toggle-btn:hover {
  color: #fff;
}

.toggle-btn.active {
  background: #fff;
  color: #0b0f1a;
}

.shuffle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(245, 246, 250, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;
}

.shuffle-btn svg {
  width: 16px;
  height: 16px;
}

.shuffle-btn:hover {
  background: rgba(var(--accent-rgb, 124, 58, 237), 0.25);
  border-color: rgba(var(--accent-rgb, 124, 58, 237), 0.5);
  color: #fff;
}

.preview-stage {
  position: relative;
  min-height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1.25rem;
  padding: 2rem;
}

.preview-bg {
  position: absolute;
  inset: -6%;
  background-size: cover;
  background-position: center;
  animation: float-bg 20s ease-in-out infinite;
}

@keyframes float-bg {
  0%, 100% { transform: translate(0, 0) scale(1.08); }
  25% { transform: translate(2%, -1.5%) scale(1.08); }
  50% { transform: translate(-1.5%, 2%) scale(1.08); }
  75% { transform: translate(-2%, -1%) scale(1.08); }
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: rgba(11, 15, 26, 0.4);
}
</style>
