<script lang="ts">
    import type { Day } from '$lib/types/day'
    import type { Theme } from '$lib/types/constants'
    import { scrollH } from '$lib/util/scrollH.js'

    import TabContent from './TabContent.svelte'

    export let data: Day[]
    export let theme: Theme

    let activeIndex = 0
    $: activeTab = data.find((_, i) => i === activeIndex)!
</script>

<div class="table {theme}">
    <div class="tabs-wrapper" on:wheel={scrollH}>
        <div class="tabs">
            {#each data as tab, i}
                {@const active = activeIndex === i}
                <button class="tab" class:active on:click={() => (activeIndex = i)}>
                    <span>{tab.weekday} - {tab.date}</span>
                </button>
            {/each}
        </div>
    </div>
    <TabContent data={activeTab.menu} {theme} />
</div>

<style lang="scss">
    .table {
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: var(--bg);
        color: var(--color);
        overflow-x: hidden;
        font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial,
            sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 130px;
            width: 50px;
            pointer-events: none;
            background: linear-gradient(to right, transparent, var(--bg));
        }

        > .tabs-wrapper {
            display: flex;
            overflow: hidden;
            overflow-x: scroll;
            flex-shrink: 0;

            > .tabs {
                display: flex;
                align-items: center;
                height: 40px;
                gap: 8px;
                box-shadow: var(--tabs-box-shadow) 0px -1px 0px inset;
                width: 100%;

                > .tab {
                    display: flex;
                    align-items: center;
                    border: none;
                    border-radius: 0;
                    background: none;
                    user-select: none;
                    transition: background 20ms ease-in 0s;
                    cursor: pointer;
                    white-space: nowrap;
                    padding: 0;
                    height: 40px;
                    color: var(--color);
                    font-size: 16px;
                    font-weight: 500;
                    border-bottom: 2px solid transparent;

                    > span {
                        display: flex;
                        align-items: center;
                        padding: 4px 8px;
                        border-radius: 4px;
                        height: 28px;

                        &:hover {
                            background-color: var(--tab-hover);
                        }
                    }

                    &.active {
                        border-bottom: 2px solid var(--color);
                    }
                }
            }
        }
    }
</style>
