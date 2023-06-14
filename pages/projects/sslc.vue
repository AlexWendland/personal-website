<template>
  <Project
    :image="sslc.image.file_name"
    :altText="sslc.image.alt_text"
    :title="sslc.name"
    :skills="sslc.skills"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque
    maxime adipisci, ducimus ratione ad laudantium accusantium alias, fugit
    veniam possimus laborum debitis at omnis. Quia nulla eius distinctio
    accusamus?
  </Project>
</template>

<script setup>
import projects from "~/data/projects.json";
const sslc = projects.sslc;
</script>
