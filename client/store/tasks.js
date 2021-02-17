export const state = () => ({
  loading: {
    task: false,
    tasks: false,
  },
  error: {
    task: null,
    tasks: null,
  },
  task: null,
  tasks: [],
});

export const getters = {
  loading: (state) => state.loading,
  error: (state) => state.error,
  task: (state) => state.task,
  tasks: (state) => state.tasks,
};

export const mutations = {
  SET_LOADING(state, update) {
    state.loading = { ...state.loading, ...update };
  },
  SET_ERROR(state, update) {
    state.error = { ...state.error, ...update };
  },
  SET_TASK(state, task) {
    state.task = task;
  },
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
};

export const actions = {
  getTask(context, id) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { task: null });
      context.commit("SET_LOADING", { task: true });
      this.$axios
        .$get(`/tasks/${id}`)
        .then((task) => {
          context.commit("SET_TASK", task);
          resolve();
        })
        .catch((error) => {
          context.commit("SET_ERROR", { task: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { task: false });
        });
    });
  },
  getTasks(context, query) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { tasks: null });
      context.commit("SET_LOADING", { tasks: true });
      this.$axios
        .$get("/tasks", { params: query })
        .then((tasks) => {
          context.commit("SET_TASKS", tasks);
          resolve();
        })
        .catch((error) => {
          context.commit("SET_ERROR", { tasks: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { tasks: false });
        });
    });
  },
};
