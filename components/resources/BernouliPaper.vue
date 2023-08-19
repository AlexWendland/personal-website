<template>
  <NuxtLink :class=format to="/papers#bernouli">From the Bernoulli factory to a dice enterprise via perfect sampling of Markov chains</NuxtLink>
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