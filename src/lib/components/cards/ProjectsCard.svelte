<script lang="ts">
    import { page } from '$app/stores'
    import { t } from '$lib/locale'

    import type { Project as IProject } from '$lib/../types/Project'
    import Project from '../Project.svelte'

    let projects: IProject[] = $page.data.projects
</script>

<section>
    <h4>{$t('core.projects.title')}</h4>
    <ul class="list">
        {#each projects as project}
            <li>
                <Project {project} />
            </li>
        {/each}
    </ul>
    <footer>
        <a href="https://github.com/nirewen?tab=repositories" target="_blank">
            {@html $t('core.projects.more')}
        </a>
    </footer>
</section>

<style lang="scss">
    section {
        border-radius: 12px;
        background-color: #228be6;

        > h4 {
            padding: 8px 16px;
            font-size: 1.25rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        > .list > li {
            padding: 8px 16px;

            &:nth-child(2n) {
                background-color: #1971c2;
            }

            &:nth-child(2n + 1) {
                background-color: #1c7ed6;
            }
        }

        > footer {
            padding: 8px 16px;
            background-color: #1864ab;
            border-radius: 0 0 12px 12px;
            text-align: center;
        }
    }
</style>
