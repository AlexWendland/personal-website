<template>
  <Person name="Giulio Morina" href="https://warwick.ac.uk/fac/sci/statistics/staff/research_students/morina/" :format=format />
</template>
<script setup>
  const { format } = defineProps({
    format: {
      type: String,
      required: false,
      default: "link link-primary"
    },
  });
</script>