<template>
  <h1>Gestionnaire de tâches</h1>
</template>

<script>
export default {
  name: "RoutinePage",
  data() {
    return {
      taskExpandedId: null,
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
  created() {
    if (this.$route.query.taskId) {
      this.taskExpandedId = this.$route.query.taskId;
    }
  },
};
</script>
