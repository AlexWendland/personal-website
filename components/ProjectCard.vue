<template>
  <div class="card w-80 bg-base-100 shadow-xl">
    <NuxtLink :to="`/projects/${project.id}`">
      <figure><img :src="`/_nuxt/assets/images/${project.image.file_name}`" :alt="project.image.alt_text" /></figure>
    </NuxtLink>
    <div class="card-body">
      <h2 class="card-title">
        {{ project.name }}
      </h2>
      <div class="card-actions justify-start">
        <div v-for="skill in project.skills" :key="skill">
          <SkillButton :skill="skill" />
        </div>
      </div>
    </div>
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