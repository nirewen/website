<script lang="ts">
    import type { Theme } from '$lib/types/constants'
    import type { Menu } from '$lib/types/day'
    import { scrollH } from '$lib/util/scrollH'

    export let data: Menu[]
    export let theme: Theme

    let activeIndex = 0
    $: activeTab = data.find((_, i) => i === activeIndex)!
</script>

<div class="table {theme}">
    <div class="tabs-wrapper" on:wheel={scrollH}>
        <div class="tabs">
            {#each data.map(m => m.type) as tab, i}
                {@const active = activeIndex === i}
                <button class="tab" class:active on:click={() => (activeIndex = i)}>
                    <span>{tab}</span>
                </button>
            {/each}
        </div>
    </div>
    <div class="content">
        {#each activeTab.content as content}
            <span>{content.title}</span>
        {/each}
    </div>
</div>

<style lang="scss">
    .table {
        display: flex;
        flex-direction: column;

        > .tabs-wrapper {
            display: flex;
            overflow: hidden;
            flex-shrink: 0;
            overflow-x: overlay;

            > .tabs {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 6px 0;

                > .tab {
                    border: none;
                    border-radius: 3px;
                    background: none;
                    user-select: none;
                    height: 33px;
                    transition: background 20ms ease-in 0s;
                    cursor: pointer;
                    font-size: 22px;
                    font-weight: 700;
                    white-space: nowrap;
                    padding: 0;
                    color: var(--color);

                    > span {
                        padding: 4px 8px;
                        border-radius: 4px;
                    }

                    &.active,
                    &:hover {
                        background-color: var(--tab-hover);
                    }
                }
            }
        }

        > .content {
            display: flex;
            flex-direction: column;
            overflow: auto;

            > span {
                font-size: 14px;
                min-height: 32px;
                padding: 6px 4px;
                border-bottom: 1px solid var(--line-border);
            }
        }
    }
</style>
