import type { PageServerLoad } from './$types'

import { fetchProjects } from '$lib/data/projects'

export const load: PageServerLoad = async () => {
    const projects = await fetchProjects()

    return {
        projects,
    }
}
