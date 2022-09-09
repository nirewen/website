<script lang="ts">
    import Icon from '@iconify/svelte'

    export let name: string
    export let url: string
    export let icon: string
    export let side: 'top' | 'right' = 'top'
</script>

<a href={url} target="_blank" aria-label={name}>
    <Icon {icon} />
    <div class="tooltip {side}">{name}</div>
</a>

<style lang="scss">
    a {
        position: relative;
        transition: scale 50ms ease-in-out;
        height: clamp(10px, 7vw, 32px);
        width: clamp(10px, 7vw, 32px);

        &:has(.tooltip:only-child) {
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 4px;
        }

        &:is(:hover, :focus):not(:has(.tooltip:only-child)) {
            scale: 1.1;

            > .tooltip {
                display: block;
            }
        }

        > :global(svg) {
            height: clamp(10px, 7vw, 32px);
            width: clamp(10px, 7vw, 32px);
        }

        > .tooltip {
            display: none;
            position: absolute;
            padding: 4px 12px;
            background-color: #101113;
            border-radius: 4px;
            white-space: nowrap;

            &.right {
                top: -150%;
                left: 50%;
                translate: -50% 0;
            }

            &.top {
                top: -150%;
                left: 50%;
                translate: -50% 0;
            }

            @media screen and (min-width: 500px) {
                &.right {
                    top: 50%;
                    left: 125%;
                    translate: 0 -50%;
                }

                &.top {
                    top: -125%;
                    left: 50%;
                    translate: -50% 0;
                }
            }
        }
    }
</style>
