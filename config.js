const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "http://localhost:8000",
    gaTrackingId: null,
  },
  header: {
    logo: "#",
    logoLink: "/",
    title: "Lexica",
    githubUrl: "/",
    helpUrl: "/",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/Your Data", "Global", "FAQ"],
    collapsedNav: [],
    links: [{ text: "", link: "" }],
    frontline: false,
    ignoreIndex: true,
  },
  siteMetadata: {
    title: "Lexica",
    description: "",
    ogImage: null,
    docsLocation: "",
    favicon: "",
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: "Lexica",
      short_name: "Lexica",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      display: "standalone",
      crossOrigin: "use-credentials",
      icons: [
        {
          src: "",
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
