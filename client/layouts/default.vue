<template>
  <fragment>
    <main class="container mx-auto">
      <Nuxt />
    </main>
  </fragment>
</template>

<script>
import { mapGetters } from "vuex";

import BaseHeader from "@/components/BaseHeader";
export default {
  name: "DefaultLayout",
  components: {
    BaseHeader,
  },
};
</script>
