<template>
  <div class="grid grid-cols-2 p-6">
    <div>
      <h2 class="block p-4 text-center font-bold sm:text-xl">Work</h2>
      <p class="block p-1 sm:text-xl">
        "Activity involving mental or physical effort done in order to achieve a
        purpose or result." <br /><br />
        Getting out of bed counts.
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
    <p>
      In my roles as Data Scientist and later as Head of Data at
      <a href="https://ccdata.io/" class="link-primary link">CC Data</a>
      (formerly
      <a href="https://www.cryptocompare.com/" class="link-primary link"
        >CryptoCompare</a
      >), a cryptocurrency data provider, I spearheaded
      <NuxtLink to="/projects/orderbook" class="link-primary link"
        >product development</NuxtLink
      >
      and data quality management during a pivotal transition towards the
      institutional market. Working closely with clients, I customized data sets
      to their needs, introduced metrics for data quality, and developed a
      product for integrating
      <NuxtLink to="/projects/dex_integration" class="link-primary link"
        >Decentralized Exchanges (DEXs)</NuxtLink
      >
      from on-chain data. To improve the
      <NuxtLink to="/projects/data_organisation" class="link-primary link"
        >data team's effectiveness</NuxtLink
      >, I established a problem-centric work approach and
      <NuxtLink to="/projects/data_infrastructure" class="link-primary link"
        >transitioned the data tech stack</NuxtLink
      >
      to Kubernetes, implementing a CI/CD pipeline using GitHub Actions. My
      proactive
      <NuxtLink to="/projects/data_infrastructure" class="link-primary link"
        >review of Azure service</NuxtLink
      >
      usage led to a significant cost reduction, and the products developed
      under my tenure contributed substantially to the company's annual revenue.
    </p>
    <Quote
    quote=" Alex's attention to detail, commitment to maintaining high standards, effective communication skills, enthusiastic attitude, and exceptional teamwork greatly impacted our projects."
    author="Jimena León, Head of Index Operations, CC Data"
    href="https://www.linkedin.com/in/jimena-leon-testa/"
  />
  </div>

  <ProjectCarousel :projects="ccdata_projects" />

  <ShiftedAnchor required_id="faststream">
    <h3 class="block p-4 text-center text-xl font-bold">
      <a href="https://www.faststream.gov.uk/">UK Government</a>
    </h3>
  </ShiftedAnchor>
  <h4 class="block p-2 text-xl">Faststreamer: October 2020 - August 2021</h4>
  <div class="p-2">
    <p>
      During my time on the
      <a
        href="https://www.faststream.gov.uk/science-engineering/index.html"
        class="link-primary link"
        >Science and Engineering Faststream</a
      >, a three-year leadership program, I was assigned to the Home Office on
      the
      <a
        href="https://www.gov.uk/government/organisations/advisory-council-on-the-misuse-of-drugs"
        class="link-primary link"
        >Advisory Council on the Misuse of Drugs (ACMD)</a
      >. I worked closely with the council to
      <NuxtLink to="/projects/reports" class="link-primary link"
        >deliver key advice</NuxtLink
      >
      to the government on regulations concerning
      <a
        href="https://www.gov.uk/government/publications/acmd-advice-on-consumer-cannabidiol-cbd-products"
        class="link-primary link"
        >commercial CBD products</a
      >
      and
      <a
        href="https://www.gov.uk/government/publications/consideration-of-barriers-to-research-part-1"
        class="link-primary link"
        >the research barriers caused by regulations on Synthetic Cannabinoid
        Receptor Agonists (SCRA)</a
      >. I drafted advice to address to the prime minister and home secretary
      about a constitutional crisis at the ACMD. Simultaneously, I developed a
      <NuxtLink to="/projects/coffee_roulette" class="link-primary link"
        >"coffee roulette"</NuxtLink
      >
      application to enhance connectivity within my Faststream cohort and
      conducted a thorough analysis of the
      <NuxtLink to="/projects/pulse_survey" class="link-primary link"
        >Pulse Survey</NuxtLink
      >
      results to help guide departmental responses to COVID-19. These efforts
      contributed to ACMD's continued operations, informed government research
      strategies, and fostered a closer, more supportive Faststream community.
    </p>
  </div>

  <ProjectCarousel :projects="faststream_projects" />

  <ShiftedAnchor required_id="teaching">
    <h3 class="block p-4 text-center text-xl font-bold">
      <a href="https://warwick.ac.uk/fac/sci/maths/">University of Warwick</a>
    </h3>
  </ShiftedAnchor>
  <h4 class="block p-2 text-xl">
    Teacher and Lecturer: September 2014 - April 2020
  </h4>

  I was employed by
  <a href="https://warwick.ac.uk/fac/sci/maths/" class="link-primary link"
    >Warwick Maths department</a
  >
  to give lectures for the 4th year course Group Theory and covered lectures for
  the 3rd year course Groups and Representations. In the initial feedback for
  the 4th year group theory the course I received the comment:
  <Quote
    quote="Alex is one of the best lecturers I've ever had"
    author="Anonymous feedback"
  />
  Employed by Warwick Maths and
  <a href="https://warwick.ac.uk/fac/sci/dcs/" class="link-primary link"
    >Computer Science</a
  >
  Departments to run the Support Classes for the modules: Analysis 1, Discrete
  Maths and its Applications 2, Experimental Maths, Geometric group theory,
  Group Theory, Groups and Representations, Lie Algebras, and Set Theory. I
  received the following feedback when I won the student voted Postgraduate
  teaching award in 2017:
  <Quote
    quote="Just an all round nice guy who marks work quickly and gives good
    feedback with amazing subject knowledge"
    author="Anonymous feedback"
  />
  I have taught in all formats for 1-1 sessions with struggling students to
  running 400 people lectures.
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
