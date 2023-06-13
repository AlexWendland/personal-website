<template>
  <Project :image="personal_website.image.file_name" :altText="personal_website.image.alt_text"
    :title="personal_website.name" :skills="personal_website.skills">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque maxime adipisci, ducimus ratione ad laudantium
    accusantium alias, fugit veniam possimus laborum debitis at omnis. Quia nulla eius distinctio accusamus?
  </Project>
</template>

<script setup>
import projects from '~/data/projects.json'
const personal_website = projects.personal_website
</script>