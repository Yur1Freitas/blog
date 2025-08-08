import type { CollectionEntry } from 'astro:content'

export default function getTags(posts: CollectionEntry<'posts'>[]): string[] {
    // Make the tags unique
    const tags = new Set<string>()

    // Get tags from all posts
    for (const post of posts) {
        for (const tag of post.data.tags) {
            tags.add(tag)
        }
    }

    return [...tags]
}
