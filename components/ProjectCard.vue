<template>
  <div class="flex flex-col justify-center items-center">
    <NuxtLink :to="`/projects/${project.id}`">
      <img :src="`/_nuxt/assets/images/${project.image.file_name}`" :alt="project.image.alt_text"
        class="rounded-xl shadow-xl mx-auto resize" />
      <h3 class="text-2xl font-bold p-4">{{ project.name }}</h3>
    </NuxtLink>
    <ul class="flex flex-wrap gap-4 px-4 pb-4">
      <li v-for="skill in project.skills" :key="skill">
        <SkillButton :skill="skill" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const { project } = defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped></style>