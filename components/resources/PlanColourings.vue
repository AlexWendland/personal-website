<template>
  <NuxtLink :class=format to="/papers#plane-graphs">Coloring of Plane Graphs with Unique Maximal Colors on Faces</NuxtLink>
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