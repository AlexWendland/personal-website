<template>
  <Project
    :image="masters.image.file_name"
    :altText="masters.image.alt_text"
    :title="masters.name"
    :skills="masters.skills"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque
    maxime adipisci, ducimus ratione ad laudantium accusantium alias, fugit
    veniam possimus laborum debitis at omnis. Quia nulla eius distinctio
    accusamus?
  </Project>
</template>

<script setup>
import projects from "~/data/projects.json";
const masters = projects.masters_thesis;
</script>
