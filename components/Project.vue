<template>
  <img
    :src="`/images/${image}`"
    :alt="altText"
    class="mx-auto max-h-64 max-w-xs resize rounded-xl shadow-xl"
  />
  <div class="flex flex-col items-center justify-center">
    <h3 class="p-4 text-2xl font-bold">{{ title }}</h3>
    <ul class="flex flex-wrap gap-4 px-4 pb-4">
      <li v-for="skill in skills" :key="skill">
        <SkillButton :skill="skill" />
      </li>
    </ul>
    <div class="flex flex-wrap gap-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
const { image, altText, title, skills } = defineProps({
  image: {
    type: String,
    required: false,
  },
  altText: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
