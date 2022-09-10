<script lang="ts">
    import Project from '../Project.svelte'
    import projects from '$lib/data/projects.json'
</script>

<section>
    <h4>Projects</h4>
    <ul class="list">
        {#each projects as project}
            <li>
                <Project {project} />
            </li>
        {/each}
    </ul>
    <footer>
        <a href="https://github.com/nirewen?tab=repositories" target="_blank">More projects on my <b>GitHub</b></a>
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
