<template>
  <NuxtLink :class=format to="/work#faststream">Advisory Council on the Misuse of Drugs (ACMD)</NuxtLink>
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