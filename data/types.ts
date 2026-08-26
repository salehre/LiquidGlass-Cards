import type { CardVisualConfig } from './code/generateFrameworkCode'
import type { FrameworkId } from '~/composables/useFrameworkTheme'
import type { LangId } from '~/composables/useFrameworkLang'

/** One code snippet per framework, for a single card, in a single language. */
export type CardFrameworkCode = Record<FrameworkId, string>

/** All code snippets for a single card: language -> framework -> snippet. */
export type CardCode = Record<LangId, CardFrameworkCode>

export interface CardEntry {
  id: number
  name: string
  ready: boolean
  /** Drives the shared GlassCard.vue preview and the generated code snippets below. */
  visual: CardVisualConfig
  code: CardCode
}
