<script lang="ts">
    import { ssp, queryParam } from 'sveltekit-search-params'
    import type { Theme } from '$lib/types/constants.js'
    import mock from '$lib/mock/ru.mock'

    import Table from './components/Table.svelte'

    let dark = queryParam('theme', ssp.string())

    export let data = { status: 200, result: mock }
    export let theme: Theme = $dark == 'dark' ? 'dark' : 'light'
</script>

<Table data={data.result} {theme} />
