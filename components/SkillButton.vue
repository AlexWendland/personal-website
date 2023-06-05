<template>
  <button class="bg-stone-400 hover:bg-stone-500 text-white font-bold py-2 px-4 rounded-full">
    {{ skill }}
  </button>
</template>

<script setup>
const { skill } = defineProps({
  skill: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>