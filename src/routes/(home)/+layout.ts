import type { Load } from '@sveltejs/kit'
import { locale, loadTranslations, defaultLocale } from '$lib/locale'

export const load: Load = async ({ url, params }) => {
    const { pathname } = url
    const lang = url.searchParams.get('lang')

    locale.set(lang!)

    const initLocale = lang || defaultLocale

    await loadTranslations(initLocale, pathname)

    return {}
}
