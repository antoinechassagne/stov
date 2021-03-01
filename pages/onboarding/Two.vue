<template>
  <div class="min-h-screen flex bg-gray-50">
    <div class="max-w-md mx-auto">
      <img class="header-image" src="../../assets/images/header-3.png" />
      <Steps :current="2" :total="3" class="steps" />
      <div class="rounded-t-xl bg-white w-full h-screen content">
        <h1 class="text-center text-2xl font-bold">
          {{ colocName }} <br />
          est dans la place !
        </h1>
        <p>Tu peux récupérer ton lien d’invitation maintenant ou le récupérer plus tard dans la section “Colocation”</p>
        <img src="../../assets/images/illu-4.png" />
        <BaseInput
          label="Lien d'invitation"
          placeholder="https://stov.space/foo"
          type="text"
          initialValue="https://stov.space/NcXedl"
        />
        <ButtonSecondary class="share-button">Partager</ButtonSecondary>
        <ButtonPrimary @click="goToNextPage">Commencer à créer mes tâches</ButtonPrimary>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from "@/components/Steps";
import BaseInput from "@/components/BaseInput";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";

export default {
  name: "PageOnboardingTwo",
  components: {
    Steps,
    BaseInput,
    ButtonPrimary,
    ButtonSecondary,
  },
  computed: {
    colocName() {
      return this.$route.query.colocName;
    },
  },
  methods: {
    goToNextPage() {
      this.$router.push("/onboarding/three");
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

  .share-button {
    margin-bottom: 70px;
  }
}
</style>
