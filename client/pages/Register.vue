<template>
  <fragment>
    <div class="min-h-screen flex bg-gray-50">
      <div class="max-w-md mx-auto">
        <div>
          <img class="mx-auto w-100" src="../assets/images/signUpBackground.png" alt="Workflow" />
        </div>
        <div class="-mt-5 rounded-t-lg bg-white w-full h-screen">
          <h4 class="text-center mt-3 text-2xl">Créer ton profil !</h4>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import Heading from "@/components/texts/Heading";

export default {
  name: "PageRegister",
  components: {
    Heading,
  },
  methods: {
    DemoStart() {
      this.$router.push("/");
    },
  },
};
</script>
