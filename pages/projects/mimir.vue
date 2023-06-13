<template>
  <Project :image="mimir.image.file_name" :altText="mimir.image.alt_text" :title="mimir.name" :skills="mimir.skills">
    Not fully written yet but here are some links from the project:
    <a href="https://www.youtube.com/watch?v=5J-rCk48gdI&ab_channel=SigmaWarwick">Original elevator pitch</a>
    <a href="https://mimirteam.wordpress.com/">Project blog</a>
    <a href="https://www.jisc.ac.uk/">Organisers page</a>
  </Project>
</template>

<script setup>
import projects from '~/data/projects.json'
const mimir = projects.mimir
</script>