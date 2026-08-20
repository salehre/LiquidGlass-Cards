import { computed } from 'vue'
import { useState } from '#app'

export type FrameworkId = 'bootstrap' | 'tailwind' | 'vuetify'

export interface FrameworkMeta {
  id: FrameworkId
  label: string
  color: string
  colorRgb: string
  title: string
  description: string
}

export const frameworks: FrameworkMeta[] = [
  {
    id: 'bootstrap',
    label: 'Bootstrap',
    color: '#712CF9',
    colorRgb: '124, 58, 237',
    title: 'Cards with Bootstrap',
    description:
      'In this mode, the class structure and display components are inspired by the Bootstrap system — a good fit for projects already built on Bootstrap.',
  },
  {
    id: 'tailwind',
    label: 'Tailwind',
    color: '#00BCFF',
    colorRgb: '14, 165, 233',
    title: 'Cards with Tailwind CSS',
    description:
      'All 12 glass card styles in this project are written with Tailwind\'s utility classes — great for quick customization without writing separate CSS.',
  },
  {
    id: 'vuetify',
    label: 'Vuetify',
    color: '#42B883',
    colorRgb: '16, 185, 129',
    title: 'Cards with Vuetify',
    description:
      'This mode is designed around Material Design language and Vuetify\'s ready-made components — a good option for admin apps and dashboards.',
  },
]

export function useFrameworkTheme() {
  const activeFramework = useState<FrameworkId>('activeFramework', () => 'tailwind')

  const activeMeta = computed<FrameworkMeta>(
    () => frameworks.find((f) => f.id === activeFramework.value) ?? frameworks[1],
  )

  function setFramework(id: FrameworkId) {
    activeFramework.value = id
  }

  return { activeFramework, activeMeta, frameworks, setFramework }
}
