<template>
  <fragment>
    <div class="min-h-screen flex bg-gray-50">
      <div class="max-w-md mx-auto">
        <div>
          <img class="mx-auto w-100" src="../assets/images/signUpBackground.png" alt="Workflow" />
        </div>
        <div class="rounded-t-xl bg-white w-full h-screen translate-top">
          <h4 class="text-center pt-10 text-2xl font-bold">Créer ton profil !</h4>
          <BaseInput label="Choisir un pseudo" placeholder="john" type="text"></BaseInput>
          <BaseInput label="Entre ton addresse email" placeholder="john@john.com" type="mail"></BaseInput>
          <BaseInput label="Choisis un mot de passe" placeholder="" type="Password"></BaseInput>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import Heading from "@/components/texts/Heading";
import BaseInput from "@/components/BaseInput";

export default {
  name: "PageRegister",
  components: {
    Heading,
    BaseInput,
  },
  methods: {
    DemoStart() {
      this.$router.push("/");
    },
  },
};
</script>
