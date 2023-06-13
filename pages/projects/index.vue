<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
    <div v-for="project in projects">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<script setup>
import projects from '~/data/projects.json'
</script>