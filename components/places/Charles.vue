<template>
  <a href="https://cuni.cz/uken-1.html" :class=format>Charles University</a>
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