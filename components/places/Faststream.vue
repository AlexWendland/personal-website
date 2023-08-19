<template>
  <NuxtLink :class=format to="/work#faststream">Science and Engineering Faststream</NuxtLink>
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