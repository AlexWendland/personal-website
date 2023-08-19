<template>
  <Project project_name="plane_graph_colouring">
    <p class="pb-2">
      The summer of 2014 was a defining period for me. Thanks to funding from
      the <PlacesWarwick/> and the <PlacesCzechScienceFoundation/>, I had the
      unique opportunity to study under <PeopleDanKral title="true"/>, delving into the
      intricacies of plane graph colourings. My academic journey led me to both
      <PlacesCharles/> in Prague and the <PlacesWestBohemia/> in Pilsen.
      <PeopleDanKral/> was instrumental in orchestrating this adventure, turning
      the summer into a cherished memory. Marking my maiden voyage traveling
      solo, this summer was nothing short of transformative!
    </p>

    <p class="pb-2">
      The quintessential plane graph colouring challenge is encapsulated by the
      renowned
      <a class="link link-primary" href="https://en.wikipedia.org/wiki/Four_color_theorem">4-colour theorem</a>.
      Simply put, this theorem posits that any flat map divided into regions can
      be coloured using just four distinct colours, ensuring that no adjacent
      regions share the same colour. Interestingly, four is the bare minimum to
      achieve this feat across all maps. While this theorem may sound
      straightforward, its proof is anything but. It was eventually unravelled
      with the aid of computer-assisted proofs, marking a pioneering approach to
      problem-solving that ignited considerable debate. For the more
      Mathematically inclined, the theorem's formal statement is a plane graph —
      one embeddable in 2-dimensional Euclidean space — can have its vertices
      coloured using 4 distinct colours in such a way that adjacent vertices
      don't use identical colours.
    </p>

    <p class="pb-2">
      My research concentrated on an intriguing variant of this problem,
      emphasizing facial constraints. What if, in addition to ensuring
      non-adjacent vertices differed in colour, we also mandated that every face
      of the graph should sport a unique dominant shade? Such constraints have
      can have applications in algorithmic studies. My efforts culminated in the
      discovery that five distinct colours would suffice in such scenarios.
      These findings formed the backbone of my paper <ResourcesPlanColourings/>,
      which was published just after. Later, in 2018, Bernard Lidický,
      Kacy Messerschmidt, and Riste Škrekovski substantiated that the constraint
      of five colours was indeed the optimal solution in their paper
      <a href="https://www.sciencedirect.com/science/article/pii/S0166218X17305668#:~:text=A%20counterexample%20to%20Conjecture%201.&text=The%20contradiction%20in%20Proposition%201,the%20outer%20face%20colored%20by%20." class="link link-primary">A counterexample to a conjecture on facial unique-maximal colorings</a>.
      Their proof elucidated this by designing a graph that necessitated 5
      colours.
    </p>

    <p>
      Reflecting on that summer, it was a cascade of 'firsts' for me: my
      inaugural solo journey, my initiation into the mathematical publishing
      sphere, and my debut academic sojourn to an esteemed global institution.
    </p>
  </Project>
</template>

<script setup></script>
