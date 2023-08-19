<template>
  <template v-if=title>
    <Person name="Professor Daniel Kráľ" href="https://www.ucw.cz/~kral/index.html.en" :format=format />
  </template>
  <template v-else>
    <Person name="Daniel Kráľ" href="https://www.ucw.cz/~kral/index.html.en" :format=format />
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