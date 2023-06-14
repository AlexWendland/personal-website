<template>
  <div
    class="container carousel-center carousel rounded-box space-x-4 bg-neutral p-4"
  >
    <div
      v-for="project in projects"
      class="carousel-item card h-96 w-64 bg-gray-400 p-0"
    >
      <ProjectCarouselItem
        :image="project_metadata[project].image.file_name"
        :altText="project_metadata[project].image.alt_text"
        :title="project_metadata[project].name"
        :id="project_metadata[project].id"
      />
    </div>
  </div>
</template>

<script setup>
import project_metadata from "~/data/projects.json";
const { projects } = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>
