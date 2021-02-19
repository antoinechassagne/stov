<template>
  <div class="inline-block rounded-2xl bg-white checked:bg-yellow-100 border-2 border-black h-8 checked:bg-yellow-100 checked:border-transparent font-semibold text-center text-black w-40">
    <input type="radio" :name="name" class="hidden">
    <label> {{label}} </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: ['name', 'label']
}
</script>

<style scoped>

</style>
