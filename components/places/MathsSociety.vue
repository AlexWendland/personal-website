<template>
  <a href="https://www.warwicksu.com/societies-sports/societies/maths/" :class=format>Warwick Maths Society</a>
</template>
<script setup>
  const { format } = defineProps({
    format: {
      type: String,
      required: false,
      default: "link link-primary"
    }
  });
</script>