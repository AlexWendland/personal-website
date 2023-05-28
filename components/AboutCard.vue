<template>
  <div class="py-24">
    <NuxtLink :to="`${about_card.link}`">
      <p class="font-bold">{{ about_card.name }}</p>
    </NuxtLink>
    <p>{{ about_card.question }}</p>
    <ul class="px-10">
      <li class="p-4" v-for="point in about_card.points">
        <NuxtLink :to="`${point.link}`">
          <p class="font-bold">{{ point.name }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { about_card } = defineProps({
  about_card: {
    type: Object,
    required: true
  }
})
</script>

<style scoped></style>