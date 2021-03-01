<template>
  <div class="flex flex-col my-3">
    <label class="mt-2 font-semibold">{{ label }}</label>
    <input class="border-2 p-3 mt-3 border-gray-10 rounded-md" :placeholder="placeholder" :type="type" />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {},
    placeholder: {},
    type: {},
  },
};
</script>
