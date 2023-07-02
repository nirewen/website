<script lang="ts">
    import Icon from '@iconify/svelte'

    export let slug: string
    export let options: Record<string, string> = {}
    export let tags: string[] = []
    export let hideFooter = false

    let copied = false

    async function copy(widget: string, options: Record<string, string>) {
        const url = new URL(window.location.href)
        url.pathname = `/widgets/${widget}`
        url.search = ''

        for (let [key, value] of Object.entries(options)) {
            url.searchParams.append(key, value)
        }

        await navigator.clipboard.writeText(url.toString())

        copied = true

        setTimeout(() => (copied = false), 2000)
    }
</script>

<div class="showcase">
    <div class="widget">
        <slot name="widget" />
    </div>
    <div class="content">
        <slot />
        {#if !hideFooter}
            <div class="widget-footer">
                <div class="tags">
                    {#each tags as tag}
                        <div class="tag">{tag}</div>
                    {/each}
                </div>
                <div class="options">
                    <button class="icon" on:click={() => copy(slug, options)} data-tooltip="Copiar link">
                        <Icon icon={copied ? 'solar:check-square-bold' : 'solar:copy-bold-duotone'} />
                    </button>
                    <a class="icon" href="./widgets/{slug}/settings" role="button" data-tooltip="Configurar">
                        <Icon icon="solar:settings-bold" />
                    </a>
                </div>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    .showcase {
        display: flex;
        flex-direction: column;
        font-family: var(--font-sans);

        width: 50vw;
        background-color: #1971c2;
        border-radius: 8px;
        padding: 16px;
        margin-top: 32px;
        box-shadow: var(--elevation-2);

        .widget {
            background: white;
            height: 300px;
            overflow: hidden;
            border-radius: 8px;
            margin-top: -32px;
            box-shadow: var(--elevation-3);
            pointer-events: none;
            user-select: none;
        }

        > .content {
            display: flex;
            flex-direction: column;
            justify-content: end;
            padding: 8px;
            border-radius: inherit;
        }

        .widget-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 8px;

            .tags {
                display: flex;
                align-items: center;
                gap: 4px;

                .tag {
                    padding: 2px 16px;
                    background-color: var(--dark-bg);
                    color: var(--dark-color);
                    border-radius: 999px;
                }
            }

            .options {
                display: flex;
                align-items: center;
                gap: 4px;
            }
        }
    }
</style>
