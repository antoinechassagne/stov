export const state = () => ({
  loading: {
    loggedUser: false,
    register: false,
    login: false,
    logout: false,
  },
  error: {
    loggedUser: null,
    register: null,
    login: null,
    logout: null,
  },
  loggedUser: null,
});

export const getters = {
  loading: (state) => state.loading,
  error: (state) => state.error,
  loggedUser: (state) => state.loggedUser,
};

export const mutations = {
  SET_LOADING(state, update) {
    state.loading = { ...state.loading, ...update };
  },
  SET_ERROR(state, update) {
    state.error = { ...state.error, ...update };
  },
  SET_LOGGED_USER(state, loggedUser) {
    state.loggedUser = loggedUser;
  },
};

export const actions = {
  getLoggedUser(context) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { loggedUser: null });
      context.commit("SET_LOADING", { loggedUser: true });
      this.$axios
        .$get("/logged-user")
        .then((user) => {
          context.commit("SET_LOGGED_USER", user);
          resolve();
        })
        .catch((error) => {
          context.commit("SET_ERROR", { loggedUser: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { loggedUser: false });
        });
    });
  },
  registerUser(context, form) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { register: null });
      context.commit("SET_LOADING", { register: true });
      this.$axios
        .$post("/register", form)
        .then(() => {
          context.dispatch("getLoggedUser").then(() => resolve());
        })
        .catch((error) => {
          context.commit("SET_ERROR", { register: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { register: false });
        });
    });
  },
  loginUser(context, credentials) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { login: null });
      context.commit("SET_LOADING", { login: true });
      this.$axios
        .$post("/login", {
          email: credentials.email,
          password: credentials.password,
        })
        .then(() => {
          context.dispatch("getLoggedUser").then(() => resolve());
        })
        .catch((error) => {
          context.commit("SET_ERROR", { login: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { login: false });
        });
    });
  },
  logoutUser(context) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { logout: null });
      context.commit("SET_LOADING", { logout: true });
      this.$axios
        .$get("/logout")
        .then(() => {
          context.commit("SET_LOGGED_USER", null);
          resolve();
        })
        .catch((error) => {
          context.commit("SET_ERROR", { logout: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { logout: false });
        });
    });
  },
};
