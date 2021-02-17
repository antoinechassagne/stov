module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["plugin:vue/recommended", "plugin:prettier/recommended", "airbnb-base"],
  plugins: ["vue", "prettier"],
  rules: {},
};
