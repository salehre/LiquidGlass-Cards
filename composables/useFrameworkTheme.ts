import { computed } from 'vue'
import { useState } from '#app'
import { useFrameworkLang } from './useFrameworkLang'

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
    title: 'with Bootstrap',
    description:
      'a popular front-end framework that provides responsive layouts and ready-made UI components for building websites quickly.',
  },
  {
    id: 'tailwind',
    label: 'Tailwind',
    color: '#00BCFF',
    colorRgb: '14, 165, 233',
    title: 'with Tailwind CSS',
    description:
      'An utility-first CSS framework that lets you build custom designs directly using predefined utility classes.',
  },
  {
    id: 'vuetify',
    label: 'Vuetify',
    color: '#42B883',
    colorRgb: '16, 185, 129',
    title: 'with Vuetify',
    description:
      'a Material Design component framework for Vue.js that provides ready-to-use, customizable UI components.',
  },
]
const vuetifyAsReact: FrameworkMeta = {
  id: 'vuetify',
  label: 'MUI',
  color: '#007FFF',
  colorRgb: '0, 127, 255',
  title: 'with MUI (Material UI)',
  description:
    "React's Material Design component library — the closest React counterpart to Vuetify, offering ready-to-use, customizable UI components.",
}

export function useFrameworkTheme() {
  const activeFramework = useState<FrameworkId>('activeFramework', () => 'tailwind')
  const { activeLang } = useFrameworkLang()

  const displayFrameworks = computed<FrameworkMeta[]>(() =>
    frameworks.map((fw) => (fw.id === 'vuetify' && activeLang.value === 'react' ? vuetifyAsReact : fw)),
  )

  const activeMeta = computed<FrameworkMeta>(
    () =>
      displayFrameworks.value.find((f) => f.id === activeFramework.value) ?? displayFrameworks.value[1],
  )

  function setFramework(id: FrameworkId) {
    activeFramework.value = id
  }

  return { activeFramework, activeMeta, frameworks: displayFrameworks, setFramework }
}
