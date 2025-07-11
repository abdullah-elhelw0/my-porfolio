import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
    NAME: "Abdullah Elhellw",
    EMAIL: "abdullahelhelw0@gmail.com",
    NUM_POSTS_ON_HOMEPAGE: 3,
    NUM_WORKS_ON_HOMEPAGE: 2,
    NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
    TITLE: "Home",
    DESCRIPTION: "minimal and lightweight portfolio.",
};

// export const BLOG: Metadata = {
//     TITLE: "",
//     DESCRIPTION: "",
// };

export const WORK: Metadata = {
    TITLE: "Work",
    DESCRIPTION: "what I have done.",
};

export const PROJECTS: Metadata = {
    TITLE: "Projects",
    DESCRIPTION: "A collection of my projects, with links to repositories.",
};

export const SOCIALS: Socials = [
    // {
    //   NAME: "twitter-x",
    //   HREF: "https://twitter.com/markhorn_dev",
    // },
    {
        NAME: "github",
        HREF: "https://github.com/abdullah-elhelw0/",
    },
    {
        NAME: "linkedin",
        HREF: "https://www.linkedin.com/in/abdullah-elhelw/",
    },
];
