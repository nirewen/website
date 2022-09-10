<script lang="ts">
    import Icon from '@iconify/svelte'
    import { locale, locales } from '$lib/locale'

    import langs from '$lib/locale/lang.json'

    let open = false

    function toggle() {
        open = !open
    }

    $: languages = $locales
        .map(lang => [lang, langs[lang as keyof typeof langs]] as const)
        .sort(([route]) => (route === $locale ? -1 : 1))
</script>

<section class:open on:click={toggle}>
    {#each Object.values(languages) as [route, lang]}
        <a href="/{route}" class:active={$locale === route}>
            <img src="https://img.icons8.com/fluency/48/{lang.icon}.png" alt="" />
            <span>{lang.name}</span>
        </a>
    {/each}
</section>

<style lang="scss">
    section {
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

        transition: all 200ms ease-in 200ms;

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

            transition: all 200ms ease-in-out, padding-right 200ms ease-in-out 200ms,
                background-color 200ms ease-in-out 200ms;

            > img {
                width: 36px;
                height: 36px;
                transition: all 200ms ease-in-out;
            }
        }
    }
</style>
