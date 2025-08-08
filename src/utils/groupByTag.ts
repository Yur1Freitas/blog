import type { CollectionEntry } from 'astro:content'

type PostsGroupedByTag = Record<string, CollectionEntry<'posts'>[]>

export default function groupByTag(posts: CollectionEntry<'posts'>[]): PostsGroupedByTag {
    const result: PostsGroupedByTag = {}

    for (const post of posts) {
        for (const tag of post.data.tags) {
            if (!Object.prototype.hasOwnProperty.call(result, tag)) result[tag] = []

            result[tag].push(post)
        }
    }

    return result
}
