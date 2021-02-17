export const state = () => ({
  loading: {
    create: false,
    taskTemplate: false,
    taskTemplates: false,
    update: false,
    delete: false,
  },
  error: {
    create: null,
    taskTemplate: null,
    taskTemplates: null,
    update: null,
    delete: null,
  },
  taskTemplate: null,
  taskTemplates: [],
});

export const getters = {
  loading: (state) => state.loading,
  error: (state) => state.error,
  taskTemplate: (state) => state.taskTemplate,
  taskTemplates: (state) => state.taskTemplates,
};

export const mutations = {
  SET_LOADING(state, update) {
    state.loading = { ...state.loading, ...update };
  },
  SET_ERROR(state, update) {
    state.error = { ...state.error, ...update };
  },
  SET_TASK_TEMPLATE(state, taskTemplate) {
    state.taskTemplate = taskTemplate;
  },
  SET_TASK_TEMPLATES(state, taskTemplates) {
    state.taskTemplates = taskTemplates;
  },
};

export const actions = {
  createTaskTemplate(context, form) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { create: null });
      context.commit("SET_LOADING", { create: true });
      this.$axios
        .$post("/task-templates", form)
        .then(() => resolve())
        .catch((error) => {
          context.commit("SET_ERROR", { create: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { create: false });
        });
    });
  },
  getTaskTemplate(context, id) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { taskTemplate: null });
      context.commit("SET_LOADING", { taskTemplate: true });
      this.$axios
        .$get(`/task-templates/${id}`)
        .then((taskTemplate) => {
          context.commit("SET_TASK_TEMPLATE", taskTemplate);
          resolve();
        })
        .catch((error) => {
          context.commit("SET_ERROR", { taskTemplate: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { taskTemplate: false });
        });
    });
  },
  getTaskTemplates(context, query) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { taskTemplates: null });
      context.commit("SET_LOADING", { taskTemplates: true });
      this.$axios
        .$get("/task-templates", { params: query })
        .then((taskTemplates) => {
          context.commit("SET_TASK_TEMPLATES", taskTemplates);
          resolve();
        })
        .catch((error) => {
          context.commit("SET_ERROR", { taskTemplates: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { taskTemplates: false });
        });
    });
  },
  updateTaskTemplate(context, payload) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { update: null });
      context.commit("SET_LOADING", { update: true });
      const { id, form } = payload;
      this.$axios
        .$put(`/task-templates/${id}`, form)
        .then(() => {
          context.dispatch("getTaskTemplate", id).then(() => resolve());
        })
        .catch((error) => {
          context.commit("SET_ERROR", { update: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { update: false });
        });
    });
  },
  deleteTaskTemplate(context, id) {
    return new Promise((resolve) => {
      context.commit("SET_ERROR", { delete: null });
      context.commit("SET_LOADING", { delete: true });
      this.$axios
        .$delete(`/task-templates/${id}`)
        .then(() => resolve())
        .catch((error) => {
          context.commit("SET_ERROR", { delete: error });
        })
        .finally(() => {
          context.commit("SET_LOADING", { delete: false });
        });
    });
  },
};
