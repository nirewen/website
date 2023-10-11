<script lang="ts">
    import { t } from '$lib/locale'

    import Footer from '$lib/components/Footer.svelte'
    import Locale from '$lib/components/Locale.svelte'
    import InfoCard from '$lib/components/cards/InfoCard.svelte'
    import ProjectsCard from '$lib/components/cards/ProjectsCard.svelte'
    import SkillsCard from '$lib/components/cards/SkillsCard.svelte'
</script>

<svelte:head>
    <title>Nirewen - {$t('core.role')}</title>
</svelte:head>

<main>
    <Locale />
    <InfoCard />
    <SkillsCard />
    <ProjectsCard />
    <Footer />
</main>

<style lang="scss" global>
    @import 'src/styles/reset.scss';
    @import 'src/styles/global.scss';
    @import 'src/styles/main.scss';

    main {
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding: 4vh 1rem;
        width: 100%;
        max-width: 700px;
    }
</style>
