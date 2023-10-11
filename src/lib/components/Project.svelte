<script lang="ts">
    import Icon from '@iconify/svelte'

    import type { Project } from '$lib/../types/Project'

    export let project: Project

    let { name, url, homepage, languages, stars, topics, description } = project

    $: filteredTopics = topics.filter(topic => !['active', 'highlight-'].some(prefix => topic.startsWith(prefix)))

    const languageIcons: Record<string, string> = {
        TypeScript: 'simple-icons:typescript',
        JavaScript: 'simple-icons:javascript',
        Svelte: 'cib:svelte',
        SCSS: 'simple-icons:sass',
        HTML: 'simple-icons:html5',
        CSS: 'simple-icons:css3',
        Dockerfile: 'simple-icons:docker',
    }
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
    {#if stars}
        <span class="stars">
            <Icon icon="octicon:star-24" />
            {stars}
        </span>
    {/if}
</header>
<span class="description">{description}</span>
<div class="footer">
    <a href={url} target="_blank">
        <Icon icon="fa-brands:github" />
        GitHub
    </a>
    <div class="topics">
        {#each filteredTopics as topic}
            <span class="topic">{topic}</span>
        {/each}
    </div>
    <div class="icons">
        {#each languages as language}
            {@const icon = languageIcons[language]}
            <div class="language-icon">
                <Icon {icon} height="18px" />
                <div class="tooltip top">{language}</div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .name {
        display: flex;
        align-items: center;
        font-size: 1.15rem;
        font-weight: 600;

        > a {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        > .stars {
            display: flex;
            align-items: center;
            gap: 4px;
            margin-left: auto;
            font-weight: 400;
            font-size: 0.9rem;
            padding: 4px 8px;
            background-color: #00000020;
            border-radius: 4px;
        }
    }

    .footer {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 4px;

        > .topics {
            display: flex;
            align-items: center;
            gap: 4px;
            margin-left: 0.5rem;

            .topic {
                padding: 4px 8px;
                background-color: #00000030;
                border-radius: 99px;
                font-size: 12px;
            }
        }

        > .icons {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 4px;
            margin-left: auto;

            background-color: #00000030;
            border-radius: 4px;

            > .language-icon {
                position: relative;

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

                > .tooltip {
                    display: none;
                    position: absolute;
                    padding: 4px 12px;
                    background-color: #101113;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: 12px;

                    &.top {
                        top: -150%;
                        left: 50%;
                        translate: -50% 0;
                    }
                }
            }
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
