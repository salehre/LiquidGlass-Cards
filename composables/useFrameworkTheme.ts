import { computed } from 'vue'
import { useState } from '#app'

export type FrameworkId = 'bootstrap' | 'tailwind' | 'vuetify'

export interface FrameworkMeta {
  id: FrameworkId
  label: string
  /** solid accent color used for buttons, borders, active states */
  color: string
  /** same color as "r, g, b" so it can be used inside rgba() */
  colorRgb: string
  /** heading shown in the dynamic content area */
  title: string
  /** description shown under the heading */
  description: string
}

export const frameworks: FrameworkMeta[] = [
  {
    id: 'bootstrap',
    label: 'Bootstrap',
    color: '#7c3aed',
    colorRgb: '124, 58, 237',
    title: 'کارت‌ها با Bootstrap',
    description:
      'در این حالت، ساختار کلاس‌بندی و کامپوننت‌های نمایشی از دل سیستم Bootstrap الهام گرفته شده — مناسب پروژه‌هایی که از قبل روی Bootstrap ساخته شدن.',
  },
  {
    id: 'tailwind',
    label: 'Tailwind',
    color: '#0ea5e9',
    colorRgb: '14, 165, 233',
    title: 'کارت‌ها با Tailwind CSS',
    description:
      'همه‌ی ۱۲ استایل کارت شیشه‌ای این پروژه با کلاس‌های اتمی Tailwind نوشته شدن؛ برای شخصی‌سازی سریع و بدون نوشتن CSS جداگانه عالیه.',
  },
  {
    id: 'vuetify',
    label: 'Vuetify',
    color: '#10b981',
    colorRgb: '16, 185, 129',
    title: 'کارت‌ها با Vuetify',
    description:
      'این حالت هماهنگ با زبان طراحی متریال و کامپوننت‌های آماده‌ی Vuetify طراحی شده — گزینه‌ی خوبی برای اپ‌های اداری و داشبوردی.',
  },
]

/**
 * Shared, SSR-safe global state (Nuxt's useState) so the header buttons in
 * app.vue and any page/component can read & write the same active framework.
 */
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
