<template>
  <div class="card h-96 bg-inherit shadow-none">
    <div class="card-title">
      <NuxtLink :to="`${about_card.link}`">
        {{ about_card.name }}
      </NuxtLink>
    </div>
    <div class="subtitle">
      {{ about_card.question }}
    </div>
    <div class="card-body">
      <ul>
        <li class="p-2" v-for="point in about_card.points">
          <NuxtLink :to="`${point.link}`">
            <p class="font-bold">{{ point.name }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { about_card } = defineProps({
  about_card: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
