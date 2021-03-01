<template>
  <div class="min-h-screen flex bg-gray-50">
    <div class="max-w-md mx-auto relative">
      <img class="header-image" src="../../assets/images/illu-5.png" />
      <div class="content">
        <h1 class="text-center text-2xl font-bold text-white">Bravo !</h1>
        <p class="text-white text-center">
          Tu as renseigné les tâches ménagères de ta colocation. Tu peux revenir modifier tes tâches autant de fois que
          tu le veux depuis l’écran d’accueil.
        </p>
        <ButtonPrimary @click="goToNextPage">Aller à l’accueil</ButtonPrimary>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/ButtonPrimary";

export default {
  name: "PageOnboardingCongratulations",
  components: {
    ButtonPrimary,
  },
  methods: {
    goToNextPage() {
      this.$router.push("/colocation");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-image {
  height: 667px;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

.content {
  position: absolute;
  bottom: 0;
  padding: 26px 24px;

  h1 {
    margin-bottom: 22px;
  }

  p {
    margin: 0 auto 82px auto;
    width: 75%;
  }
}
</style>
