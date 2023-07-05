<script lang="ts">
    import RuShowcase from '../widgets/ru/showcase.svelte'
    import Icon from '@iconify/svelte'

    function copy(widget: string, options: string) {
        const url = new URL(window.location.href)
        url.pathname = `/widgets/${widget}`
        url.search = options

        navigator.clipboard.writeText(url.toString())
    }
</script>

<svelte:head>
    <title>Nirewen - Widgets</title>
</svelte:head>

<header>
    <a href=".." data-tooltip="Voltar" data-sveltekit-reload>
        <Icon icon="solar:alt-arrow-left-linear" width="24" />
    </a>
    <h3>Widgets</h3>
    <div>
        <span>by</span>
        <img class="avatar" src="/images/avatar.svg" alt="Nirewen's avatar" />
        <h2>Nirewen</h2>
    </div>
</header>

<RuShowcase />

<footer>
    Mais widgets em breve
    <a class="light" role="button" href="mailto:nirewen+widgets@pm.me?subject=Sugestão%20de%20widget">
        <Icon icon="solar:letter-bold" />
        Sugerir um widget
    </a>
</footer>

<style lang="scss">
    header {
        display: flex;
        align-items: center;
        gap: 8px;

        width: min(100vw, 800px);
        padding: 8px;
        padding-right: 16px;
        border-radius: 16px;
        margin-top: 2rem;
        background-image: url('$lib/assets/card-bg.png');
        background-size: cover;
        background-position: center right;

        > a {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
        }

        h3 {
            display: flex;
            align-items: center;
            flex: 1;
        }

        div {
            display: flex;
            align-items: center;
            gap: 8px;

            > img {
                width: 28px;
                height: 28px;
            }
        }
    }

    footer {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-top: 5rem;
    }
</style>
