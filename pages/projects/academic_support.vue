<template>
  <Project
    :image="academic_support.image.file_name"
    :altText="academic_support.image.alt_text"
    :title="academic_support.name"
    :skills="academic_support.skills"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque
    maxime adipisci, ducimus ratione ad laudantium accusantium alias, fugit
    veniam possimus laborum debitis at omnis. Quia nulla eius distinctio
    accusamus?
  </Project>
</template>

<script setup>
import projects from "~/data/projects.json";
const academic_support = projects.academic_support;
</script>
