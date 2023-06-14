<template>
  <div class="container">
    <h3>Filter</h3>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="skill in skills"
        :key="skill.name"
        class="rounded-md bg-gray-800 px-2 py-1 text-sm text-white"
        :class="{ 'bg-gray-600': skillsFilter.includes(skill.name) }"
        @click="
          skillsFilter.includes(skill.name)
            ? skillsFilter.splice(skillsFilter.indexOf(skill.name), 1)
            : skillsFilter.push(skill.name);
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
var skillsFilter = [];
const filteredProjects = useState("filteredProjects", () =>
  Object.values(projects)
);

const filterProjects = () => {
  filteredProjects = project_list.filter((project) => {
    return skillsFilter.every((skill) => project.skills.includes(skill));
  });
};
</script>
