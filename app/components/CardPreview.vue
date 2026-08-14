<script setup lang="ts">
import { ref } from 'vue'
import type { CardEntry } from '~/data/cardRegistry'

defineProps<{
  entry: CardEntry
}>()

const view = ref<'preview' | 'code'>('preview')
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
    </div>

    <div v-if="view === 'preview'" class="preview-stage">
      <div class="preview-bg" />
      <div class="preview-overlay" />
      <div class="relative z-10 flex w-full items-center justify-center">
        <component :is="entry.component" />
      </div>
    </div>

    <CodeBlock v-else :code="entry.code" />
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

/* Drop your own image at public/image/preview-bg.jpg — update the path
   below if you use a different name or format. */
.preview-bg {
  position: absolute;
  inset: 0;
  background-image: url('/image/orange.jpg');
  background-size: cover;
  background-position: center;
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 25% 15%, rgba(124, 58, 237, 0.35), transparent 60%),
    radial-gradient(circle at 80% 85%, rgba(6, 182, 212, 0.3), transparent 60%),
    rgba(11, 15, 26, 0.4);
}
</style>
