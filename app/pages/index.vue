<script setup lang="ts">
import { computed, ref } from 'vue'
import { cardRegistry } from '~/data/cardRegistry'

const activeId = ref(cardRegistry[0].id)

const activeEntry = computed(
  () => cardRegistry.find((entry) => entry.id === activeId.value) ?? cardRegistry[0],
)
</script>

<template>
  <div class="generator-grid">
    <CardList v-model="activeId" />
    <CardPreview :entry="activeEntry" />
  </div>
</template>

<style scoped>
.generator-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 1.5rem;
  align-items: start;
}

@media (max-width: 860px) {
  .generator-grid {
    grid-template-columns: 1fr;
  }
}
</style>
