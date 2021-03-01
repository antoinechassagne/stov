<template>
  <main class="container mx-auto">
    <Nuxt />
  </main>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
export default {
  name: "DefaultLayout",
  components: {
    BaseHeader,
  },
};
</script>
