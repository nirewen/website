<script lang="ts">
    import WidgetShowcase from '$lib/components/WidgetShowcase.svelte'
    import { clipboard } from '$lib/hooks/clipboard'
    import { RESTAURANTES, type Theme } from '$lib/types/constants'
    import Icon from '@iconify/svelte'
    import RuWidget from '../+page.svelte'

    let theme: Theme = 'dark'
    let restaurante = '1'

    const { copied, copy } = clipboard()

    function selectRestaurante(index: number) {
        restaurante = RESTAURANTES[index].numero.toString()
    }
</script>

<header>
    <a href=".." data-tooltip="Voltar">
        <Icon icon="solar:alt-arrow-left-linear" />
    </a>
    <div>
        <h2>Configurar widget</h2>
    </div>
</header>

<WidgetShowcase slug="ru" options={{ restaurante: '1' }} tags={['Tema escuro']} hideFooter>
    <svelte:fragment slot="widget">
        <RuWidget {theme} />
    </svelte:fragment>
    <div class="row">
        <div class="option">
            <h3>Tema</h3>
            <div class="row">
                <button class:light={theme !== 'light'} on:click={() => (theme = 'light')}> Claro </button>
                <button class:light={theme !== 'dark'} on:click={() => (theme = 'dark')}> Escuro </button>
            </div>
        </div>
        <div class="option">
            <h3>Restaurante</h3>
            <div class="row">
                <select on:change={e => selectRestaurante(e.currentTarget.selectedIndex)}>
                    {#each RESTAURANTES as restaurante}
                        <option value={restaurante.numero}>{restaurante.nome}</option>
                    {/each}
                </select>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="alert">Nota: o conteúdo do widget acima é só de exemplo</div>
        <button on:click={() => copy('ru', { restaurante, theme })}>
            <Icon icon={copied ? 'solar:check-square-bold' : 'solar:copy-bold-duotone'} />
            Copiar link
        </button>
    </div>
</WidgetShowcase>

<style lang="scss">
    header {
        display: flex;
        align-items: center;

        > h1 {
            justify-self: center;
        }
    }

    .option {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
    }

    .row {
        display: flex;
        gap: 4px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 6px;
    }
</style>
