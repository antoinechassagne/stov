<template>
  <fragment>
    <heading level="1">Création d'une tâche</heading>
    <section class="space-y-5">
      <p>Je suis un texte d'explication</p>
      <div class="flex flex-col">
        <label>Nom de la tâche :</label>
        <input
          type="text"
          placeholder="Saisissez le nom de la tâche"
          required
          class="appearance-none rounded p-1 border-blue-70 border-2"
        />
      </div>
      <div class="flex flex-col">
        <label>Choisissez la difficulté de la tâche</label>
        <div>
          <button class="bg-yellow-100 p-2">1</button>
          <button class="bg-yellow-100 p-2">2</button>
          <button class="bg-yellow-100 p-2">3</button>
        </div>
      </div>

      <label class="block">
        <input class="mr-2" type="checkbox" />
        <span> Tâche quotidienne ? </span>
      </label>

      <button class="bg-blue-100 text-white" @click="createTask">CTA =></button>
    </section>
  </fragment>
</template>

<script>
import Heading from "~/components/texts/Heading";

export default {
  name: "CreateTask",
  components: {
    Heading,
  },
  methods: {
    createTask() {
      this.$router.push("/tasks");
    },
  },
};
</script>

<style scoped></style>
