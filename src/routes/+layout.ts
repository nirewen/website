import type { Load } from '@sveltejs/kit'
import { loadTranslations, defaultLocale } from '$lib/locale'

export const load: Load = async ({ url, params }) => {
    const { pathname } = url
    const { lang } = params

    const initLocale = lang || defaultLocale

    await loadTranslations(initLocale, pathname)

    return {}
}
