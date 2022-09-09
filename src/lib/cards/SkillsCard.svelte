<script lang="ts">
    import IconLink from '../IconLink.svelte'
    import skills from '../../data/skills.json'
</script>

<section>
    <h4>Skills</h4>
    {#each Object.entries(skills) as [title, links]}
        <div class="section">
            <h2>{title}</h2>
            <div class="links">
                {#each links as link}
                    <IconLink {...link} />
                {/each}
            </div>
        </div>
    {/each}
</section>

<style lang="scss">
    section {
        border-radius: 12px;
        background-color: #12b886;

        > * {
            padding: 8px 16px;
        }

        > h4 {
            font-size: 1.25rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        > .section {
            display: flex;
            flex-direction: column;
            gap: 4px;

            > h2 {
                font-size: 0.9rem;
            }

            > .links {
                display: flex;
                align-items: center;
                gap: 16px;
                padding-bottom: 8px;
                min-height: 10px;
            }

            &:nth-of-type(1) {
                background-color: #0ca678;
            }

            &:nth-of-type(2) {
                background-color: #099268;
            }

            &:nth-of-type(3) {
                background-color: #087f5b;
            }

            &:last-child {
                border-radius: 0 0 12px 12px;
            }
        }
    }
</style>
