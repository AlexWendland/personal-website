<template>
  <div class="p-4 space-x-4 carousel carousel-center bg-neutral rounded-box container">
    <div v-for="project in projects" class="carousel-item card p-0 h-96 w-64 bg-gray-400">
      <ProjectCarouselItem :image="project_metadata[project].image.file_name"
        :altText="project_metadata[project].image.alt_text" :title="project_metadata[project].name"
        :id="project_metadata[project].id" />
    </div>
  </div>
</template>

<script setup>
import project_metadata from '~/data/projects.json'
const { projects } = defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>