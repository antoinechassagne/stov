<template>

  <div class="min-h-screen flex bg-gray-50">
    <div class="max-w-md mx-auto">
      <h1 class="font-bold text-2xl text-center pt-6 pb-8">Nouvelle tâche</h1>
      <div class="mx-5">

        <div id="etape-1">
          <div class="bg-blue-10 mb-4 flex" v-if="step === 1">
            <p class="p-6">
              Choisis <b>un nom de tâche clair</b> pour que tout le monde le comprenne ; tu peux aussi donner un nom
              très personnalisé avec tes propres termes !
            </p>
            <img src="../../assets/styles/images/mainpeace.svg">
          </div>
          <BaseInput label="Nom de la tâche" placeholder="Passer le balais" type="text" class="pb-3"/>
          <ButtonSecondary v-if="step === 1" @click="nextStep">Valider le nom</ButtonSecondary>
        </div>

        <div id="etape-2" v-if="step === 2">
          <div class="bg-blue-10 mb-4" v-if="step === 2">
            <p class="p-4">
              Ensuite, choisis la <b>difficulté</b> de cette tâche : c’est à toi de la définir en fonction du logement
              ou de le pénibilité que vous associez à cette tâche.
            </p>
            <img src="../../assets/styles/images/mainrock2.svg">
          </div>
          <form>
            <label for="difficulty">Difficulté de la tâche</label>
            <div class="flex space-x-8 mt-3">
              <RadioButton label="Facile" name="difficulty" class="px-8" @click="test"/>
              <RadioButton label="Moyen" name="difficulty" class="px-8"/>
              <RadioButton label="Difficile" name="difficulty" class="px-8"/>
            </div>
          </form>



          <div id="etape-3" v-if="step === 3">
            <div class="bg-blue-10 mb-4" v-if="step !== 3">
              <p class="p-4">
                Enfin, choisis sa <b>récurrence</b> : elle te permet de différencier les tâches récurrentes quotidiennes
                (au moins une fois par jour) des tâches occassionnelles hebdomadaires (maximum une fois par semaine).
              </p>
              <img src="../../assets/styles/images/mainsavon.svg">
            </div>
            <label for="recurrency">Récurrence de la tâche</label>
            <div class="flex space-x-5 mt-3">
              <RadioButton label="Quotidienne" name="recurrency" class="px-12"/>
              <RadioButton label="Hebdomadaire" name="recurrency" class="px-12"/>
            </div>
          </div>
        </div>

        <div id="etape-4">
          <div class="bg-blue-10 mb-4" v-if="step === 4">
            <img src="../../assets/styles/images/maindoigt.svg">
            <p class="p-4">
              Et voilà ! Maintenant tu peux l’ajouter à ta liste de tâche.
            </p>
          </div>
        </div>
        <ButtonPrimary class="mt-14" disabled="true" id="createTask" @click="createTask">Créer la tâche ménagère</ButtonPrimary>
      </div>
    </div>
  </div>

</template>

<script>
import ButtonPrimary from "~/components/ButtonPrimary";
import ButtonSecondary from "~/components/ButtonSecondary";
import RadioButton from "~/components/RadioButton";
import BaseInput from "~/components/BaseInput";

export default {
  name: "CreateTask",
  data() {
    return {
      step: 1
    }
  },
  components: {
    ButtonPrimary,
    RadioButton,
    ButtonSecondary,
    BaseInput
  },
  methods: {
    nextStep() {
      this.step++;

      if(this.step === 4){
        document.getElementById('createTask').disabled = false;
      }
    },
    createTask() {
        this.$router.push("/onboarding/three");
    },
    test(){
      alert('Hello');
    }
  },
};
</script>

<style scoped></style>
