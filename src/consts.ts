// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Site } from "./types";

export const SITE_TITLE: string = "Johnny & Leslie Blog";
export const SITE_DESCRIPTION: string = 'Our journeys and experiences in our travels, stays and encounters.';

export const SITE: Site = {
    siteUrl: "https://www.johnnyleslie.com/", // Always put "/" at the end of the URL
    title: "Johnny & Leslie Blog",
    ogImage: "/johnnyleslie.png",
    keywords:
        "Personal site, landing page, blog, travel blog",
    postPerPage: 4
};
