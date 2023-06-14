<template>
  <div class="grid justify-center gap-5 md:grid-cols-2">
    <div v-for="project in projects">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<script setup>
import projects from "~/data/projects.json";
</script>
