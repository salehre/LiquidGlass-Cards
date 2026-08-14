<script setup lang="ts"></script>

<template>
  <div class="page">
    <header class="top-header">
      <div class="brand">
        <span class="brand-dot" />
        <span class="brand-name">Aether Cards</span>
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
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  box-shadow: 0 0 12px rgba(124, 58, 237, 0.8);
}
</style>
