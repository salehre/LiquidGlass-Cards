import { generateAllFrameworks } from './generateFrameworkCode'

/** Nebula Prism — high distortion, heavier 16px blur, bold swirling look. */
export const NebulaPrism = generateAllFrameworks({
  slug: 'nebula-prism-card',
  filterId: 'glass-distortion-12',
  baseFrequency: 0.028,
  scale: 130,
  blur: 16,
  insetShadow: '0 0 9px -7px',
})
