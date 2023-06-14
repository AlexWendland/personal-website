<template>
  <div class="grid grid-cols-2 p-6">
    <div>
      <h2 class="block p-4 text-center text-xl font-bold">Work</h2>
      <p class="block p-1 text-xl">Some text about working.</p>
    </div>
    <img
      src="/images/work.jpg"
      alt="An extraordinarily hard working man."
      class="rounded-xl shadow-xl"
    />
  </div>

  <ShiftedAnchor required_id="man">
    <h3 class="block p-4 text-center text-xl font-bold">
      <a href="https://www.man.com/">Man Group</a>
    </h3>
  </ShiftedAnchor>
  <h4 class="block p-2 text-xl">Engineer: 2023-07 - Current</h4>
  <div class="p-2">
    I am starting as a Software Engineer at
    <a href="https://www.man.com/" class="link-primary link">Man Group</a>.
  </div>

  <ShiftedAnchor required_id="ccdata">
    <h3 class="block p-4 text-center text-xl font-bold">
      <a href="https://ccdata.io/">CC Data</a>
    </h3>
  </ShiftedAnchor>
  <h4 class="block p-2 text-xl">Head of Data: 2023-02 - 2023-06</h4>
  <h4 class="block p-2 text-xl">Data Scientist: 2021-09 - 2023-02</h4>
  <div class="p-2">
    Write a summary of my time at
    <a href="https://ccdata.io/" class="link-primary link">CC Data</a>.
  </div>

  <ProjectCarousel :projects="ccdata_projects" />

  <ShiftedAnchor required_id="faststream">
    <h3 class="block p-4 text-center text-xl font-bold">
      <a href="https://www.faststream.gov.uk/">UK Government</a>
    </h3>
  </ShiftedAnchor>
  <h4 class="block p-2 text-xl">Faststreamer: 2023-02 - 2023-06</h4>
  Write a summary of my time on the
  <a
    href="https://www.faststream.gov.uk/science-engineering/index.html"
    class="link-primary link"
    >Science and Engineering Faststream</a
  >.

  <ProjectCarousel :projects="faststream_projects" />

  <ShiftedAnchor required_id="teaching">
    <h3 class="block p-4 text-center text-xl font-bold">
      <a href="https://warwick.ac.uk/fac/sci/maths/">University of Warwick</a>
    </h3>
  </ShiftedAnchor>
  List my activities teaching here.
</template>

<script setup>
const ccdata_projects = [
  "cost_optimisation",
  "dex_integration",
  "data_infrastructure",
  "data_organisation",
  "orderbook",
];
const faststream_projects = ["reports", "pulse_survey", "coffee_roulette"];
</script>
