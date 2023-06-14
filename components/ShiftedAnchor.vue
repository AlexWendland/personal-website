<template>
  <div class="shift-box">
    <slot />
    <a class="shift-anchor" :id="required_id"></a>
  </div>
</template>

<script setup>
const { required_id } = defineProps({
  required_id: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.shift-box {
  position: relative;
}

.shift-anchor {
  position: absolute;
  top: -65px;
  left: 0px;
}
</style>
