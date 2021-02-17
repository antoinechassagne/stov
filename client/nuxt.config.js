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
  css: [],
  plugins: ["~/plugins/axios", "~/plugins/vue-fragment", "~/plugins/route-link"],
  components: true,
  buildModules: ["@nuxtjs/dotenv", "@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],
  axios: {
    baseURL: process.env.API_URL,
    credentials: true,
  },
};
