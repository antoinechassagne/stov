<template>
  <div class="p-3 m-2 radius-2">
    {{ task.label }} - {{ getWeightLabel(task.weight) }} - {{ task.userPseudo }} - {{ task.completed }}
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getWeightLabel(weight) {
      if (weight === 1) {
        return "Facile";
      }
      if (weight === 2) {
        return "Moyen";
      }
      if (weight === 3) {
        return "Difficile";
      }
    },
  },
};
</script>
