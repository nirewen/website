<script lang="ts">
    import { t } from '$lib/locale'

    import Icon from '@iconify/svelte'
    import type { Project } from 'src/types/Project'

    export let project: Project

    let { name, url, homepage, icons } = project
</script>

<header class="name">
    {#if homepage}
        <a href={homepage} target="_blank">
            {name}
            <Icon icon="ci:external-link" />
        </a>
    {:else}
        {name}
    {/if}
</header>
<span class="description">{$t(`core.projects.${name}`)}</span>
<div class="footer">
    <a href={url} target="_blank">
        <Icon icon="fa-brands:github" />
        GitHub
    </a>
    <div class="icons">
        {#each icons as icon}
            <Icon {icon} height="18px" />
        {/each}
    </div>
</div>

<style lang="scss">
    .name {
        font-size: 1.15rem;
        font-weight: 600;

        > a {
            display: flex;
            align-items: center;
            gap: 4px;
        }
    }

    .footer {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 4px;

        > .icons {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 4px;
            margin-left: auto;

            background-color: #00000030;
            border-radius: 4px;
        }

        > a {
            display: flex;
            align-items: center;
            gap: 6px;

            padding: 4px 8px;
            background-color: #00000044;
            line-height: 18px;
            border-radius: 4px;

            &:hover {
                background-color: #00000050;
            }
        }
    }
</style>
