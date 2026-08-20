import { generateAllFrameworks } from './generateFrameworkCode'

/** Frost Lens — low distortion, heaviest 22px blur, deeply frosted look. */
export const FrostLens = generateAllFrameworks({
  slug: 'frost-lens-card',
  filterId: 'glass-distortion-10',
  baseFrequency: 0.01,
  scale: 55,
  blur: 22,
  insetShadow: '0 0 14px -4px',
})
