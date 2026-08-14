import { markRaw } from 'vue'
import type { Component } from 'vue'

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

export interface CardEntry {
  id: number
  name: string
  ready: boolean
  component: Component
  /** Code shown in the code panel — kept in sync with the component's template by hand */
  code: string
}

const pendingCode = '<!-- در انتظار دریافت کد CSS برای ترجمه به Tailwind... -->'

export const cardRegistry: CardEntry[] = [
  {
    id: 1,
    name: 'Frosted Light',
    ready: true,
    component: markRaw(Card01),
    code: `<div class="w-full max-w-xs rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-xl">
  <div class="flex items-start justify-between">
    <div class="flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
        <!-- user icon -->
      </div>
      <div>
        <p class="text-sm font-bold text-white">Jane Doe</p>
        <p class="text-xs text-white/50">UX Designer</p>
      </div>
    </div>
    <!-- bell icon -->
  </div>

  <div class="mt-9 text-center">
    <h3 class="text-base font-bold text-white">Styled Component</h3>
    <p class="mt-2 text-sm text-white/60">This is a sample of how your content might look inside.</p>
  </div>

  <button class="mt-6 w-full rounded-xl border border-white/15 bg-white/10 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20">
    Get Started
  </button>

  <p class="mt-6 text-center text-[11px] text-white/40">
    Tip: Try adjusting the sliders and colors to see real-time changes!
  </p>
</div>`,
  },
  { id: 2, name: 'Variant 02', ready: false, component: markRaw(Card02), code: pendingCode },
  { id: 3, name: 'Variant 03', ready: false, component: markRaw(Card03), code: pendingCode },
  { id: 4, name: 'Variant 04', ready: false, component: markRaw(Card04), code: pendingCode },
  { id: 5, name: 'Variant 05', ready: false, component: markRaw(Card05), code: pendingCode },
  { id: 6, name: 'Variant 06', ready: false, component: markRaw(Card06), code: pendingCode },
  { id: 7, name: 'Variant 07', ready: false, component: markRaw(Card07), code: pendingCode },
  { id: 8, name: 'Variant 08', ready: false, component: markRaw(Card08), code: pendingCode },
  { id: 9, name: 'Variant 09', ready: false, component: markRaw(Card09), code: pendingCode },
  { id: 10, name: 'Variant 10', ready: false, component: markRaw(Card10), code: pendingCode },
  { id: 11, name: 'Variant 11', ready: false, component: markRaw(Card11), code: pendingCode },
  { id: 12, name: 'Variant 12', ready: false, component: markRaw(Card12), code: pendingCode },
]
