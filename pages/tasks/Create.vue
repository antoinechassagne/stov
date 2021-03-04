<template>

  <div class="min-h-screen flex bg-gray-50">
    <div class="max-w-md mx-auto">
      <h1 class="font-bold text-2xl text-center pt-6 pb-8">Nouvelle tâche</h1>
      <div class="mx-5">

        <div id="etape-1">
          <div class="bg-blue-10 mb-4 flex content" v-if="step === 1">
            <p class="pt-6 pb-6 pl-6 pr-20">
              Choisis <b>un nom de tâche clair</b> pour que tout le monde le comprenne ; tu peux aussi donner un nom
              très personnalisé avec tes propres termes !
            </p>
            <img src="../../assets/styles/images/mainpeace.svg">
          </div>
          <BaseInput label="Nom de la tâche" placeholder="Passer le balais" type="text" class="pb-5"/>
          <ButtonSecondary v-if="step === 1" @click="nextStep">Valider le nom</ButtonSecondary>
        </div>

        <div id="etape-2">
          <div class="bg-blue-10 mb-4 flex content" v-if="step === 2">
            <p class="pt-6 pb-6 pl-6 pr-20">
              Ensuite, choisis la <b>difficulté</b> de cette tâche : c’est à toi de la définir en fonction du logement
              ou de le pénibilité que vous associez à cette tâche.
            </p>
            <img src="../../assets/styles/images/mainrock2.svg">
          </div>

          <div v-if="step > 1">
            <label>Difficulté de la tâche</label>
            <div class="flex space-x-8 mt-3 pb-5">
              <RadioButton class="px-8" @click="difficultyRadios(true, false, false)"
                           v-bind:class="isClickedEasy ? 'bg-blue-70 border-none shadow-inner': 'bg-white border-2 border-gray-70'">
                Facile
              </RadioButton>
              <RadioButton class="px-8" @click="difficultyRadios(false, true, false)"
                           v-bind:class="isClickedMedium ? 'bg-yellow-70 border-none shadow-inner': 'bg-white border-2 border-gray-70'">
                Moyen
              </RadioButton>
              <RadioButton class="px-8" @click="difficultyRadios(false, false, true)"
                           v-bind:class="isClickedHard ? 'bg-orange-70 border-none shadow-inner': 'bg-white border-2 border-gray-70'">
                Difficile
              </RadioButton>
            </div>
          </div>

        </div>


        <div id="etape-3">
          <div class="bg-blue-10 mb-4 flex content" v-if="step === 3">
            <p class="pt-6 pb-6 pl-6 pr-20">
              Enfin, choisis sa <b>récurrence</b> : elle te permet de différencier les tâches récurrentes quotidiennes
              (au moins une fois par jour) des tâches occassionnelles hebdomadaires (maximum une fois par semaine).
            </p>
            <img src="../../assets/styles/images/mainsavon.svg">
          </div>
          <div v-if="step > 2">
            <label>Récurrence de la tâche</label>
            <div class="flex space-x-5 mt-3 pb-5">
              <RadioButton class="px-12"
                           v-bind:class="isClickedDaily ? 'bg-yellow-70 border-none shadow-inner': 'bg-white border-2 border-gray-70'"
                           @click="defineRecurrency(true, false)">Quotidienne
              </RadioButton>
              <RadioButton class="px-12"
                           v-bind:class="isClickedWeekly ? 'bg-yellow-70 border-none shadow-inner': 'bg-white border-2 border-gray-70'"
                           @click="defineRecurrency(false,true)">Hebdomadaire
              </RadioButton>
            </div>
          </div>

        </div>

        <div id="etape-4">
          <div class="bg-blue-10 mb-4 flex content" v-if="step === 4">
            <p class="pt-6 pb-6 pl-6 pr-20">
              Et voilà ! Maintenant tu peux l’ajouter à ta liste de tâche.
            </p>
            <img src="../../assets/styles/images/maindoigt.svg">
          </div>
        </div>
        <ButtonPrimary class="mt-14" disabled="true" id="createTask" @click="createTask">Créer la tâche ménagère
        </ButtonPrimary>
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
      step: 1,
      isClickedEasy: false,
      isClickedMedium: false,
      isClickedHard: false,
      isClickedDaily: false,
      isClickedWeekly: false,
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

      if (this.step === 4) {
        document.getElementById('createTask').disabled = false;
      }
    },
    createTask() {
      this.$router.push("/onboarding/three");
    },
    difficultyRadios(easy, medium, hard) {
      this.isClickedEasy = easy;
      this.isClickedMedium = medium;
      this.isClickedHard = hard;

      this.nextStep();
    },
    defineRecurrency(daily, weekly) {
      this.isClickedDaily = daily;
      this.isClickedWeekly = weekly;
      this.nextStep();
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;

  img {
    position: absolute;
    right: 0;
    top: 60px;
  }
}
</style>
