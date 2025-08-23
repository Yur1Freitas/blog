import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'

import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../config'

const posts = await getCollection('posts')
const sortedPosts = posts.sort(
    (a, b) => 
        new Date(b.data.updated || b.data.added).valueOf() - 
        new Date(a.data.updated || a.data.added).valueOf()
)

export const GET = () =>
    rss({
        site: SITE_URL,
        title: SITE_TITLE || '',
        description: SITE_DESCRIPTION || '',
        items: sortedPosts.map((post) => {
            return {
                link: `/post/${post.data.slug}`,
                title: post.data.title,
                pubDate: post.data.added,
                description: post.data.description,
                content: post.rendered.html,
                customData: `<updated>${post.data.updated ? post.data.updated : ''}</updated>`
            }
        }),
        stylesheet: 'rss/styles.xsl'
    })
