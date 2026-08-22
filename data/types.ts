import type { CardVisualConfig } from './code/generateFrameworkCode'
import type { FrameworkId } from '~/composables/useFrameworkTheme'

/** One code snippet per framework, for a single card. */
export type CardFrameworkCode = Record<FrameworkId, string>

export interface CardEntry {
  id: number
  name: string
  ready: boolean
  /** Drives the shared GlassCard.vue preview and the generated code snippets below. */
  visual: CardVisualConfig
  code: CardFrameworkCode
}
