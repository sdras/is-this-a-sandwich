export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Is this a sandwich?",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      { name: "twitter:card", content: "Vote on whether this is a sandwich" },
      { name: "twitter:site", content: "@sarah_edo" },
      { name: "twitter:title", content: "Is this a Sandwich?" },
      {
        name: "twitter:description",
        content: "Well, is it?",
      },
      {
        name: "twitter:image",
        content: "https://isthisasandwich.netlify.com/og-twitter.png",
      },
      { name: "twitter:image:alt", content: "Is this a sandwich? site" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Sen:400,800|Marck+Script&display=swap",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
