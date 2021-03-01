<template>
  <button
    @click="$emit('click')"
    class="btn w-full h-12 rounded-2xl hover:bg-yellow-70 disabled:bg-yellow-30 disabled:text-gray-70 focus:outline-none text-black text-base text-center font-semibold"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonSecondary",
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid #5b5b5b;
}
</style>
