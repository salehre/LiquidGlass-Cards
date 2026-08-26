import type { CardEntry } from './types'
import { generateAllFrameworks } from './code/generateFrameworkCode'
import { generateAllReactFrameworks } from './code/generateReactFrameworkCode'
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
  { id: 1, name: 'Liquid Crystal', ready: true, visual: liquidCrystalConfig, code: { vue: generateAllFrameworks(liquidCrystalConfig), react: generateAllReactFrameworks(liquidCrystalConfig) } },
  { id: 2, name: 'Fluid Amber', ready: true, visual: fluidAmberConfig, code: { vue: generateAllFrameworks(fluidAmberConfig), react: generateAllReactFrameworks(fluidAmberConfig) } },
  { id: 3, name: 'Ice Ripple', ready: true, visual: iceRippleConfig, code: { vue: generateAllFrameworks(iceRippleConfig), react: generateAllReactFrameworks(iceRippleConfig) } },
  { id: 4, name: 'Mercury Drop', ready: true, visual: mercuryDropConfig, code: { vue: generateAllFrameworks(mercuryDropConfig), react: generateAllReactFrameworks(mercuryDropConfig) } },
  { id: 5, name: 'Ocean Wave', ready: true, visual: oceanWaveConfig, code: { vue: generateAllFrameworks(oceanWaveConfig), react: generateAllReactFrameworks(oceanWaveConfig) } },
  { id: 6, name: 'Crystal Mist', ready: true, visual: crystalMistConfig, code: { vue: generateAllFrameworks(crystalMistConfig), react: generateAllReactFrameworks(crystalMistConfig) } },
  { id: 7, name: 'Molten Glass', ready: true, visual: moltenGlassConfig, code: { vue: generateAllFrameworks(moltenGlassConfig), react: generateAllReactFrameworks(moltenGlassConfig) } },
  { id: 8, name: 'Silk Veil', ready: true, visual: silkVeilConfig, code: { vue: generateAllFrameworks(silkVeilConfig), react: generateAllReactFrameworks(silkVeilConfig) } },
  { id: 9, name: 'Plasma Flow', ready: true, visual: plasmaFlowConfig, code: { vue: generateAllFrameworks(plasmaFlowConfig), react: generateAllReactFrameworks(plasmaFlowConfig) } },
  { id: 10, name: 'Frost Lens', ready: true, visual: frostLensConfig, code: { vue: generateAllFrameworks(frostLensConfig), react: generateAllReactFrameworks(frostLensConfig) } },
  { id: 11, name: 'Aurora Gel', ready: true, visual: auroraGelConfig, code: { vue: generateAllFrameworks(auroraGelConfig), react: generateAllReactFrameworks(auroraGelConfig) } },
  { id: 12, name: 'Nebula Prism', ready: true, visual: nebulaPrismConfig, code: { vue: generateAllFrameworks(nebulaPrismConfig), react: generateAllReactFrameworks(nebulaPrismConfig) } },
]
