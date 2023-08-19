<template>
  <template v-if=href>
    <a :class=format :href=href>{{ name }}</a>
  </template>
  <template v-else>
    <a :class=format>{{ name }}</a>
  </template>
</template>

<script setup>
const { format, name, href } = defineProps({
  format: {
    type: String,
    required: false,
    default: "link link-primary"
  },
  name: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
