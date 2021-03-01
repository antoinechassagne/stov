<template>
  <div class="min-h-screen flex bg-gray-50">
    <div class="max-w-md mx-auto">
      <img class="header-image" src="../assets/images/header-1.png" />
      <div class="rounded-t-xl bg-white w-full h-screen content">
        <h1 class="text-center text-2xl font-bold">Crée ton profil !</h1>
        <BaseInput label="Choisis un pseudo" placeholder="john" type="text" class="mb-5" />
        <BaseInput label="Entre ton adresse email" placeholder="john@john.com" type="mail" class="mb-5" />
        <BaseInput label="Choisis un mot de passe" type="Password" class="mb-5" />
        <ButtonPrimary @click="goToNextPage">Créer mon compte</ButtonPrimary>
        <a href="#" class="link">Connexion</a>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import ButtonPrimary from "@/components/ButtonPrimary";

export default {
  name: "PageRegister",
  components: {
    BaseInput,
    ButtonPrimary,
  },
  methods: {
    goToNextPage() {
      this.$router.push("/onboarding");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-image {
  height: 214px;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

.content {
  transform: translateY(-14px);
  padding: 25px 24px 16px 24px;

  h1 {
    margin-bottom: 15px;
  }

  .link {
    display: block;
    color: blue;
    text-decoration: underline;
    font-weight: 600;
    text-align: center;
    margin-top: 15px;
  }
}
</style>
