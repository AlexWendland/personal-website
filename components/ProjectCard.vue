<template>
  <div class="card h-104 w-80 bg-base-200 p-0 shadow-xl">
    <figure>
      <NuxtLink :to="`/projects/${project.id}`"
        ><img
          :src="`/images/${project.image.file_name}`"
          :alt="project.image.alt_text"
          class="h-36 w-80 object-cover"
        />
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
    required: true,
  },
});
</script>

<style scoped></style>
