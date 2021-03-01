<template>
  <div>
    <Heading level="1">Liste des tâches</Heading>
    <Heading level="2">Cette semaine</Heading>
    <ul>
      <li v-for="(task, index) in weekTasks" :key="index">
        {{ task.label }} - {{ getWeightLabel(task.weight) }} - {{ task.userPseudo }} - {{ task.completed }}
      </li>
    </ul>
    <Heading level="2">Aujourd'hui</Heading>
    <ul>
      <li v-for="(task, index) in todayTasks" :key="index">
        {{ task.label }} - {{ getWeightLabel(task.weight) }} - {{ task.userPseudo }} - {{ task.completed }}
      </li>
    </ul>
    <button class="rounded-full h-12 bg-blue-100 p-2 text-white" @click="goToCreateTaskPage">Nouvelle tâche</button>
    <SwipableTasksList :tasks="tasks" @updateTaskState="updateTaskState" />
  </div>
</template>

<script>
import Heading from "@/components/texts/Heading";
import SwipableTasksList from "@/components/tasks/SwipableTasksList";

export default {
  name: "PageHome",
  components: {
    Heading,
    SwipableTasksList,
  },
  data() {
    return {
      tasks: [
        { id: 1, label: "Vaisselle", userPseudo: "Paulo", weight: 2, daily: true, completed: false },
        { id: 2, label: "Nettoyer les WC", userPseudo: "Koueks", weight: 3, daily: false, completed: false },
        { id: 3, label: "Poussière", userPseudo: "Ludivine", weight: 1, daily: true, completed: false },
        { id: 4, label: "Aspirateur", userPseudo: "Jessica", weight: 1, daily: false, completed: false },
        { id: 5, label: "Calcaire salle de bain", userPseudo: "Teddy", weight: 3, daily: false, completed: false },
        {
          id: 6,
          label: "Nettoyer les crottes de pigeon sur le balcon",
          userPseudo: "Antoine",
          weight: 3,
          daily: false,
          completed: false,
        },
      ],
    };
  },
  computed: {
    todayTasks() {
      return this.tasks.filter((task) => task.daily);
    },
    weekTasks() {
      return this.tasks.filter((task) => !task.daily);
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
    goToCreateTaskPage() {
      this.$router.push("/tasks/create");
    },
    updateTaskState(task) {
      // FIXME :(
      task.completed = !task.completed;
      const taskIndex = this.tasks.find((t) => t.id === task.id);
      this.tasks.slice(taskIndex, 1);
      this.tasks.push(task);
    },
  },
};
</script>
