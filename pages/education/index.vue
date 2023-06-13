<template>
  <div class="grid grid-cols-2 p-6">
    <div>
      <h2 class="font-bold block text-xl text-center p-4">Education</h2>
      <p class="block text-xl p-1">Some text about how important education is to me. Then link to <NuxtLink
          to="/education/papers" class="link link-primary">my papers</NuxtLink>.
      </p>
    </div>
    <img src="~/assets/images/academic.jpg" alt="An extraordinarily intelligent man." class="rounded-xl shadow-xl" />
  </div>

  <h3 class="font-bold block text-xl text-center p-4" id="omscs">Masters of Computer Science, Georgia Tech</h3>

  I am enrolled on the online masters of science in computer science (<a href="https://omscs.gatech.edu/home"
    class="link link-primary">OMSCS</a>) at <a href="https://www.gatech.edu/" class="link link-primary">Georgia Tech</a>.
  The course will start in August 2023.

  <h3 class="font-bold block text-xl text-center p-4" id="phd">PhD in Mathematics, University of Warwick</h3>

  <ProjectCarousel :projects="phd_projects" />

  <h3 class="font-bold block text-xl text-center p-4" id="mmath">Masters in Mathematics, University of Warwick</h3>

  <ProjectCarousel :projects="phd_projects" />

  <h3 class="font-bold block text-xl text-center p-4" id="youtube">Youtube, My bedroom</h3>
</template>

<script setup>
const phd_projects = ["phd_thesis", "csap", "esgi", "sslc"]
</script>