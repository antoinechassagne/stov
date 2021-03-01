<template>

    <div class="min-h-screen flex bg-gray-50">
      <div class="max-w-md mx-auto">
        <h1 class="font-bold text-2xl text-center">Nouvelle tâche</h1>
        <div class="mx-5">

          <div id="etape-1">
            <div class="bg-blue-10">
              <p class="p-4">
                Choisis <b>un nom de tâche clair</b> pour que tout le monde le comprenne ; tu peux aussi donner un nom très personnalisé avec tes propres termes !
              </p>
            </div>
            <BaseInput label="Nom de la tâche" placeholder="Passer le balais" type="text" class="pb-3"/>
            <ButtonSecondary>Valider le nom</ButtonSecondary>
          </div>

          <div id="etape-2">
            <div class="bg-blue-10">
              <p class="p-4">
                Ensuite, choisis la <b>difficulté</b> de cette tâche :  c’est à toi de la définir en fonction du logement ou de le pénibilité que vous associez à cette tâche.
              </p>
            </div>
            <label for="difficulty">Difficulté de la tâche</label>
            <div class="flex space-x-5">
              <RadioButton label="Facile" name="difficulty" class="px-6"/>
              <RadioButton label="Moyen" name="difficulty" class="px-6"/>
              <RadioButton label="Difficile" name="difficulty" class="px-6"/>
            </div>


            <div id="etape-3">
              <div class="bg-blue-10">
                <p class="p-4">
                  Enfin, choisis sa <b>récurrence</b> : elle te permet de différencier les tâches récurrentes quotidiennes (au moins une fois par jour) des tâches occassionnelles hebdomadaires (maximum une fois par semaine).                </p>
              </div>
              <label for="recurrency">Récurrence de la tâche</label>
              <div class="flex space-x-5">
                <RadioButton label="Quotidienne" name="recurrency" class="px-8"/>
                <RadioButton label="Hebdomadaire" name="recurrency" class="px-8"/>
              </div>
            </div>
          </div>

          <ButtonPrimary>Créer la tâche ménagère</ButtonPrimary>
        </div>
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
</template>

<script>
import ButtonPrimary from "~/components/ButtonPrimary";

export default {
  name: "CreateTask",
  components: {
    ButtonPrimary,
  },
  methods: {
    createTask() {
      this.$router.push("/tasks");
    },
  },
};
</script>

<style scoped></style>
