<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    <div v-for="project in projects">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<script setup>
import projects from '~/data/projects.json'
</script>