<template>
  <img :src="`/_nuxt/assets/images/${image}`" :alt="altText"
    class="rounded-xl shadow-xl mx-auto resize max-h-64 max-w-xs" />
  <div class="flex flex-col justify-center items-center">
    <h3 class="text-2xl font-bold p-4">{{ title }}</h3>
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
    required: false
  },
  altText: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    required: true
  }
})
</script>

<style scoped></style>