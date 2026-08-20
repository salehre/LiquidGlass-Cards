import { generateAllFrameworks } from './generateFrameworkCode'

/** Ice Ripple — a finer, tighter ripple than the other cards. */
export const IceRipple = generateAllFrameworks({
  slug: 'ice-ripple-card',
  filterId: 'glass-distortion-03',
  baseFrequency: 0.025,
  scale: 65,
  blur: 6,
  insetShadow: '0 0 12px -2px',
})
