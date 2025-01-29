import { defineSitemapEventHandler } from '#imports';
import type { SitemapUrl } from '#sitemap/types';
import { type Post } from '~/../studio/sanity.types';

export default defineSitemapEventHandler(async () => {
    const client = useSanity().client;
    const query = '*[_type == "post"] { slug, _updatedAt }';
    const blogposts = await client.fetch<Post[]>(query);
    return blogposts.map((post: any) => ({
        loc: `/post/${post.slug.current}`,
        lastmod: post._updatedAt,
        changefreq: 'weekly',
        priority: 0.8,
    }) satisfies SitemapUrl[]);
});