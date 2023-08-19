<template>
  <a href="https://warwick.ac.uk/" :class=format>University of Warwick</a>
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