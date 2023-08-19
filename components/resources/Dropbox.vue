<template>
  <a href="https://www.dropbox.com/sh/5m63moxv6csy8tn/AACcPd2m7UPHeGIfUNpH_iRza" :class=format>Dropbox</a>
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