import type { Repository } from '$lib/types/repository'
import axios from 'axios'

const instance = axios.create({
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
})

export async function fetchProjects() {
    const repos = await instance
        .get<Repository[]>('https://api.github.com/users/nirewen/repos')
        .then(d => d.data)
        .then(d =>
            d.filter(repo => {
                return repo.topics.find((topic: string) => topic.startsWith('highlight-'))
            })
        )
        .then(d =>
            Promise.all(
                d.map(async repo => ({
                    name: repo.name,
                    languages: await instance.get(repo.languages_url).then(d => Object.keys(d.data)),
                    homepage: repo.homepage,
                    stars: repo.stargazers_count,
                    topics: repo.topics,
                    url: repo.html_url,
                    description: repo.description,
                }))
            )
        )
        .then(d =>
            d.sort((a, b) => {
                const highlights = [
                    a.topics.find((topic: string) => topic.startsWith('highlight-'))!,
                    b.topics.find((topic: string) => topic.startsWith('highlight-'))!,
                ]

                return highlights[0]?.localeCompare(highlights[1])
            })
        )

    return repos
}
