<template>
  <figure><img :src="`/_nuxt/assets/images/${image}`" :alt="altText" class="object-cover h-64" />
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
    required: true
  },
  altText: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})
</script>