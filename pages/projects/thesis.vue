<template>
  <Project
    :image="thesis.image.file_name"
    :altText="thesis.image.alt_text"
    :title="thesis.name"
    :skills="thesis.skills"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque
    maxime adipisci, ducimus ratione ad laudantium accusantium alias, fugit
    veniam possimus laborum debitis at omnis. Quia nulla eius distinctio
    accusamus?
  </Project>
</template>

<script setup>
import projects from "~/data/projects.json";
const thesis = projects.phd_thesis;
</script>
