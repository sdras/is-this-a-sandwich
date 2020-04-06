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
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@sarah_edo" },
      { name: "twitter:creator", content: "@sarah_edo" },
      { name: "og:url", content: "https://isthisasandwich.netlify.com/" },
      { name: "og:title", content: "Is this a Sandwich?" },
      {
        name: "og:description",
        content: "Well, is it?",
      },
      {
        name: "og:image",
        content: "https://isthisasandwich.netlify.com/og-sandwich.png",
      },
      { name: "og:image:alt", content: "Is this a sandwich? site" },
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
