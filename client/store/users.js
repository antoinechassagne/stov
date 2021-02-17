export const state = () => ({
  loading: {
    users: false,
  },
  error: {
    users: null,
  },
  user: null,
});

export const getters = {
  loading: (state) => state.loading,
  error: (state) => state.error,
  users: (state) => state.users,
};

export const mutations = {
  SET_LOADING(state, update) {
    state.loading = { ...state.loading, ...update };
  },
  SET_ERROR(state, update) {
    state.error = { ...state.error, ...update };
  },
  SET_USER(state, users) {
    state.users = users;
  },
};

export const actions = {
  getUsers(context, query) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { users: null });
      context.commit("SET_LOADING", { users: true });
      this.$axios
        .$get("/users", { params: query })
        .then((users) => {
          context.commit("SET_USERS", users);
          resolve();
        })
        .catch((error) => {
          context.commit("SET_ERROR", { users: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { users: false });
        });
    });
  },
};
