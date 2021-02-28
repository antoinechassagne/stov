<template>
  <fragment>
    <main class="container mx-auto">
      <Nuxt />
    </main>
  </fragment>
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
