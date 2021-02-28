<template>
  <div class="flex flex-col">
    <label class="label">{{ label }}</label>
    <input class="input" :placeholder="placeholder" :type="type" />
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

<style lang="scss" scoped>
.label {
  margin-bottom: 3px;
}

.input {
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 22px;
  color: #b9b9b9;
  font-weight: 300;

  &:focus {
    outline-color: #0410f1;
  }
}
</style>
