<template>
  <template v-if=title>
    <Person name="Professor Dmitriy Rumynin" href="https://warwick.ac.uk/fac/sci/maths/people/staff/dmitriy_rumynin/" :format=format />
  </template>
  <template v-else>
    <Person name="Dmitriy Rumynin" href="https://warwick.ac.uk/fac/sci/maths/people/staff/dmitriy_rumynin/" :format=format />
  </template>
</template>
<script setup>
  const { format, title } = defineProps({
    format: {
      type: String,
      required: false,
      default: "link link-primary"
    },
    title: {
      type: Boolean,
      required: false,
      default: false
    },
  });
</script>