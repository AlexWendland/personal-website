<template>
  <Project
    :image="graph.image.file_name"
    :altText="graph.image.alt_text"
    :title="graph.name"
    :skills="graph.skills"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque
    maxime adipisci, ducimus ratione ad laudantium accusantium alias, fugit
    veniam possimus laborum debitis at omnis. Quia nulla eius distinctio
    accusamus?
  </Project>
</template>

<script setup>
import projects from "~/data/projects.json";
const graph = projects.plane_graph_colouring;
</script>
