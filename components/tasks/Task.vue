<template>
  <div class="p-3 m-2 radius-2 task">
    <h3>{{ task.name }}</h3>
    <div class="flex">
      <span class="task__difficulty">{{ task.difficulty }}</span>
      <span class="task__recurrency">{{ task.recurrency }}</span>
    </div>
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
};
</script>

<style lang="scss" scoped>
.task {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 16px;

  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  &__difficulty,
  &__recurrency {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 6px 1rem;
    border-radius: 100px;
    font-weight: 300;
  }

  &__difficulty {
    background: #e7e7e7;
    margin-right: 5px;
  }

  &__recurrency {
    background: #faed60;
  }
}
</style>
