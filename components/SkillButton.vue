<template>
  <button class="btn-active btn-sm btn" :class="buttonClass">
    <NuxtLink :to="`/projects?skill=${skill}`">{{ buttonText }}</NuxtLink>
  </button>
</template>

<script setup>
import skills from "~/data/skills.json";
const { skill } = defineProps({
  skill: {
    type: String,
    required: true,
  },
});
var buttonText = skill;
var buttonClass = "btn-ghost";
if (skill in skills) {
  buttonText = skills[skill].name;
  const group = skills[skill].group;
  buttonClass = {
    "btn-primary": group === "technical",
    "btn-secondary": group === "soft",
    "btn-neutral": group !== "technical" && group !== "soft",
  };
}
</script>
