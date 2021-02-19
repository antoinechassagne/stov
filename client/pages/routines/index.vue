<template>
  <h1>Gestionnaire de tâches</h1>
</template>

<script>
export default {
  name: "RoutinePage",
  props: {
    taskToEdit: {
      type: Object,
    },
  },
  data() {
    return {
      tasks: [
        { id: 1, label: "Vaisselle", userPseudo: "Paulo", weight: 2, daily: true },
        { id: 2, label: "Nettoyer les WC", userPseudo: "Koueks", weight: 3, daily: false },
        { id: 3, label: "Poussière", userPseudo: "Ludivine", weight: 1, daily: true },
        { id: 4, label: "Aspirateur", userPseudo: "Jessica", weight: 1, daily: false },
        { id: 5, label: "Calcaire salle de bain", userPseudo: "Teddy", weight: 3, daily: false },
        {
          id: 6,
          label: "Nettoyer les crottes de pigeon sur le balcon",
          userPseudo: "Antoine",
          weight: 3,
          daily: false,
        },
      ],
    };
  },
};
</script>
