<template>
  <fragment>
    <div class="min-h-screen flex bg-gray-50">
      <div class="max-w-md w-full">
        <div>
          <img class="mx-auto w-100" src="../assets/images/signUpBackground.png" alt="Workflow" />
        </div>
        <div>
          <H4>Créer ton profil !</H4>
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
