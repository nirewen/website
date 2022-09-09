<script lang="ts">
    import InfoCard from '$lib/cards/InfoCard.svelte'
    import SkillsCard from '$lib/cards/SkillsCard.svelte'
    import ProjectsCard from '$lib/cards/ProjectsCard.svelte'
    import Footer from '$lib/Footer.svelte'
</script>

<main>
    <InfoCard />
    <SkillsCard />
    <ProjectsCard />
    <Footer />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding: 4vh 1rem;
        width: 100%;
        max-width: 700px;
    }
</style>
