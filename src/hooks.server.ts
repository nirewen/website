import type { Handle } from '@sveltejs/kit'
import { defaultLocale, locales } from '$lib/locale'

const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/)

export const handle: Handle = async ({ event, resolve }) => {
    const { url, request } = event
    const { pathname, searchParams } = url

    if (pathname !== '/') {
        return resolve(event)
    }

    // If this request is a route request
    if (routeRegex.test(pathname)) {
        // Get defined locales
        const supportedLocales = locales.get()

        // Try to get locale from `pathname`.
        let locale = supportedLocales.find(l => `${l}`.toLowerCase() === searchParams.get('lang')?.toLowerCase())

        // If route locale is not supported
        if (!locale) {
            // Get user preferred locale
            locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase()

            // Set default locale if user preferred locale does not match
            if (!supportedLocales.includes(locale)) locale = defaultLocale

            // 301 redirect
            return new Response(undefined, { headers: { location: `${pathname}?lang=${locale}` }, status: 302 })
        }

        // Add html `lang` attribute
        return resolve(event, {
            transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`),
        })
    }

    return resolve(event)
}
