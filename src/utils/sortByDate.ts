import type { CollectionEntry } from 'astro:content'

type PostsSortedByDate = CollectionEntry<'posts'>[]

export default function sortByDate(posts: CollectionEntry<'posts'>[]): PostsSortedByDate {
    return posts.sort(
        (a, b) =>
            new Date(b.data.updated || b.data.added).valueOf() - new Date(a.data.updated || a.data.added).valueOf()
    )
}
