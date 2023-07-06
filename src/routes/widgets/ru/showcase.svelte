<script lang="ts">
    import WidgetShowcase from '$lib/components/WidgetShowcase.svelte'
    import { clipboard } from '$lib/hooks/clipboard'
    import { RESTAURANTES, type Theme } from '$lib/types/constants'
    import Icon from '@iconify/svelte'
    import Table from './components/Table.svelte'
    import type { Day } from '$lib/types/day'
    import { page } from '$app/stores'

    let theme: Theme = 'light'
    let restaurante = 0
    let data: Day[][] = $page.data.result

    const { copied, copy } = clipboard()
</script>

<WidgetShowcase slug="ru" options={{ restaurante: '1' }} tags={['Tema escuro']} hideFooter>
    <svelte:fragment slot="widget">
        <Table data={data[restaurante]} {theme} />
    </svelte:fragment>
    <h2>Restaurante Universitário</h2>
    <p>Um widget que mostra o cardápio do RU da UFSM</p>
    <div class="row">
        <div class="option">
            <h3>Restaurante</h3>
            <div class="row">
                <select on:change={e => (restaurante = e.currentTarget.selectedIndex)}>
                    {#each RESTAURANTES as restaurante}
                        <option value={restaurante.numero}>{restaurante.nome}</option>
                    {/each}
                </select>
            </div>
        </div>
        <div class="option row">
            <button
                class="icon"
                on:click={() => (theme = theme === 'light' ? 'dark' : 'light')}
                data-tooltip="Tema {theme}"
            >
                <Icon icon={theme === 'dark' ? 'solar:moon-bold-duotone' : 'solar:sun-2-bold'} width="24px" />
            </button>
            <button
                class="icon"
                on:click={() => copy('ru', { restaurante: RESTAURANTES[restaurante].numero, theme })}
                data-tooltip={$copied ? 'Copiado' : 'Copiar link'}
            >
                <Icon icon={$copied ? 'solar:check-square-bold' : 'solar:copy-bold-duotone'} width="24px" />
            </button>
        </div>
    </div>
</WidgetShowcase>

<style lang="scss">
    .option {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;

        &.row {
            flex-direction: row;
            align-items: end;
        }
    }

    .row {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 4px;
    }
</style>
