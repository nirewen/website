<script lang="ts">
    import { clipboard } from '$lib/hooks/clipboard'
    import Icon from '@iconify/svelte'

    export let slug: string
    export let options: Record<string, string> = {}
    export let tags: string[] = []
    export let hideFooter = false

    let { copied, copy } = clipboard()
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
                        <Icon icon={$copied ? 'solar:check-square-bold' : 'solar:copy-bold-duotone'} />
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

        width: min(100vw, 800px);
        background-color: #1971c2;
        border-radius: 8px;
        padding: 16px;
        margin: 0 1rem;
        margin-top: 32px;
        box-shadow: var(--elevation-2);

        .widget {
            position: relative;
            background: white;
            height: 300px;
            overflow: hidden;
            border-radius: 8px;
            margin-top: -32px;
            box-shadow: var(--elevation-3);
            user-select: none;

            &::before {
                content: '';
                position: absolute;
                inset: 0;
                z-index: 1;
            }

            &::after {
                content: 'Preview';
                position: absolute;
                bottom: 16px;
                right: 16px;
                background: white;
                color: black;
                padding: 4px 8px;
                border-radius: 6px;
                mix-blend-mode: difference;
                z-index: 2;
            }
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
