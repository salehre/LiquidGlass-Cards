import type { Component } from 'vue'
import type { FrameworkId } from '~/composables/useFrameworkTheme'

/** One code snippet per framework, for a single card. */
export type CardFrameworkCode = Record<FrameworkId, string>

export interface CardEntry {
  id: number
  name: string
  ready: boolean
  component: Component
  code: CardFrameworkCode
}
