<template>
  <div class="grid grid-cols-2 p-6">
    <div>
      <!-- TODO #4 Make the font sizes change with screen size -->
      <h2 class="font-bold block text-xl text-center p-4">Alex Wendland</h2>
      <p class="block text-xl p-1">Mathematician,</p>
      <p class="block text-xl p-1">Developer,</p>
      <p class="block text-xl p-1">Data specialist,</p>
      <p class="block text-xl p-1">Effective Altruist.</p>
    </div>
    <img src="~/assets/images/me.jpg" alt="An extraordinarily handsome man." class="rounded-xl shadow-xl" />
  </div>
  <AboutBar :about_cards="about_cards" />
</template>

<script setup>
const about_cards = [
  {
    name: "Values",
    question: "Everyone wants to make the world better. What does better look like for you?",
    link: "/values",
    points: [
      {
        name: "Truth",
        link: "/values#Truth"
      },
      {
        name: "Equality",
        link: "/values#Equality"
      },
      {
        name: "Improvement",
        link: "/values#Improvement"
      },
      {
        name: "Well-being",
        link: "/values#Well-being"
      },
      {
        name: "Change the System",
        link: "/values#Change the System"
      }
    ],
  },
  {
    name: "Education",
    question: "You can only use what you know. What are you not using?",
    link: "/education",
    points: [
      {
        name: "Masters of Computer Science, Georgia Tech",
        link: "/education#omscs"
      },
      {
        name: "PhD in Mathematics, University of Warwick",
        link: "/education#phd"
      },
      {
        name: "Masters of Mathematics, University of Warwick",
        link: "/education#mmath"
      },
      {
        name: "Youtube, My bedroom",
        link: "/education#youtube"
      }
    ],
  },
  {
    name: "Personal projects",
    question: "Everyone has ideas, its what you make that says who you are. Who are you?",
    link: "/personal_projects",
    points: [
      {
        name: "Personal Website",
        link: "/personal_projects#Personal Website"
      },
      {
        name: "Obsidian",
        link: "/personal_projects#Obsidian"
      }
    ],
  },
  {
    name: "Work",
    question: "If we are supposed to love life but achieve a work life balance. How do you feel about work?",
    link: "/work",
    points: [
      {
        name: "CryptoCompare",
        link: "/work#CryptoCompare"
      },
      {
        name: "Faststream",
        link: "/work#Faststream"
      },
      {
        name: "Teaching",
        link: "/work#Teaching"
      }
    ],
  }
]
</script>