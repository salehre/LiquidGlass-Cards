<script setup lang="ts">
import { cardRegistry } from '~/data/cardRegistry'

defineProps<{
  modelValue: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', id: number): void
}>()
</script>

<template>
  <div class="panel list-panel">
    <div class="panel-header">
      <h2 class="panel-title">Card Styles</h2>
      <span class="panel-sub">12 glass cards — pick one</span>
    </div>

    <div class="thumb-grid">
      <div
          v-for="entry in cardRegistry"
          :key="entry.id"
          class="thumb-item"
      >
        <button
            type="button"
            class="thumb-btn"
            :class="{ active: modelValue === entry.id, pending: !entry.ready }"
            @click="emit('update:modelValue', entry.id)"
        >
          <span class="thumb-frame" />
        </button>
        <span
            class="thumb-label"
            :class="{ active: modelValue === entry.id }"
            @click="emit('update:modelValue', entry.id)"
        >{{ entry.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.panel {
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
  padding: 1rem;
}

.panel-header {
  margin-bottom: 1.95rem;
}

.panel-title {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
}

.panel-sub {
  font-size: 0.8rem;
  color: rgba(245, 246, 250, 0.5);
}

.thumb-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 480px) {
  .thumb-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.thumb-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.thumb-btn {
  display: block;
  width: 80%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}

.thumb-btn.active {
  border-color: rgba(var(--accent-rgb, 124, 58, 237), 0.6);
  background: rgba(var(--accent-rgb, 124, 58, 237), 0.12);
  transition: all 0.25s ease;
}

.thumb-btn:hover {
  animation: thumbBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  border: 1px solid rgba(var(--accent-rgb, 124, 58, 237), 0.6);
}

@keyframes thumbBounce {
  0% {
    transform: translateY(0);
  }
  35% {
    transform: translateY(-8px);
  }
  55% {
    transform: translateY(-2px);
  }
  75% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(-4px);
  }
}

.thumb-frame {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background: #161a23;
  box-shadow:
      0 14px 30px rgba(255, 255, 255, 0.1),
      0 4px 14px rgba(255, 255, 255, 0.08),
      0 0 26px rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.thumb-label {
  padding-bottom: 12px;
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: rgba(245, 246, 250, 0.9);
  text-align: center;
  cursor: pointer;
}

.thumb-label.active {
  color: #fff;
}
</style>