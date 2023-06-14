<template>
  <Project
    :image="esgi.image.file_name"
    :altText="esgi.image.alt_text"
    :title="esgi.name"
    :skills="esgi.skills"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque
    maxime adipisci, ducimus ratione ad laudantium accusantium alias, fugit
    veniam possimus laborum debitis at omnis. Quia nulla eius distinctio
    accusamus?
  </Project>
</template>

<script setup>
import projects from "~/data/projects.json";
const esgi = projects.esgi;
</script>
