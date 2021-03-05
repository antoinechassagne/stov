<template>
  <div class="min-h-screen flex bg-gray-50">
    <div class="max-w-md mx-auto">
      <img class="header-image" src="../../assets/images/header-3.png" />
      <Steps :current="3" :total="3" class="steps" />
      <div class="rounded-t-xl bg-white w-full h-screen content">
        <h1 class="text-center text-2xl font-bold">Passons aux tâches <br />ménagères</h1>
        <div v-if="edit">
          <BaseInput
            label="Nom de la tâche"
            placeholder="Passer le balais"
            type="text"
            :initialValue="task.name"
            class="pb-5 mt-10"
            @change="updateTaskName"
          />
          <div class="flex justify-between">
            <RadioButton
              class="px-6"
              @click="updateTaskDifficulty('Facile')"
              v-bind:class="
                task.difficulty === 'Facile'
                  ? 'bg-blue-70 border-none custom-inner-shadow font-bold'
                  : 'bg-white border-2 border-gray-70'
              "
            >
              Facile
            </RadioButton>
            <RadioButton
              class="px-6"
              @click="updateTaskDifficulty('Moyen')"
              v-bind:class="
                task.difficulty === 'Moyen'
                  ? 'bg-yellow-70 border-none custom-inner-shadow font-bold'
                  : 'bg-white border-2 border-gray-70'
              "
            >
              Moyen
            </RadioButton>
            <RadioButton
              class="px-6"
              @click="updateTaskDifficulty('Difficile')"
              v-bind:class="
                task.difficulty === 'Difficile'
                  ? 'bg-orange-70 border-none custom-inner-shadow font-bold'
                  : 'bg-white border-2 border-gray-70'
              "
            >
              Difficile
            </RadioButton>
          </div>
          <div>
            <label class="block mb-2 mt-7">Récurrence de la tâche</label>
            <div class="flex justify-between mb-5">
              <RadioButton
                class="px-6"
                v-bind:class="
                  task.recurrency === 'Quotidienne'
                    ? 'bg-yellow-70 border-none custom-inner-shadow font-bold'
                    : 'bg-white border-2 border-gray-70'
                "
                @click="updateTaskRecurrency('Quotidienne')"
                >Quotidienne
              </RadioButton>
              <RadioButton
                class="px-6"
                v-bind:class="
                  task.recurrency === 'Hebdomadaire'
                    ? 'bg-yellow-70 border-none custom-inner-shadow font-bold'
                    : 'bg-white border-2 border-gray-70'
                "
                @click="updateTaskRecurrency('Hebdomadaire')"
                >Hebdomadaire
              </RadioButton>
            </div>
            <ButtonSecondary @click="goToCongratulations">Valider</ButtonSecondary>
          </div>
        </div>
        <div v-else-if="task">
          <Task :task="task" class="mb-36" />
          <ButtonEdit class="m-auto mb-5" @click="editTask" />
          <p>Modifie tes tâches quand <br />tu veux avec ce bouton !</p>
        </div>
        <div v-else>
          <p class="space">Prêt à donner du travail ?</p>
          <ButtonAdd class="m-auto mb-5" @click="goToNextPage" />
          <p>Ajoute une nouvelle tâche <br />grâce à ce bouton !</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from "@/components/Steps";
import ButtonAdd from "@/components/ButtonAdd";
import ButtonEdit from "@/components/ButtonEdit";
import Task from "@/components/tasks/Task";
import BaseInput from "@/components/BaseInput";

export default {
  name: "PageOnboardingThree",
  components: {
    Steps,
    ButtonAdd,
    ButtonEdit,
    Task,
    BaseInput,
  },
  data() {
    return {
      task: null,
      edit: false,
    };
  },
  methods: {
    goToNextPage() {
      this.$router.push("/tasks/create");
    },
    goToCongratulations() {
      this.$router.push("/onboarding/congratulations");
    },
    editTask() {
      this.edit = true;
    },
    updateTaskDifficulty(value) {
      this.task.difficulty = value;
    },
    updateTaskRecurrency(value) {
      this.task.recurrency = value;
    },
    updateTaskName(value) {
      this.task.name = value;
    },
  },
  created() {
    if (!Object.keys(this.$route.query).length) {
      return;
    }
    const task = {};
    if (this.$route.query.name) task.name = this.$route.query.name;
    if (JSON.parse(this.$route.query.easy)) task.difficulty = "Facile";
    if (JSON.parse(this.$route.query.medium)) task.difficulty = "Moyen";
    if (JSON.parse(this.$route.query.hard)) task.difficulty = "Difficile";
    if (JSON.parse(this.$route.query.daily)) task.recurrency = "Quotidienne";
    if (JSON.parse(this.$route.query.weekly)) task.recurrency = "Hebdomadaire";
    this.task = task;
  },
};
</script>

<style lang="scss" scoped>
.header-image {
  height: 162px;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

.steps {
  transform: translateY(-57px);
}

.content {
  transform: translateY(-14px);
  padding: 29px 24px 16px 24px;
  position: relative;

  img {
    position: absolute;
    object-fit: contain;
    top: 23px;
    right: 0;
  }

  h1 {
    margin-bottom: 15px;
  }

  p {
    text-align: center;
    font-weight: 300;
    margin-bottom: 31px;
  }

  button {
    margin-top: 20px;
  }

  .space {
    margin-bottom: 220px;
  }
}
</style>
