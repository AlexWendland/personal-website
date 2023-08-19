<template>
  <NuxtLink :class=format to="/work#ccdata">CC Data</NuxtLink>
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