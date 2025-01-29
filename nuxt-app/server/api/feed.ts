// server/routes/rss.ts
import RSS from 'rss';
import { createClient } from '@sanity/client';

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig(event);
        // create new rss feed this will be our channel tag with website title and url
        const feed = new RSS({
            title: 'Patrick Leckey',
            site_url: 'https://pleckey.me', // link to your website/blog
            feed_url: `https://pleckey.me/feed`, // path to your rss feed
        });
        
        // fetch data from dev.to
        const query = '*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)';
        const sanity = createClient({
            projectId: config.public.sanity.projectId,
            dataset: config.public.sanity.dataset,
            apiVersion: config.public.sanity.apiVersion,
            useCdn: true,
        });
        const blogposts = await sanity.fetch(query);

        if (blogposts) {
            blogposts.forEach((post: any) => {
                feed.item({
                    title: post.title || 'Untitled Post',
                    url: `https://pleckey.me/post/${post.slug?.current || ''}`,
                    date: post._createdAt || new Date(),
                    description: post.excerpt || '',
                });
            });
        }

        setResponseHeader(event, 'Content-Type', 'text/xml');
        return feed.xml({ indent: true }); //This returns the XML as a string.
    } catch (e) {
        return e;
    }
});