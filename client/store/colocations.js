export const state = () => ({
  loading: {
    create: false,
    colocation: false,
    colocations: false,
  },
  error: {
    create: null,
    colocation: null,
    colocations: null,
  },
  colocation: null,
  colocations: [],
});

export const getters = {
  loading: (state) => state.loading,
  error: (state) => state.error,
  colocation: (state) => state.colocation,
  colocations: (state) => state.colocations,
};

export const mutations = {
  SET_LOADING(state, update) {
    state.loading = { ...state.loading, ...update };
  },
  SET_ERROR(state, update) {
    state.error = { ...state.error, ...update };
  },
  SET_COLOCATION(state, colocation) {
    state.colocation = colocation;
  },
  SET_COLOCATIONS(state, colocations) {
    state.colocations = colocations;
  },
};

export const actions = {
  createColocation(context, form) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { create: null });
      context.commit("SET_LOADING", { create: true });
      this.$axios
        .$post("/colocations", form)
        .then(() => resolve())
        .catch((error) => {
          context.commit("SET_ERROR", { create: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { create: false });
        });
    });
  },
  getColocation(context, id) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { colocation: null });
      context.commit("SET_LOADING", { colocation: true });
      this.$axios
        .$get(`/colocations/${id}`)
        .then((colocation) => {
          context.commit("SET_COLOCATION", colocation);
          resolve();
        })
        .catch((error) => {
          context.commit("SET_ERROR", { colocation: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { colocation: false });
        });
    });
  },
  getColocations(context, query) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { colocations: null });
      context.commit("SET_LOADING", { colocations: true });
      this.$axios
        .$get("/colocations", { params: query })
        .then((colocations) => {
          context.commit("SET_COLOCATIONS", colocations);
          resolve();
        })
        .catch((error) => {
          context.commit("SET_ERROR", { colocations: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { colocations: false });
        });
    });
  },
};
