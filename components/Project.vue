<template>
  <img
    :src="`/images/${project.image.file_name}`"
    :alt="project.image.alt_text"
    class="mx-auto max-h-64 max-w-xs resize rounded-xl shadow-xl"
  />
  <div class="flex flex-col items-center justify-center">
    <h3 class="p-4 text-2xl font-bold">{{ project.name }}</h3>
    <h3 class="pb-4 text-xl">
      {{ project.date.start }} - {{ project.date.end }}
    </h3>
    <ul class="flex flex-wrap gap-4 px-4 pb-4">
      <li v-for="skill in project.skills" :key="skill">
        <SkillButton :skill="skill" />
      </li>
    </ul>
    <div class="flex flex-wrap gap-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
const { project_name } = defineProps({
  project_name: {
    type: String,
    required: false,
  },
});
import projects from "~/data/projects.json";
const project = projects[project_name];
</script>

<style scoped></style>
