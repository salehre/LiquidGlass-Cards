<script setup lang="ts">
import {computed, ref, onMounted} from 'vue'
import {bind} from "cuelume";
import type {FrameworkId} from '~/composables/useFrameworkTheme'

const props = defineProps<{
  code: string
  framework?: FrameworkId
}>()

const langLabel = computed(() => {
  switch (props.framework) {
    case 'bootstrap':
      return 'HTML + Bootstrap'
    case 'vuetify':
      return 'Vue + Vuetify'
    default:
      return 'HTML + Tailwind'
  }
})

const copied = ref(false)

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch {}
}

onMounted(() => {
  bind()
})

</script>

<template>
  <div class="code-box">
    <div class="code-header">
      <span class="code-lang">{{ langLabel }}</span>
      <button type="button" class="copy-btn" @click="copyCode" data-cuelume-press data-cuelume-release>
        {{ copied ? 'Copied ✓' : 'Copy code' }}
      </button>
    </div>
    <pre class="code-pre"><code>{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.code-box {
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.code-lang {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: rgba(245, 246, 250, 0.5);
}

.copy-btn {
  appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.3rem 0.7rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.14);
}

.code-pre {
  margin: 0;
  padding: 1rem;
  max-height: 400px;
  overflow: auto;
  font-family: 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.78rem;
  line-height: 1.6;
  color: #d4d4e0;
  white-space: pre-wrap;
  word-break: break-word;
  direction: ltr;
  text-align: left;
}
</style>
