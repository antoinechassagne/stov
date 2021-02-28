<template>
  <div class="flex flex-col m-5 mt-3">
    <label class="mt-2 m">{{ label }}</label>
    <input class="border-2 p-2 mt-3 border-gray-30 rounded-md" :placeholder="placeholder" :type="type" />
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
