<template>
  <div class="grid grid-cols-2 p-6">
    <div>
      <h2 class="block p-4 text-center font-bold sm:text-xl">Work</h2>
      <p class="block p-1 sm:text-xl">
        "Activity involving mental or physical effort done in order to achieve a
        purpose or result." <br /><br />
        So, getting out of bed counts.
      </p>
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
    <p class="pb-2">
      <a href="https://ccdata.io/" class="link-primary link">CC Data</a>,
      formerly known as
      <a href="https://www.cryptocompare.com/" class="link-primary link"
        >CryptoCompare</a
      >, a cryptocurrency data provider, was in the process of scaling up staff
      and transitioning from a retail focus to the institutional market.
    </p>

    <p class="pb-2">
      In my roles as a Data Scientist and later as Head of Data, my
      responsibilities included product development, maintaining data quality,
      collaborating with clients on tailored data sets, and managing the broader
      data team to build tools and establish supporting structures.
    </p>

    <p class="pb-2">
      I initially collaborated with the
      <NuxtLink to="/projects/orderbook" class="link-primary link"
        >Orderbook</NuxtLink
      >
      team to create data quality metrics and enhance data surveillance. This
      groundwork allowed me to work closely with multiple clients, calculating
      derived metrics, refining orderbook data sets, and guaranteeing the
      superior quality of the products delivered. I innovated by researching how
      to integrate
      <NuxtLink to="/projects/dex_integration" class="link-primary link"
        >Decentralized Exchanges (DEXs)</NuxtLink
      >
      from on-chain data, ultimately handing off this product to our engineering
      team.
    </p>

    <p class="pb-2">
      To enhance our
      <NuxtLink to="/projects/data_infrastructure" class="link-primary link"
        >technical infrastructure</NuxtLink
      >, I transitioned the data team onto a Kubernetes tech stack, establishing
      a CI/CD pipeline using GitHub Actions. I also
      <NuxtLink to="/projects/data_organisation" class="link-primary link"
        >reorganised</NuxtLink
      >
      the larger data team to address shared issues in a problem-centric way and
      to optimize resource management. This necessitated the implementation of
      new organizational processes, frequent communication across teams, and
      conducting quarterly retrospectives.
    </p>

    <p class="pb-2">
      Additionally, I undertook a
      <NuxtLink to="/projects/cost_optimisation" class="link-primary link"
        >detailed study</NuxtLink
      >
      of our Azure service usage and costs, leading to the creation of a
      comprehensive monthly report.
    </p>

    <p>
      The products developed under my guidance contributed to the onboarding of
      new clients, accounting for 4% of the company's annual revenue. My
      research and subsequent restructuring of Azure Infrastructure usage led to
      a 15% reduction in related costs, effectively cutting the company's
      overall cost by 2%. Moreover, I drove the research and development of
      multiple new products, including
      <a href="https://ccdata.io/data/on-chain-data" class="link-primary link"
        >DEX integrations</a
      >,
      <a href="https://ccdata.io/data/order-book" class="link-primary link"
        >orderbook metrics</a
      >, and a
      <a href="https://ccdata.io/data/data-catalogue" class="link-primary link"
        >data catalog</a
      >.
    </p>
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
