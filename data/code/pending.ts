import type { CardFrameworkCode } from '../types'

/** Shown for any card whose framework code hasn't been written yet. */
export const pendingCode: CardFrameworkCode = {
  tailwind: '<!-- در انتظار دریافت کد CSS برای ترجمه به Tailwind... -->',
  bootstrap: '<!-- در انتظار دریافت کد CSS برای ترجمه به Bootstrap... -->',
  vuetify: '<!-- در انتظار دریافت کد CSS برای ترجمه به Vuetify... -->',
}
