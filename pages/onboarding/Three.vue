<template>
  <div class="min-h-screen flex bg-gray-50">
    <div class="max-w-md mx-auto">
      <img class="header-image" src="../../assets/images/header-3.png" />
      <Steps :current="3" :total="3" class="steps" />
      <div class="rounded-t-xl bg-white w-full h-screen content">
        <h1 class="text-center text-2xl font-bold">Passons aux tâches ménagères</h1>
        <p class="space">Prêt à donner du travail ?</p>
        <ButtonAdd class="m-auto mb-5" @click="goToNextPage" />
        <p>Ajoute une nouvelle tâche <br />grâce à ce bouton !</p>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from "@/components/Steps";
import ButtonAdd from "@/components/ButtonAdd";

export default {
  name: "PageOnboardingThree",
  components: {
    Steps,
    ButtonAdd,
  },
  methods: {
    goToNextPage() {
      this.$router.push("/tasks/create");
    },
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
    margin-bottom: 260px;
  }
}
</style>
