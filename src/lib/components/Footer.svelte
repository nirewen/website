<script lang="ts">
    import { t } from '$lib/locale'

    import Icon from '@iconify/svelte'
</script>

<footer>
    {$t('core.footer.0')}
    <Icon icon="bi:heart-fill" height="14px" color="F03E3E" />
    <span class="sr-only">{$t('core.footer.1')}</span>
    {$t('core.footer.2')}
    <a href="https://kit.svelte.dev" target="_blank" aria-label="svelte kit">
        <Icon icon="logos:svelte-kit" />
    </a>
</footer>

<style lang="scss">
    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;

        padding: 8px;

        border-radius: 32px;
        background-color: #25262b;

        > a {
            padding: 4px;
            background-color: #ffffff;
            border-radius: 4px;
        }

        > .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
    }
</style>
