import { markRaw } from 'vue'
import type { CardEntry } from './types'
import { pendingCode } from './code/pending'
import { card01Code } from './code/card-01'
import { card02Code } from './code/card-02'
import { card03Code } from './code/card-03'
import { card04Code } from './code/card-04'
import { card05Code } from './code/card-05'
import { card06Code } from './code/card-06'
import { card07Code } from './code/card-07'
import { card08Code } from './code/card-08'
import { card09Code } from './code/card-09'
import { card10Code } from './code/card-10'
import { card11Code } from './code/card-11'

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
  { id: 2, name: 'Fluid Amber', ready: true, component: markRaw(Card02), code: card02Code },
  { id: 3, name: 'Ice Ripple', ready: true, component: markRaw(Card03), code: card03Code },
  { id: 4, name: 'Mercury Drop', ready: true, component: markRaw(Card04), code: card04Code },
  { id: 5, name: 'Ocean Wave', ready: true, component: markRaw(Card05), code: card05Code },
  { id: 6, name: 'Crystal Mist', ready: true, component: markRaw(Card06), code: card06Code },
  { id: 7, name: 'Molten Glass', ready: true, component: markRaw(Card07), code: card07Code },
  { id: 8, name: 'Silk Veil', ready: true, component: markRaw(Card08), code: card08Code },
  { id: 9, name: 'Plasma Flow', ready: true, component: markRaw(Card09), code: card09Code },
  { id: 10, name: 'Frost Lens', ready: true, component: markRaw(Card10), code: card10Code },
  { id: 11, name: 'Aurora Gel', ready: true, component: markRaw(Card11), code: card11Code },
  { id: 12, name: 'Nebula Prism', ready: false, component: markRaw(Card12), code: pendingCode },
]
