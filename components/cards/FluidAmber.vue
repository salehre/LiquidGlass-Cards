<script setup lang="ts">
import { Icon } from "@iconify/vue";

// Fluid Amber — glass card with its own #glass-distortion-02 SVG filter
// (higher baseFrequency + scale than Liquid Crystal's shared filter), so
// this card keeps its own distortion signature independent of Card01's
// global one. See data/code/Fluid_Amber.ts for the per-framework markup.
</script>

<template>
  <div class="fluid-amber-card">
    <svg width="0" height="0" style="position: absolute">
      <defs>
        <filter id="glass-distortion-02" x="0%" y="0%" width="100%" height="100%">
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
.fluid-amber-card {
  position: relative;
  width: 400px;
  max-width: 100%;
  height: 300px;
  border-radius: 28px;
  isolation: isolate;
  box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.fluid-amber-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: 28px;
  box-shadow: inset 0 0 4px -8px rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0);
  pointer-events: none;
}

.fluid-amber-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 28px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  filter: url(#glass-distortion-02);
  -webkit-filter: url(#glass-distortion-02);
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
