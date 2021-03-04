<template>
  <div
    class="radio-btn inline-block rounded-2xl border-2 border-gray-70 h-8 text-center text-black py-1"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: ["name", "label"],
};
</script>

<style scoped>
.radio-btn {
  line-height: 1;
  display: flex;
  align-items: center;
}
</style>
