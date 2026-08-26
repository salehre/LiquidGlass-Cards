import { computed } from 'vue'
import { useState } from '#app'

/** The two "languages" the code tab can render its snippets in. */
export type LangId = 'vue' | 'react'

export interface LangMeta {
  id: LangId
  label: string
  color: string
  colorRgb: string
}

export const langs: LangMeta[] = [
  {
    id: 'vue',
    label: 'Vue',
    color: '#42B883',
    colorRgb: '66, 184, 131',
  },
  {
    id: 'react',
    label: 'React',
    color: '#61DAFB',
    colorRgb: '97, 218, 251',
  },
]

export function useFrameworkLang() {
  const activeLang = useState<LangId>('activeLang', () => 'vue')

  const activeLangMeta = computed<LangMeta>(
    () => langs.find((l) => l.id === activeLang.value) ?? langs[0],
  )

  function setLang(id: LangId) {
    activeLang.value = id
  }

  return { activeLang, activeLangMeta, langs, setLang }
}
