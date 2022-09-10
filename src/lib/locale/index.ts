import i18n, { type Config } from 'sveltekit-i18n'
import lang from './lang.json'

export const config: Config = {
    translations: {
        en: { lang },
        pt: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'core',
            loader: async () => (await import('./en/core.json')).default,
        },
        {
            locale: 'pt',
            key: 'core',
            loader: async () => (await import('./pt/core.json')).default,
        },
    ],
}

export const { t, loading, locales, locale, loadTranslations } = new i18n(config)
export const defaultLocale = 'en'

loading.subscribe($loading => $loading && console.log('Loading translations...'))
