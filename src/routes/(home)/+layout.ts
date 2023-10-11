import { defaultLocale, loadTranslations, locale } from '$lib/locale'
import type { Load } from '@sveltejs/kit'

export const load: Load = async ({ url }) => {
    const { pathname } = url
    const lang = url.searchParams.get('lang')

    locale.set(lang!)

    const initLocale = lang || defaultLocale

    await loadTranslations(initLocale, pathname)

    return {}
}
