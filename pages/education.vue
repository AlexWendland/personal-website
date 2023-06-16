<template>
  <div class="grid grid-cols-2 p-6">
    <div>
      <h2 class="block p-4 text-center text-xl font-bold">Education</h2>
      <p class="block p-1 text-xl">
        Everything in life is eduction.<br />Not of all it is useful.
      </p>
    </div>
    <img
      src="/images/academic.jpg"
      alt="An extraordinarily intelligent man."
      class="rounded-xl shadow-xl"
    />
  </div>

  <ShiftedAnchor required_id="omscs">
    <h3 class="block p-4 text-center text-xl font-bold">
      Masters of Computer Science, Georgia Tech
    </h3>
  </ShiftedAnchor>
  <div class="pb-4 text-center text-lg">2023-08 - Current</div>
  <p>
    I am enrolled on the online masters of science in computer science (<a
      href="https://omscs.gatech.edu/home"
      class="link-primary link"
      >OMSCS</a
    >) at
    <a href="https://www.gatech.edu/" class="link-primary link">Georgia Tech</a
    >. I am doing the masters so I can properly understand machine learning and
    distributed computing.
  </p>

  <ShiftedAnchor required_id="phd">
    <h3 class="block p-4 text-center text-xl font-bold">
      PhD in Mathematics, University of Warwick
    </h3>
  </ShiftedAnchor>
  <div class="pb-4 text-center text-lg">2015-09 - 2020-04</div>

  <p class="pb-2">
    During my PhD at the University of Warwick, I delved into the realms of
    graph theory and group theory under the guidance of Professor Agelos
    Georgakopoulos. My research was an engaging journey through complex
    mathematical principles and theory, which was both intellectually
    challenging and rewarding. The community at Warwick was a source of
    inspiration and support, composed of an array of brilliant and kind
    individuals who continually fostered an environment conducive to growth and
    learning.
  </p>
  <p>
    In addition to my academic development, this period of my life was crucial
    for my personal evolution. I matured significantly, both in my academic
    approach and my personal values and personality. I participated actively in
    the Staff-Student Liaison Committee (SSLC), which offered an enriching
    perspective on policy shaping. My teaching experience further augmented my
    skills and perspective, while social activities contributed to a
    well-rounded and fulfilling university experience. Ultimately, my time at
    Warwick was a balanced blend of rigorous academic work, enriching
    extra-curricular activities, and personal growth.
  </p>

  <ProjectCarousel :projects="phd_projects" />

  <ShiftedAnchor required_id="mmath">
    <h3 class="block p-4 text-center text-xl font-bold">
      Masters in Mathematics, University of Warwick
    </h3>
  </ShiftedAnchor>

  <div class="pb-4 text-center text-lg">2011-09 - 2015-07</div>

  <p></p>

  <ProjectCarousel :projects="mmath_projects" />

  <ShiftedAnchor required_id="youtube">
    <h3 class="block p-4 text-center text-xl font-bold">Youtube, My bedroom</h3>
  </ShiftedAnchor>

  <div class="pb-4 text-center text-lg">Now and always.</div>

  Some people I like ...
</template>

<script setup>
const phd_projects = ["phd_thesis", "csap", "esgi", "sslc"];
const mmath_projects = [
  "masters_thesis",
  "mimir",
  "plane_graph_colouring",
  "academic_support",
  "bernoulli_factory",
];
</script>
