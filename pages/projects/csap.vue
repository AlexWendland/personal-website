<template>
  <Project
    :image="csap.image.file_name"
    :altText="csap.image.alt_text"
    :title="csap.name"
    :skills="csap.skills"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque
    maxime adipisci, ducimus ratione ad laudantium accusantium alias, fugit
    veniam possimus laborum debitis at omnis. Quia nulla eius distinctio
    accusamus?
  </Project>
</template>

<script setup>
import projects from "~/data/projects.json";
const csap = projects.csap;
</script>
