import type { CardFrameworkCode } from '../types'

/** Shown for any card whose framework code hasn't been written yet. */
export const pendingCode: CardFrameworkCode = {
  tailwind: '<!-- Waiting to receive the CSS code to translate to Tailwind... -->',
  bootstrap: '<!-- Waiting to receive the CSS code to translate to Bootstrap... -->',
  vuetify: '<!-- Waiting to receive the CSS code to translate to Vuetify... -->',
}
