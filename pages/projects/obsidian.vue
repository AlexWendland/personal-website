<template>
  <Project :image="obsidian.image.file_name" :altText="obsidian.image.alt_text" :title="obsidian.name"
    :skills="obsidian.skills">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque maxime adipisci, ducimus ratione ad laudantium
    accusantium alias, fugit veniam possimus laborum debitis at omnis. Quia nulla eius distinctio accusamus?
  </Project>
</template>

<script setup>
import projects from '~/data/projects.json'
const obsidian = projects.obsidian
</script>