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
  <h4 class="block p-2 text-xl">Engineer: July 2023 - Current</h4>
  <div class="p-2">
    I am starting as a Software Engineer at
    <a href="https://www.man.com/" class="link-primary link">Man Group</a>.
  </div>

  <ShiftedAnchor required_id="ccdata">
    <h3 class="block p-4 text-center text-xl font-bold">
      <a href="https://ccdata.io/">CC Data</a>
    </h3>
  </ShiftedAnchor>
  <h4 class="block p-2 text-xl">Head of Data: February 2023 - June 2023</h4>
  <h4 class="block p-2 text-xl">
    Data Scientist: September 2021 - January 2023
  </h4>
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
      a CI/CD pipeline using GitHub Actions and started moving more data in to
      Google Big Query. I also
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
  <h4 class="block p-2 text-xl">Faststreamer: October 2020 - August 2021</h4>

  <p class="pb-2">
    During my tenure on the
    <a href="https://www.faststream.gov.uk/" class="link-primary link"
      >Faststream</a
    >, a competitive three-year leadership program for placements across the
    civil service, I was part of the
    <a
      href="https://www.faststream.gov.uk/science-engineering/index.html"
      class="link-primary link"
      >Science and Engineering Faststream</a
    >. This role emphasized bringing STEM knowledge into the civil service
    during the crucial period of the COVID-19 crisis. I found myself assigned to
    the Home Office on the
    <a
      href="https://www.gov.uk/government/organisations/advisory-council-on-the-misuse-of-drugs"
      class="link-primary link"
      >Advisory Council on the Misuse of Drugs (ACMD)</a
    >, where I assisted
    <a
      href="https://www.nottingham.ac.uk/pharmacy/people/roger.knaggs"
      class="link-primary link"
      >Professor Roger Knaggs</a
    >
    in providing two key pieces of
    <NuxtLink to="/projects/reports" class="link-primary link"
      >advice to the government</NuxtLink
    >. The first was about regulations concerning
    <a
      href="https://www.gov.uk/government/publications/acmd-advice-on-consumer-cannabidiol-cbd-products"
      class="link-primary link"
      >commercial CBD products</a
    >, and the second involved
    <a
      href="https://www.gov.uk/government/publications/consideration-of-barriers-to-research-part-1"
      class="link-primary link"
      >a review of research barriers caused by regulations on Synthetic
      cannabinoid receptor agonists (SCRA)</a
    >.
  </p>

  <p class="pb-2">
    Simultaneously, during the pandemic, I focused on fostering a closer
    connection within my cohort of Faststreamers and assessing the overall
    impact of the crisis on our department.
  </p>

  <p class="pb-2">
    One significant challenge we encountered at the ACMD was a constitutional
    crisis related to maintaining enough members to remain quorate, crucial for
    any potential amendments to the
    <a
      href="https://www.legislation.gov.uk/ukpga/1971/38/contents"
      class="link-primary link"
      >Misuse of Drugs Act 1971</a
    >. In response, I drafted advice to the Home Secretary, Priti Patel, and
    Prime Minister Boris Johnson, enabling us to continue operating as a quorum
    advisory council.
  </p>

  <p class="pb-2">
    Furthermore, I wrote advice suggesting a revised definition of research
    organisations, aiming for more lenient regulations around the use of SCRAs
    to aid UK research. Additionally, I drafted advice suggesting changes to the
    classification of expected products, which would allow the legal sale of
    commercial CBD products. We also recommended limitations on psychoactive
    substance impurities within CBD, guided by the latest understanding of their
    side effects. To support the Home Office, I conducted a comprehensive
    analysis of the
    <NuxtLink to="/projects/pulse_survey" class="link-primary link"
      >Pulse Survey</NuxtLink
    >
    results for our department. Moreover, to foster connections within my
    cohort, I developed a
    <NuxtLink to="/projects/coffee_roulette" class="link-primary link"
      >"coffee roulette"</NuxtLink
    >
    application to facilitate weekly introductions among members.
  </p>

  <p>
    These actions led to several noteworthy results. The advice provided to the
    Home Secretary and the Prime Minister ensured that the ACMD remained quorate
    and successfully hired and retained the required number of members. In
    response to the advice on SCRA, the government commissioned further work to
    investigate this in context with all other Schedule 1 compounds. The ACMD's
    recommendations on CBD are still awaiting a government response. The
    analysis of the Pulse survey resulted in the Home Office forming
    subcommittees to address highlighted issues, some of which I participated in
    before concluding my role. Lastly, the coffee roulette initiative was so
    successful that I set up several similar networking initiatives within the
    Faststream community, with one of these currently engaging over 500
    participants as of 2023.
  </p>

  <ProjectCarousel :projects="faststream_projects" />

  <ShiftedAnchor required_id="teaching">
    <h3 class="block p-4 text-center text-xl font-bold">
      <a href="https://warwick.ac.uk/fac/sci/maths/">University of Warwick</a>
    </h3>
  </ShiftedAnchor>
  <h4 class="block p-2 text-xl">
    Teacher and Lecturer: September 2014 - April 2020
  </h4>

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
