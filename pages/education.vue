<template>
  <div class="grid grid-cols-2 p-6">
    <div>
      <h2 class="block p-4 text-center font-bold sm:text-xl">Education</h2>
      <p class="block p-1 sm:text-xl">
        Everything in life is eduction.<br /><br />Somethings you get
        <a href="mailto:"></a> certificate for completing.
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
    graph theory and group theory under the guidance of
    <a href="https://homepages.warwick.ac.uk/~maslar/" class="link-primary link"
      >Professor Agelos Georgakopoulos</a
    >. My research was an engaging journey through complex mathematical
    principles and theory, which was both intellectually challenging and
    rewarding. The community at Warwick was a source of inspiration and support,
    composed of an array of brilliant and kind individuals who continually
    fostered an environment conducive to growth and learning.
  </p>
  <p>
    In addition to my academic development, this period of my life was crucial
    for my personal evolution. I matured significantly, both in my academic
    approach and my personal values and personality. I participated actively in
    the
    <NuxtLink to="/projects/sslc" class="link-primary link"
      >Staff-Student Liaison Committee (SSLC)</NuxtLink
    >, which offered an enriching perspective on policy shaping. My teaching
    experience further augmented my skills and perspective, while social
    activities contributed to a well-rounded and fulfilling university
    experience. Ultimately, my time at Warwick was a balanced blend of rigorous
    academic work, enriching extra-curricular activities, and personal growth.
  </p>

  <ProjectCarousel :projects="phd_projects" />

  <ShiftedAnchor required_id="mmath">
    <h3 class="block p-4 text-center text-xl font-bold">
      Masters in Mathematics, University of Warwick
    </h3>
  </ShiftedAnchor>

  <div class="pb-4 text-center text-lg">2011-09 - 2015-07</div>

  <p class="pb-2">
    I pursued an integrated Master's in Mathematics at the University of
    Warwick. It was an academically enriching period of intense study and
    rewarding experiences. This rigorous pursuit cultivated a deep love for
    mathematics, providing a solid platform for solving intricate problems and
    unveiling the beauty of mathematical logic. I was honored with the Ron
    Lockhart Student Prize in 2013 and the Giving to Warwick Student Prize in
    2014, both recognizing my academic excellence and significant contributions
    to the Mathematics Institute and Department, respectively.
  </p>

  <p class="pb-2">
    The university years also fostered my early interest in research and
    programming through two funded summer research projects and the development
    of
    <NuxtLink to="/projects/mimir" class="link-primary link">Mimir</NuxtLink>, a
    learning platform. Concurrently, I discovered my passion for teaching,
    beginning as Academic Support at the
    <NuxtLink to="/projects/academic_support" class="link-primary link"
      >Warwick Maths Society</NuxtLink
    >
    in 2013-2014, and later transitioning into my first paid
    <NuxtLink to="/work#teaching" class="link-primary link"
      >teaching role</NuxtLink
    >. I engaged actively in student representation, serving on the
    <NuxtLink to="/projects/sslc" class="link-primary link"
      >Staff-Student Liaison Committee (SSLC)</NuxtLink
    >
    and chairing it for two years. In sum, my time at Warwick was a
    transformative journey, punctuated by academic accolades, a deepening
    appreciation for mathematics and teaching, and significant departmental
    involvement.
  </p>

  <p>
    In retrospect, my undergraduate and masters years at Warwick were a
    transformative period, marked by academic rigor, a deepened love for
    mathematics and teaching, and meaningful contributions to the department and
    wider university community.
  </p>

  <ProjectCarousel :projects="mmath_projects" />

  <ShiftedAnchor required_id="youtube">
    <h3 class="block p-4 text-center text-xl font-bold">Youtube, My bedroom</h3>
  </ShiftedAnchor>

  <div class="pb-4 text-center text-lg">Now and always.</div>

  <p>
    I love youtube for starting to learn new tools. I thought it would be nice
    to share some youtubers I personal like.
  </p>
  <ul class="p-2">
    <li class="pb-2">
      <a href="https://www.youtube.com/@ArjanCodes" class="link">Arjan Codes</a>
      : This is a nice channel for learning python principles.
    </li>
    <li class="pb-2">
      <a href="https://www.youtube.com/@DevOpsToolkit" class="link"
        >DevOps Toolkit</a
      >
      : A great channel to understand how someone in DevOps thinks and to learn
      about all the latest toys in kubernetes.
    </li>
    <li class="pb-2">
      <a href="https://www.youtube.com/@NetNinja" class="link"
        >DevOps The Net Ninja</a
      >
      : The channel I used to learn all the front end development I have done.
    </li>
    <li class="pb-2">
      <a href="https://www.youtube.com/@nicolevdh" class="link"
        >Nicole van der Hoeven</a
      >
      : This channel taught me how to use
      <NuxtLink to="/projects/obsidian" class="link">Obsidian</NuxtLink> and its
      community packages. She introduced me to the concept of learning in public.
    </li>
    <li class="pb-2">
      <a href="https://www.youtube.com/@kurzgesagt" class="link"
        >Kurzgesagt</a
      >
      : A great channel that produces really good quality videos about well
      researched topics. I really admire their adherence to
      <NuxtLink to="/values#truth" class="link">Truth</NuxtLink> as a value.
    </li>
    <li class="pb-2">
      <a href="https://www.youtube.com/@CodeAesthetic" class="link"
        >CodeAesthetic</a
      >
      : A great channel to make you hated by all your collegues. It covers how
      you should code.
    </li>
    <li class="pb-2">
      <a href="https://www.youtube.com/@CGPGrey" class="link"
        >CGPGray</a
      >
      : Most probably the original youtube channel that got me hooked. They are
      funny videos on fairly random topics.
    </li>
  </ul>
</template>

<script setup>
const phd_projects = ["phd_thesis", "csap", "esgi", "sslc"];
const mmath_projects = [
  "masters_thesis",
  "mimir",
  "plane_graph_colouring",
  "academic_support",
  "bernoulli_factory",
  "sslc",
];
</script>
