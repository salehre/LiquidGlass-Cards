import type { CardEntry } from './types'
import { generateAllFrameworks } from './code/generateFrameworkCode'
import { liquidCrystalConfig } from './code/Liquid_Crystal'
import { fluidAmberConfig } from './code/Fluid_Amber'
import { iceRippleConfig } from './code/Ice_Ripple'
import { mercuryDropConfig } from './code/Mercury_Drop'
import { oceanWaveConfig } from './code/Ocean_Wave'
import { crystalMistConfig } from './code/Crystal_Mist'
import { moltenGlassConfig } from './code/Molten_Glass'
import { silkVeilConfig } from './code/Silk_Veil'
import { plasmaFlowConfig } from './code/Plasma_Flow'
import { frostLensConfig } from './code/Frost_Lens'
import { auroraGelConfig } from './code/Aurora_Gel'
import { nebulaPrismConfig } from './code/Nebula_Prism'

export type { CardEntry } from './types'

export const cardRegistry: CardEntry[] = [
  { id: 1, name: 'Liquid Crystal', ready: true, visual: liquidCrystalConfig, code: generateAllFrameworks(liquidCrystalConfig) },
  { id: 2, name: 'Fluid Amber', ready: true, visual: fluidAmberConfig, code: generateAllFrameworks(fluidAmberConfig) },
  { id: 3, name: 'Ice Ripple', ready: true, visual: iceRippleConfig, code: generateAllFrameworks(iceRippleConfig) },
  { id: 4, name: 'Mercury Drop', ready: true, visual: mercuryDropConfig, code: generateAllFrameworks(mercuryDropConfig) },
  { id: 5, name: 'Ocean Wave', ready: true, visual: oceanWaveConfig, code: generateAllFrameworks(oceanWaveConfig) },
  { id: 6, name: 'Crystal Mist', ready: true, visual: crystalMistConfig, code: generateAllFrameworks(crystalMistConfig) },
  { id: 7, name: 'Molten Glass', ready: true, visual: moltenGlassConfig, code: generateAllFrameworks(moltenGlassConfig) },
  { id: 8, name: 'Silk Veil', ready: true, visual: silkVeilConfig, code: generateAllFrameworks(silkVeilConfig) },
  { id: 9, name: 'Plasma Flow', ready: true, visual: plasmaFlowConfig, code: generateAllFrameworks(plasmaFlowConfig) },
  { id: 10, name: 'Frost Lens', ready: true, visual: frostLensConfig, code: generateAllFrameworks(frostLensConfig) },
  { id: 11, name: 'Aurora Gel', ready: true, visual: auroraGelConfig, code: generateAllFrameworks(auroraGelConfig) },
  { id: 12, name: 'Nebula Prism', ready: true, visual: nebulaPrismConfig, code: generateAllFrameworks(nebulaPrismConfig) },
]
