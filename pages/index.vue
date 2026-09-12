<script setup lang="ts">
import { computed, ref } from 'vue'
import { cardRegistry } from '~/data/cardRegistry'
import { useFrameworkTheme } from '~/composables/useFrameworkTheme'

const activeId = ref(cardRegistry[0].id)

const activeEntry = computed(
  () => cardRegistry.find((entry) => entry.id === activeId.value) ?? cardRegistry[0],
)

const { activeMeta } = useFrameworkTheme()
</script>

<template>
  <div class="page-inner">
    <div class="intro">
      <h1 class="intro-title">{{ activeMeta.title }}</h1>
      <p class="intro-desc">{{ activeMeta.description }}</p>
    </div>

    <div class="generator-grid">
      <CardList v-model="activeId" />
      <CardPreview :entry="activeEntry" />
    </div>
  </div>
</template>

<style scoped>
.page-inner {
  width: min(100% - 4rem, 1250px);
  max-width: 1250px;
  margin: 0 auto;
}

.intro {
  margin-bottom: 2rem;
  text-align: center;
}

.intro-title {
  margin: 0 0 0.5rem;
  font-size: 1.6rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-weight: 800;
  color: #fff;
  transition: color 0.2s ease;
}

.intro-desc {
  margin: 0 auto;
  max-width: 620px;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  line-height: 1.9;
  color: rgba(245, 246, 250, 0.6);
}

.generator-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: 1.5rem;
  align-items: start;
}

@media (max-width: 860px) {
  .page-inner {
    width: min(100% - 2rem, 680px);
  }

  .generator-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .page-inner {
    width: min(100% - 1.5rem, 680px);
  }

  .intro {
    margin-bottom: 1.25rem;
  }

  .intro-title {
    font-size: 1.35rem;
  }

  .intro-desc {
    font-size: 0.82rem;
    line-height: 1.7;
  }
}
</style>
