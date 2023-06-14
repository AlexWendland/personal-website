<template>
  <figure>
    <img :src="`/images/${image}`" :alt="altText" class="h-64 object-cover" />
  </figure>
  <div class="card-body">
    <NuxtLink :to="`/projects/${id}`">
      <h2 class="card-title text-base">{{ title }}</h2>
    </NuxtLink>
  </div>
</template>

<script setup>
const { image, altText, title, id } = defineProps({
  image: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
</script>
