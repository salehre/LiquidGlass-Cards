import { generateAllFrameworks } from './generateFrameworkCode'

/** Mercury Drop — broad, heavy, mercury-like wobble. */
export const MercuryDrop = generateAllFrameworks({
  slug: 'mercury-drop-card',
  filterId: 'glass-distortion-04',
  baseFrequency: 0.008,
  scale: 150,
  blur: 15,
  insetShadow: '0 0 12px -4px',
})
