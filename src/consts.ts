// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Site } from "./types";

export const SITE_TITLE: string = "Johnny & Leslie Blog";
export const SITE_DESCRIPTION: string = 'Our journeys and experiences in our travels, stays and encounters.';

export const SITE: Site = {
    siteUrl: "https://final-blog-nine.vercel.app/", // Always put "/" at the end of the URL
    author: "johnnyleslie",
    desc: "A personal portfolio landing template for developers and designers.",
    title: "Travel Blog",
    ogImage: "images/astro-lane.png",
    keywords:
        "Personal portfolio, landing page, page template, developer portfoliom designer portfolio",
    postPerPage: 4
};
