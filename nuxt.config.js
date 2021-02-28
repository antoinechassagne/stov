export default {
  target: "server",
  head: {
    title: "Støv",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Støv",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["~/assets/styles/main.scss"],
  plugins: ["~/plugins/vue-fragment", "~/plugins/route-link"],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/pwa"],
  modules: ["@nuxtjs/pwa"],
  pwa: {
    icon: {
      source: "static/icon.png",
    },
    meta: {
      title: "Støv",
    },
    manifest: {
      name: "stov",
      lang: "en",
    },
  },
};
