import { markRaw } from 'vue'
import type { CardEntry } from './types'
import { LiquidCrystal } from './code/Liquid_Crystal'
import { FluidAmber } from './code/Fluid_Amber'
import { IceRipple } from './code/Ice_Ripple'
import { MercuryDrop } from './code/Mercury_Drop'
import { OceanWave } from './code/Ocean_Wave'
import { CrystalMist } from './code/Crystal_Mist'
import { MoltenGlass } from './code/Molten_Glass'
import { SilkVeil } from './code/Silk_Veil'
import { PlasmaFlow } from './code/Plasma_Flow'
import { FrostLens } from './code/Frost_Lens'
import { AuroraGel } from './code/Aurora_Gel'
import { NebulaPrism } from './code/Nebula_Prism'

import Card01 from '~/components/cards/LiquidCrystal.vue'
import Card02 from '~/components/cards/FluidAmber.vue'
import Card03 from '~/components/cards/IceRipple.vue'
import Card04 from '~/components/cards/MercuryDrop.vue'
import Card05 from '~/components/cards/OceanWave.vue'
import Card06 from '~/components/cards/CrystalMist.vue'
import Card07 from '~/components/cards/MoltenGlass.vue'
import Card08 from '~/components/cards/SilkVeil.vue'
import Card09 from '~/components/cards/PlasmaFlow.vue'
import Card10 from '~/components/cards/FrostLens.vue'
import Card11 from '~/components/cards/AuroraGel.vue'
import Card12 from '~/components/cards/NebulaPrism.vue'

export type { CardEntry } from './types'

export const cardRegistry: CardEntry[] = [
  { id: 1, name: 'Liquid Crystal', ready: true, component: markRaw(Card01), code: LiquidCrystal },
  { id: 2, name: 'Fluid Amber', ready: true, component: markRaw(Card02), code: FluidAmber },
  { id: 3, name: 'Ice Ripple', ready: true, component: markRaw(Card03), code: IceRipple },
  { id: 4, name: 'Mercury Drop', ready: true, component: markRaw(Card04), code: MercuryDrop },
  { id: 5, name: 'Ocean Wave', ready: true, component: markRaw(Card05), code: OceanWave },
  { id: 6, name: 'Crystal Mist', ready: true, component: markRaw(Card06), code: CrystalMist },
  { id: 7, name: 'Molten Glass', ready: true, component: markRaw(Card07), code: MoltenGlass },
  { id: 8, name: 'Silk Veil', ready: true, component: markRaw(Card08), code: SilkVeil },
  { id: 9, name: 'Plasma Flow', ready: true, component: markRaw(Card09), code: PlasmaFlow },
  { id: 10, name: 'Frost Lens', ready: true, component: markRaw(Card10), code: FrostLens },
  { id: 11, name: 'Aurora Gel', ready: true, component: markRaw(Card11), code: AuroraGel },
  { id: 12, name: 'Nebula Prism', ready: true, component: markRaw(Card12), code: NebulaPrism },
]





















