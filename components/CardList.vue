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
      <h2 class="panel-title">استایل‌های کارت</h2>
      <span class="panel-sub">۱۲ کارت شیشه‌ای — یکی رو انتخاب کن</span>
    </div>

    <div class="thumb-grid">
      <button
        v-for="entry in cardRegistry"
        :key="entry.id"
        type="button"
        class="thumb-btn"
        :class="{ active: modelValue === entry.id, pending: !entry.ready }"
        @click="emit('update:modelValue', entry.id)"
      >
        <span class="thumb-frame" /> 
        <span class="thumb-label">{{ entry.name }}</span>
      </button>
    </div>
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

.panel-header {
  margin-bottom: 1.25rem;
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
  gap: 0.75rem;
}

@media (max-width: 480px) {
  .thumb-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.thumb-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem;
  border-radius: 10px;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  transition: all 0.2s ease;
}

.thumb-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}

.thumb-btn.active {
  border-color: rgba(var(--accent-rgb, 124, 58, 237), 0.6);
  background: rgba(var(--accent-rgb, 124, 58, 237), 0.12);
  transition: border-color 0.2s ease, background 0.2s ease;
}

.thumb-btn.pending {
  opacity: 0.5;
}

.thumb-frame {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 1.5rem;
  background:
    radial-gradient(circle at 50% 38%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02) 55%, transparent 75%),
    #12141f;
  box-shadow:
    inset 0 0 24px rgba(255, 255, 255, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 0 22px rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.thumb-label {
  font-size: 0.7rem;
  color: rgba(245, 246, 250, 0.75);
  text-align: center;
}
</style>
