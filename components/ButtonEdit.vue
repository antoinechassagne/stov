<template>
  <button @click="$emit('click')">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.6289 4.37027L19.6299 10.3712L6.5991 23.402L1.24879 23.9926C0.53254 24.0718 -0.0726159 23.4662 0.00707158 22.75L0.602384 17.3959L13.6289 4.37027ZM23.3414 3.47684L20.5238 0.65918C19.6449 -0.219727 18.2194 -0.219727 17.3405 0.65918L14.6897 3.30996L20.6907 9.3109L23.3414 6.66012C24.2204 5.78074 24.2204 4.35574 23.3414 3.47684Z"
        fill="black"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "ButtonEdit",
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8e51c;
  padding: 18px;
  border-radius: 50%;
}
</style>
