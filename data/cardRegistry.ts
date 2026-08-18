import { markRaw } from 'vue'
import type { CardEntry } from './types'
import { pendingCode } from './code/pending'
import { card01Code } from './code/card-01'

import Card01 from '~/components/cards/Card01.vue'
import Card02 from '~/components/cards/Card02.vue'
import Card03 from '~/components/cards/Card03.vue'
import Card04 from '~/components/cards/Card04.vue'
import Card05 from '~/components/cards/Card05.vue'
import Card06 from '~/components/cards/Card06.vue'
import Card07 from '~/components/cards/Card07.vue'
import Card08 from '~/components/cards/Card08.vue'
import Card09 from '~/components/cards/Card09.vue'
import Card10 from '~/components/cards/Card10.vue'
import Card11 from '~/components/cards/Card11.vue'
import Card12 from '~/components/cards/Card12.vue'

export type { CardEntry } from './types'

// Once a card's code is written, add data/code/card-XX.ts, import it above,
// and swap that single `code:` value below from `pendingCode` to it.
export const cardRegistry: CardEntry[] = [
  { id: 1, name: 'Liquid Crystal', ready: true, component: markRaw(Card01), code: card01Code },
  { id: 2, name: 'Fluid Amber', ready: false, component: markRaw(Card02), code: pendingCode },
  { id: 3, name: 'Ice Ripple', ready: false, component: markRaw(Card03), code: pendingCode },
  { id: 4, name: 'Mercury Drop', ready: false, component: markRaw(Card04), code: pendingCode },
  { id: 5, name: 'Ocean Wave', ready: false, component: markRaw(Card05), code: pendingCode },
  { id: 6, name: 'Crystal Mist', ready: false, component: markRaw(Card06), code: pendingCode },
  { id: 7, name: 'Molten Glass', ready: false, component: markRaw(Card07), code: pendingCode },
  { id: 8, name: 'Silk Veil', ready: false, component: markRaw(Card08), code: pendingCode },
  { id: 9, name: 'Plasma Flow', ready: false, component: markRaw(Card09), code: pendingCode },
  { id: 10, name: 'Frost Lens', ready: false, component: markRaw(Card10), code: pendingCode },
  { id: 11, name: 'Aurora Gel', ready: false, component: markRaw(Card11), code: pendingCode },
  { id: 12, name: 'Nebula Prism', ready: false, component: markRaw(Card12), code: pendingCode },
]
