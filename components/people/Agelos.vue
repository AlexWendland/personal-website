<template>
  <template v-if=title>
    <Person name="Professor Agelos Georgakopoulos" href="https://homepages.warwick.ac.uk/~maslar/" :format=format />
  </template>
  <template v-else>
    <Person name="Agelos Georgakopoulos" href="https://homepages.warwick.ac.uk/~maslar/" :format=format />
  </template>
</template>
<script setup>
  const { format, title } = defineProps({
    format: {
      type: String,
      required: false,
      default: "link"
    },
    title: {
      type: Boolean,
      required: false,
      default: false
    },
  });
</script>