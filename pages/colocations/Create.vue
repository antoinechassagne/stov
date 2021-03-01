<template>
  <section>
    <Colocform v-if="showCreate" @trigger-succes="toggleCreate()" />
    <Colocsucces v-else />
  </section>
</template>

<script>
import Colocform from "@/components/ColocForm";
import Colocsucces from "@/components/ColocSuccess";

export default {
  name: " PageCreateColocation",
  components: {
    Colocform,
    Colocsucces,
  },
  data() {
    return {
      showCreate: true,
    };
  },
  methods: {
    toggleCreate() {
      this.showCreate = false;
    },
  },
};
</script>
