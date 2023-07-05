import { writable } from 'svelte/store'

export function clipboard() {
    let copied = writable(false)

    async function copy(widget: string, options: Record<string, any>) {
        const url = new URL(window.location.href)
        url.pathname = `/widgets/${widget}`
        url.search = ''

        for (let [key, value] of Object.entries(options)) {
            url.searchParams.append(key, value)
        }

        await navigator.clipboard.writeText(url.toString())

        copied.set(true)

        setTimeout(() => copied.set(false), 2000)
    }

    return { copied, copy }
}
