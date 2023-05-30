<template>
  <div>
    <h1 class="p-4 text-2xl font-bold">Values</h1>
    <p>
      I am values driven - in fact everyone is. It is simply the objective
      function which we use to make decisions. When people say they want to make
      the world a better place, they are saying they want to the world to be
      more aligned with their values.
    </p>
    <Quote quote="The greatest enemy of progress is not stagnation, but false progress." author="Sydney J. Harris" />
    <p>
      There is no way to say values are good or bad objectively - only in
      relation to someone elses values. Knowing your values is the first step to
      make meaningful progress towards your goals.
    </p>
  </div>
  <div v-for="value in values">
    <Value :name="value.name" :explanation="value.explanation" :quote_data="value.quote_data"
      :evidence="value.evidence" />
  </div>
</template>

<script setup>
const values = [
  {
    name: 'Truth',
    explanation: " \
      Truth is knowledge. Statements, correctly formulated, can be evaluated to  \
      true or false. What we know is simply the set of statements we believe to \
      be true or false. What we have left to discover is the set of statements \
      we do not know the truth value of. I not only want to increase the number \
      of statements I know the truth value of, but also the number other people \
      know. \
      ",
    quote_data: {
      quote: "It\'s not anyone else's responsibility to show us the truth. It's our \
      responsibility to find it.",
      author: "The mom test"
    },
    evidence: [
      "Learning,",
      "Teaching,",
      "Giving honest feedback, and",
      "Providing relevant context."
    ]
  },
  {
    name: 'Equality',
    explanation: "\
      If you got randomly reallocated bodies with someone else in society - how \
      afraid would you be? If you are afraid, then we are not equal.\n\n \
      Inequality for me means society is not working efficiently. If everyone in \
      the world had the median eduction would you hold the position you \
      currently do? If not, then society is not working efficiently.\n\n \
      I try to improve myself, others around me, the processes that effect us, \
      and the world at large. I do this in the most effective ways I can, \
      prioritising impact over thous impacted. \
    ",
    quote_data: {
      quote: "Inequality can have a corrosive effect on economies and societies. It \
      stifles productivity and smothers growth.",
      author: "Christine Lagarde"
    },
    evidence: [
      "Making \<a href=\"https://www.givingwhatwecan.org/pledge\" class=\"text-decoration-line: underline\"\>the Pledge to give\<\/a\>,\<\/li\>",
      "Be objective when providing opportunities, and",
      "Being data driven when making decisions.</li>"
    ]
  },
  {
    name: "Improvement",
    explanation: "\
      To improve is to make something score higher in an objective function. \
      Normally actions have payoffs - you might make a wheel spin faster but be \
      more vulnerable to breaking. Nothing is permanent so why not make that \
      change agree with your values? After all, actions are what matter. \
    ",
    quote_data: {
      quote: "Efficiency is doing things right; effectiveness is doing the right \
      things.",
      author: "Peter Drucker"
    },
    evidence: [
      "Learning in public,",
      "Regular self reviews,",
      "Contribute to the latest technology, and",
      "Being vocal about my values."
    ]
  },
  {
    name: "Well-being",
    explanation: "\
      Whilst suffering is not inherently bad, we all act to minimise the \
      suffering we have not chosen. Suffering is subjective - what one person \
      finds painful another might find pleasurable - however, providing the \
      basics of \<a href=\"https:\/\/scottbarrykaufman.com\/sailboat-metaphor\/\" \
      class=\"text-decoration-line: underline\"\>\ Maslow's hierarchy of \
      needs<\/a\> to everyone seems like a good start. \
      ",
    quote_data: {
      quote: "Compassion is not just about feeling the pain of others; it is \
        about taking action to reduce that pain.",
      author: "Tenzin Gyatso"
    },
    evidence: [
      "Practice meditation for metal well-being,",
      "Giving effectively,",
      "Promote a culture of well-being and compassion, and",
      "Veganism for the long term good."
    ]
  },
  {
    name: "Change the system",
    explanation: "\
      Whilst living your morals is required, the most effective change comes \
      by writing systems to reflect these values. For me, the most important \
      system is the code that runs the applications we rely on every day. \
      Making decisions is hard - make it once and automate to save work or \
      better make the default option aligned with your values.\
    ",
    quote_data: {
      quote: "The secret of change is to focus all of your energy not on \
      fighting the old, but on building the new.",
      author: "Socrates"
    },
    evidence: [
      "Politically engaged,",
      "Coding, and",
      "Automating habits."
    ]
  }
]
</script>