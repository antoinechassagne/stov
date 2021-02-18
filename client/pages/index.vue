<template>
  <fragment>
    <Heading level="1">Liste des tâches</Heading>
    <Heading level="2">Cette semaine</Heading>
    <ul>
      <li v-for="(task, index) in weekTasks" :key="index">
        {{ task.label }} - {{ getWeightLabel(task.weight) }} - {{ task.userPseudo }}
      </li>
    </ul>
    <Heading level="2">Aujourd'hui</Heading>
    <ul>
      <li v-for="(task, index) in todayTasks" :key="index">
        {{ task.label }} - {{ getWeightLabel(task.weight) }} - {{ task.userPseudo }}
      </li>
    </ul>
    <button class="rounded-full h-12 bg-blue-100 p-2 text-white" @click="goToCreateTaskPage">Nouvelle tâche</button>
  </fragment>
</template>

<script>
import { mapGetters } from "vuex";
import Heading from "@/components/texts/Heading";

export default {
  name: "PageHome",
  components: {
    Heading,
  },
  data() {
    return {
      tasks: [
        { label: "Vaisselle", userPseudo: "Paulo", weight: 2, daily: true },
        { label: "Nettoyer les WC", userPseudo: "Koueks", weight: 3, daily: false },
        { label: "Poussière", userPseudo: "Ludivine", weight: 1, daily: true },
        { label: "Aspirateur", userPseudo: "Jessica", weight: 1, daily: false },
        { label: "Calcaire salle de bain", userPseudo: "Teddy", weight: 3, daily: false },
        { label: "Nettoyer les crottes de pigeon sur le balcon", userPseudo: "Antoine", weight: 3, daily: false },
      ],
    };
  },
  computed: {
    ...mapGetters({
      loggedUser: "authentication/loggedUser",
    }),
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
  },
};
</script>
