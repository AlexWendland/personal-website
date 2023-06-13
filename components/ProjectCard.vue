<template>
  <div class="card w-80 bg-base-100 shadow-xl p-0">
    <figure>
      <NuxtLink :to="`/projects/${project.id}`"><img :src="`/_nuxt/assets/images/${project.image.file_name}`"
          :alt="project.image.alt_text" class="object-cover w-80 h-36" />
      </NuxtLink>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <NuxtLink :to="`/projects/${project.id}`">{{ project.name }}</NuxtLink>
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