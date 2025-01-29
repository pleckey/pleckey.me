import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(async () => {
    const client = useSanity().client;
    const query = '*[_type == "post"] { slug, _updatedAt }';
    const blogposts = await client.fetch(query);
    return blogposts.map((post: any) => ({
        loc: `/post/${post.slug.current}`,
        lastmod: post._updatedAt,
        changefreq: 'weekly',
        priority: 0.8,
    }) satisfies SitemapUrlInput[]);
})