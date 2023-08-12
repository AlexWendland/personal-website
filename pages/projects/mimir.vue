<template>
  <Project project_name="mimir">

    <p class="pb-2">
      During the summer of 2013,
      <a href="https://www.jisc.ac.uk/">Organisers page</a><a href="https://www.jisc.ac.uk/" class="link link-primary">JISC</a>
      presented an opportunity called the 'Summer of Student Innovation' to fund
      tech-based startup ideas that benefited the common social good. The
      selection was based on a public vote on submitted elevator pitch videos
      (<a href="https://www.youtube.com/watch?v=5J-rCk48gdI&ab_channel=SigmaWarwick" class="link link-primary">here is ours</a>).
    </p>

    <p class="pb-2">
      Together with three university friends, we envisioned a mathematics learning
      website targeted at non-math university students who needed to grasp
      foundational computational math techniques. Our unique selling point was an
      error detection system for auto-generated questions, planned to be executed
      through
      <a href="https://www.djangoproject.com/" class="link link-primary">Django</a>,
      a Python web framework.
    </p>

    <p class="pb-2">
      We brought our vision to life, creating a prototype website named "Mimir"
      (<a href="https://github.com/AlexWendland/mimir" class="link link-primary">code</a>)
      that had a basic content offering. The standout feature, our error detection
      system, functioned through a calculation graph. This graph delineated
      potential mistakes students might make at every calculation stage, such as
      sign errors or incorrect orderings. If a student answered incorrectly, our
      system would trace their error using the graph and offer specific feedback.
      Throughout this process, we documented our journey on a
      <a href="https://mimirteam.wordpress.com/" class="link link-primary">project blog</a>
      and ultimately showcased our prototype at a final event in London.
    </p>

    <p>
      While this was my first foray into comprehensive web development, the
      project's true value lay in the soft skills I acquired. Working with
      friends, especially with one member being remote and having different work
      habits, underscored the importance of effective communication and
      collaboration. Even though we didn't pursue the project further, it honed
      my abilities in project and time management (I was also working on my
      <NuxtLink class="link link-primary" to="/projects/bernoulli_factory">first research project</NuxtLink>
      that summer!), and it also taught me the crucial skill of determining
      priorities for an initial product release.
    </p>

  </Project>
</template>

<script setup></script>
