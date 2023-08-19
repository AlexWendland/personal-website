<template>
  <a href="https://www.zcu.cz/en/index.html" :class=format>University of West Bohemia</a>
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