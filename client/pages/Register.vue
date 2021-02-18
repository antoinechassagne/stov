<template>
  <fragment>
    <Heading level="1">S'inscrire</Heading>
    <input
      v-model="pseudo"
      id="pseudo"
      type="text"
      placeholder="Saisissez votre Pseudo"
      required
      class="border-2 border-indigo-400 rounded p-1"
    />
    <input
      v-model="email"
      id="email"
      type="text"
      placeholder="Saisissez votre adresse email"
      required
      class="border-2 border-indigo-400 rounded p-1"
    />
    <input
      v-model="password"
      id="password"
      type="password"
      placeholder="Saisissez votre mot de passe"
      required
      class="border-2 border-indigo-400 rounded p-1"
    />
    <button @click="DemoStart" class="border-2 border-indigo-400 rounded p-1 my-2">S'inscrire</button>
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
