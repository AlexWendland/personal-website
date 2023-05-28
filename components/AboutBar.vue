<template>
  <div class="grid grid-cols-7">
    <div class="self-start sticky top-24 col-span-1 py-20">
      About
    </div>
    <div class="col-span-6 px-4 border-l-4 border-black border-double">
      <div v-for="about_card in about_cards">
        <AboutCard :about_card="about_card" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { about_cards } = defineProps({
  about_cards: {
    type: Array,
    required: true
  }
})
</script>