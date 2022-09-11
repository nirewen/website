<script lang="ts">
    import { flip } from 'svelte/animate'
    import { circInOut } from 'svelte/easing'

    import { locale, locales } from '$lib/locale'
    import { clickOutside } from '$lib/directives/clickOutside'

    import langs from '$lib/locale/lang.json'

    let open = false

    function toggle() {
        open = !open
    }

    function close() {
        open = false
    }

    $: languages = $locales
        .map(lang => [lang, langs[lang as keyof typeof langs]] as const)
        .sort(([route]) => (route === $locale ? -1 : 1))
</script>

<button class:open on:click={toggle} use:clickOutside={close}>
    {#each Object.values(languages) as [route, lang] (route)}
        <a href="/{route}" class:active={$locale === route} animate:flip={{ duration: 400 }} tabindex={open ? 0 : -1}>
            <img src="https://img.icons8.com/fluency/48/{lang.icon}.png" alt="" />
            <span>{lang.name}</span>
        </a>
    {/each}
</button>

<style lang="scss">
    button {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        gap: 8px;
        padding: 6px;
        overflow: hidden;

        max-width: 48px;

        border-radius: 28px;

        background-color: #2c2e33;

        position: absolute;
        translate: -12px -12px;

        cursor: pointer;

        transition: all 200ms ease-in 400ms;

        &.open {
            max-width: 100%;

            > a {
                padding: 3px 9px 3px 3px;

                background-color: #373a40;

                > img {
                    width: 30px;
                    height: 30px;
                }

                &.active {
                    background-color: #25262b;
                }
            }
        }

        > a {
            display: flex;
            align-items: center;
            gap: 4px;

            border-radius: 20px;

            min-width: 36px;

            overflow: hidden;

            transition: all 200ms ease-in-out, padding-right 200ms ease-in-out 400ms,
                background-color 200ms ease-in-out 200ms;

            > img {
                width: 36px;
                height: 36px;
                transition: all 200ms ease-in-out;
            }
        }
    }
</style>
