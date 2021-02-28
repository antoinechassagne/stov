<template>
  <swipe-list
    ref="list"
    class="card"
    :items="tasks"
    item-key="id"
    :item-disabled="({ disabled }) => disabled"
    @leftRevealed="inverseTaskState($event.item)"
    @rightRevealed="editTask($event.item)"
  >
    <template v-slot="{ item }">
      <div ref="content" class="card-content">
        <Task :task="item" />
      </div>
    </template>
    <template v-slot:left="{ item }">
      <div class="swipeout-action green">
        <i class="fa fa-heart"></i>
      </div>
    </template>
    <template v-slot:right="{ item }">
      <div class="swipeout-action orange">
        <i class="fa fa-heart"></i>
      </div>
    </template>
    <template v-slot:empty>
      <div>Pas de tâches...</div>
    </template>
  </swipe-list>
</template>

<script>
import { SwipeList, SwipeOut } from "vue-swipe-actions";
import "vue-swipe-actions/dist/vue-swipe-actions.css";
import Task from "./Task";

export default {
  name: "SwipableTasksList",
  components: {
    SwipeOut,
    SwipeList,
    Task,
  },
  props: {
    tasks: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    inverseTaskState(task) {
      this.$emit("updateTaskState", task);
    },
    editTask(task) {
      this.$router.push({ path: "/routines", query: { taskId: task.id } });
    },
  },
};
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.swipeout-action {
  display: flex;
  align-items: center;
  padding: 0 3rem;
  cursor: pointer;
  left: 0;
}
.swipeout-action.blue {
  color: white;
  background-color: rgb(0, 122, 255);
}
.swipeout-action.blue:hover {
  background-color: darken(rgb(0, 122, 255), 5%);
}
.swipeout-action.purple {
  color: white;
  background-color: rgb(88, 86, 214);
}
.swipeout-action.purple:hover {
  background-color: darken(rgb(88, 86, 214), 5%);
}
.swipeout-action.red {
  color: white;
  background-color: rgb(255, 59, 48);
}
.swipeout-action.red:hover {
  background-color: darken(rgb(255, 59, 48), 5%);
}
.swipeout-action.green {
  color: white;
  background-color: rgb(76, 217, 100);
}
.swipeout-action.green:hover {
  background-color: darken(rgb(76, 217, 100), 5%);
}
.swipeout-list-item {
  flex: 1;
  border-bottom: 1px solid lightgray;
}
.swipeout-list-item:last-of-type {
  border-bottom: none;
}
.card {
  width: 100%;
  background-color: white;
  border-radius: 3px;
  box-shadow: none;
  border: 1px solid lightgray;
}
.card-content {
  padding: 1rem;
}
.transition-right {
  transform: translate3d(100%, 0, 0) !important;
}
.transition-left {
  transform: translate3d(-100%, 0, 0) !important;
}
.toolbar {
  display: flex;
  align-items: center;
}
.toolbar .toolbar-section {
  flex: 0 0 auto;
}
.toolbar .toolbar-section--center {
  flex: 1000 1 0%;
}
</style>
