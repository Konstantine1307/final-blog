import type { CollectionEntry } from "astro:content";

const getLatestPost = (posts: CollectionEntry<"blog">[]) => {
    const sortedPosts = posts
        .filter(({ data }) => !data.draft)
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

    return sortedPosts.length > 0 ? [sortedPosts[0]] : [];
};

export default getLatestPost;
