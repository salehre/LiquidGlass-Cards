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
  gap: 0rem;   /* بود: 0.2rem */
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
  transition: all 0.2s ease;
}

.thumb-btn.active {
  border-color: rgba(var(--accent-rgb, 124, 58, 237), 0.6);
  background: rgba(var(--accent-rgb, 124, 58, 237), 0.12);
  transition: border-color 0.2s ease, background 0.2s ease;
}

.thumb-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-6px);
}
.thumb-frame {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background:
      radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.02) 55%, transparent 75%),
      #101219;
  box-shadow:
      inset 0 0 28px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.07),
      0 0 26px rgba(255, 255, 255, 0.05);
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