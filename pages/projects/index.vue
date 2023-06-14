<template>
  <h2 class="block p-4 text-center text-xl font-bold">Skills</h2>
  <div class="container">
    <div class="flex flex-wrap content-center gap-2">
      <button
        v-for="[skill_key, skill] in Object.entries(skills)"
        :key="skill.name"
        class="btn"
        :class="{
          'btn-outline': !skillsFilter.includes(skill_key),
          'btn-primary': skill.group === 'technical',
          'btn-secondary': skill.group === 'soft',
          'btn-accent': skill.group === 'theory',
          'btn-neutral':
            skill.group !== 'technical' &&
            skill.group !== 'soft' &&
            skill.group !== 'theory',
        }"
        @click="toggleSkillFilter(skill_key)"
      >
        {{ skill.name }}
      </button>
    </div>
  </div>
  <h2 class="block p-4 text-center text-xl font-bold">Projects</h2>
  <div class="grid justify-center gap-5 md:grid-cols-2">
    <div v-for="project in filteredProjects">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<script setup>
import projects from "~/data/projects.json";
import skills from "~/data/skills.json";

const project_list = Object.values(projects);
const skillsFilter = ref([]);
const route = useRoute();

const filteredProjects = ref(project_list);

const filterProjects = () => {
  filteredProjects.value = project_list.filter((project) => {
    return skillsFilter.value.every((skill) => project.skills.includes(skill));
  });
};

watch(
  () => route.query,
  (newQuery) => {
    if ("skill" in newQuery) {
      skillsFilter.value = [newQuery.skill];
    } else {
      skillsFilter.value = [];
    }
    filterProjects();
  },
  { immediate: true }
);

const toggleSkillFilter = (skill_key) => {
  const index = skillsFilter.value.indexOf(skill_key);
  if (index === -1) {
    skillsFilter.value.push(skill_key);
  } else {
    skillsFilter.value.splice(index, 1);
  }
  filterProjects();
};
</script>
