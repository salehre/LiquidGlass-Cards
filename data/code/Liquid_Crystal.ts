import type { CardVisualConfig } from './generateFrameworkCode'

/** Liquid Crystal — uses the shared #glass-distortion filter from app.vue. */
export const liquidCrystalConfig: CardVisualConfig = {
  slug: 'liquid-crystal-card',
  filterId: 'glass-distortion',
  baseFrequency: 0.012,
  scale: 85,
  blur: 0,
  insetShadow: '0 0 5px -8px',
  sharedFilter: true,
  borderRadius: 14,
}
