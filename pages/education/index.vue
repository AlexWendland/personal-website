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

  <ShiftedAnchor required_id="omscs">
    <h3 class="font-bold block text-xl text-center p-4">Masters of Computer Science, Georgia Tech</h3>
  </ShiftedAnchor>

  I am enrolled on the online masters of science in computer science (<a href="https://omscs.gatech.edu/home"
    class="link link-primary">OMSCS</a>) at <a href="https://www.gatech.edu/" class="link link-primary">Georgia Tech</a>.
  The course will start in August 2023.

  <ShiftedAnchor required_id="phd">
    <h3 class="font-bold block text-xl text-center p-4">PhD in Mathematics, University of Warwick</h3>
  </ShiftedAnchor>

  <ProjectCarousel :projects="phd_projects" />

  <ShiftedAnchor required_id="mmath">
    <h3 class="font-bold block text-xl text-center p-4">Masters in Mathematics, University of Warwick</h3>
  </ShiftedAnchor>

  <ProjectCarousel :projects="mmath_projects" />

  <ShiftedAnchor required_id="youtube">
    <h3 class="font-bold block text-xl text-center p-4">Youtube, My bedroom</h3>
  </ShiftedAnchor>
  Some people I like ...
</template>

<script setup>
const phd_projects = ["phd_thesis", "csap", "esgi", "sslc"]
const mmath_projects = ["masters_thesis", "mimir", "plane_graph_colouring", "academic_support", "bernoulli_factory"]
</script>