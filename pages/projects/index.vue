<template>
  <div class="container">
    <h3>Filter</h3>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="[skill_key, skill] in Object.entries(skills)"
        :key="skill.name"
        class="rounded-md bg-gray-600 px-2 py-1 text-sm text-white"
        :class="{ 'bg-emerald-600': skillsFilter.includes(skill_key) }"
        @click="
          skillsFilter.includes(skill_key)
            ? skillsFilter.splice(skillsFilter.indexOf(skill_key), 1)
            : skillsFilter.push(skill_key);
          console.log(skillsFilter);
          filterProjects();
        "
      >
        {{ skill.name }}
      </button>
    </div>
  </div>
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
const filteredProjects = ref(project_list);
const filterProjects = () => {
  filteredProjects.value = project_list.filter((project) => {
    return skillsFilter.value.every((skill) => project.skills.includes(skill));
  });
};
</script>
