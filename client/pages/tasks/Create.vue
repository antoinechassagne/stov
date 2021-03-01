<template>
  <fragment>
    <div class="min-h-screen flex bg-gray-50">
      <div class="max-w-md mx-auto">
        <h1 class="font-bold text-2xl text-center">Nouvelle tâche</h1>
        <div class="mx-5">
          <div class="bg-blue-10">
            <p class="p-4">
              Choisis <b>un nom de tâche clair</b> pour que tout le monde le comprenne ; tu peux aussi donner un nom très personnalisé avec tes propres termes !
            </p>
          </div>
          <BaseInput label="Nom de la tâche" placeholder="Passer le balais" type="text"></BaseInput>
          <ButtonTransparent>Valider le nom</ButtonTransparent>
          <Button>Créer la tâche ménagère</Button>
        </div>
      </div>

<!--
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
          <div class="space-x-4">
            <RadioButton name="difficulty" label="Facile"/>
            <RadioButton name="difficulty" label="Moyen"/>
            <RadioButton name="difficulty" label="Dur"/>
          </div>

        </div>

        <label class="block">
          <input class="mr-2" type="checkbox" />
          <span> Tâche quotidienne ? </span>
        </label>

        <Button>CTA =></Button>
-->

    </div>
  </fragment>
</template>

<script>
import Button from "~/components/Button";

export default {
  name: "CreateTask",
  components: {
    Button
  },
  methods: {
    createTask() {
      this.$router.push("/tasks");
    },
  },
};
</script>

<style scoped></style>
