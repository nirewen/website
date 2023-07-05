import { RESTAURANTES } from '$lib/types/constants.js'

export const load = async ({ fetch }) => {
    const result = Promise.all(
        RESTAURANTES.map(r => {
            return fetch(`/api/ru/${r.numero}?omit=ingredients`).then(r => r.json())
        })
    )

    return { result }
}
