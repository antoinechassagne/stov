<template>
  <div class="min-h-screen flex bg-gray-50">
    <div class="max-w-md mx-auto">
      <img class="header-image" src="../../assets/images/header-3.png" />
      <Steps :current="1" :total="3" class="steps" />
      <div class="rounded-t-xl bg-white w-full h-screen content">
        <img src="../../assets/images/illu-3.png" />
        <h1 class="text-center text-2xl font-bold">Crée ta coloc !</h1>
        <p>Pour commencer, il te faut un nom de colocation pour ton Støv.</p>
        <BaseInput
          label="Choisis un nom stylé"
          placeholder="La Loft Story"
          type="text"
          class="mb-5"
          @change="updateColocName"
        />
        <ButtonPrimary @click="goToNextPage">C'est parti</ButtonPrimary>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from "@/components/Steps";
import BaseInput from "@/components/BaseInput";
import ButtonPrimary from "@/components/ButtonPrimary";

export default {
  name: "PageOnboardingOne",
  components: {
    Steps,
    BaseInput,
    ButtonPrimary,
  },
  data() {
    return {
      colocName: "",
    };
  },
  methods: {
    goToNextPage() {
      this.$router.push({ path: "/onboarding/two", query: { colocName: this.colocName } });
    },
    updateColocName(name) {
      this.colocName = name;
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
  padding: 15px 24px 16px 24px;

  img {
    margin: 0 auto 17px;
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
}
</style>
