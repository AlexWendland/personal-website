<template>
  <div class="p-4">
    <ShiftedAnchor :required_id="`${name}`">
      <h2 class="p-4 text-2xl font-bold">{{ name }}</h2>
    </ShiftedAnchor>
    <div v-html="explanation"></div>
    <div v-if="quote_data">
      <Quote :author="quote_data.author" :quote="quote_data.quote" />
    </div>
    <p class="pb-2">
      I try to promote this by:
    </p>
    <ul class="list-disc pl-4">
      <li v-for="explanation in evidence">
        <p v-html="explanation"></p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { name, explanation, quote_data, evidence } = defineProps({
  name: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    required: true
  },
  quote_data: {
    type: Object,
    required: false
  },
  evidence: {
    type: Array,
    required: true
  }
})
</script>

<style scoped></style>