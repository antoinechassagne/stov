<template>
  <div class="steps">
    <div v-for="index in total" :key="index" class="relative">
      <div class="step" :class="getStepClasses(index)"></div>
      <span v-if="index === current" class="number">.{{ current }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
  props: ["current", "total"],
  methods: {
    getStepClasses(index) {
      return index === this.current ? "step--active" : null;
    },
  },
};
</script>

<style lang="scss" scoped>
.steps {
  display: flex;
  justify-content: center;
}

.step {
  width: 55px;
  height: 5px;
  border-radius: 50px;
  background: #4f58f5;
  margin: 0 10px;

  &--active {
    background: white;
  }
}

.number {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}
</style>
