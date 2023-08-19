<template>
  <a href="https://gacr.cz/en/" :class=format>Czech Science Foundation</a>
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