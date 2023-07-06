import type { Day } from '$lib/types/day.js'
import { redirect } from '@sveltejs/kit'

export const load = async ({ url, fetch }) => {
    const restaurante = url.searchParams.get('restaurante')

    if (!restaurante) {
        throw redirect(302, './ru?restaurante=1')
    }

    const resourceUrl = `/api/ru/${restaurante}?omit=ingredients`
    const res = await fetch(resourceUrl)

    return {
        status: res.status,
        result: (await res.json()) as Day[],
    }
}
