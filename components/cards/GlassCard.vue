<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { CardVisualConfig } from '~/data/code/generateFrameworkCode'

const props = defineProps<{
  config: CardVisualConfig
}>()

// CSS custom properties for the parts that vary per card. Bound via v-bind()
// in <style scoped> below, so this markup/style pair is the single source of
// truth for how a card actually renders (the framework code snippets in
// data/code/generateFrameworkCode.ts are generated from the same config).
const radius = computed(() => `${props.config.borderRadius ?? 28}px`)
const blurPx = computed(() => `${props.config.blur}px`)
const insetShadow = computed(() => `inset ${props.config.insetShadow} rgba(255, 255, 255, 0.7)`)
const filterUrl = computed(() => `url(#${props.config.filterId})`)
</script>

<template>
  <div class="glass-card">
    <!-- Cards with sharedFilter: true reuse the #glass-distortion filter
         defined once in app.vue. Every other card ships its own filter with
         its own baseFrequency/scale, so it travels with the card. -->
    <svg v-if="!config.sharedFilter" width="0" height="0" style="position: absolute">
      <defs>
        <filter :id="config.filterId" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            :baseFrequency="`${config.baseFrequency} ${config.baseFrequency}`"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            :scale="config.scale"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>

    <div class="card-content">
      <div class="card-header">
        <div class="user-info">
          <div class="avatar">
            <Icon class="avatar-icon" icon="lucide:user" />
          </div>
          <div class="user-details">
            <p class="user-name">Jane Doe</p>
            <p class="user-role">UX Designer</p>
          </div>
        </div>
        <Icon class="notification-icon" icon="lucide:bell" />
      </div>
      <div class="card-body">
        <h3 class="card-title">Styled Component</h3>
        <p class="card-description">This is a sample of how your content might look inside.</p>
        <button class="glass-button">Get Started</button>
      </div>
      <p class="card-tip">Tip: Try adjusting the sliders and colors to see real-time changes!</p>
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  position: relative;
  width: 400px;
  max-width: 100%;
  height: 300px;
  border-radius: v-bind(radius);
  isolation: isolate;
  box-shadow: 0 0 21px -8px rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: v-bind(radius);
  box-shadow: v-bind(insetShadow);
  background-color: rgba(255, 255, 255, 0);
  pointer-events: none;
}

.glass-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: v-bind(radius);
  backdrop-filter: blur(v-bind(blurPx));
  -webkit-backdrop-filter: blur(v-bind(blurPx));
  filter: v-bind(filterUrl);
  -webkit-filter: v-bind(filterUrl);
  isolation: isolate;
  pointer-events: none;
}

.card-content {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-icon {
  width: 20px;
  height: 20px;
  color: #3b82f6;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  margin: 0;
}

.user-role {
  font-size: 12px;
  opacity: 0.7;
  margin: 0;
}

.notification-icon {
  width: 20px;
  height: 20px;
  opacity: 0.5;
}

.card-body {
  text-align: center;
  margin-top: 8px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 4px 0;
}

.card-description {
  font-size: 14px;
  opacity: 0.7;
  margin: 0 0 16px 0;
}

.glass-button {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.glass-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
}

.card-tip {
  font-size: 12px;
  text-align: center;
  color: #e0e6ed;
  margin: 16px 0 0 0;
}
</style>
