<template>
  <Project :image="bernoulli.image.file_name" :altText="bernoulli.image.alt_text" :title="bernoulli.name"
    :skills="bernoulli.skills">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque maxime adipisci, ducimus ratione ad laudantium
    accusantium alias, fugit veniam possimus laborum debitis at omnis. Quia nulla eius distinctio accusamus?
  </Project>
</template>

<script setup>
import projects from '~/data/projects.json'
const bernoulli = projects.bernoulli_factory
</script>