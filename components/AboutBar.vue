<template>
  <span class="w-32 flex-none sm:hidden">
    <ul>
      <li><a href="#values" class="btn-ghost btn-block btn">Values</a></li>
      <li>
        <a href="#education" class="btn-ghost btn-block btn">Education</a>
      </li>
      <li>
        <a href="#projects" class="btn-ghost btn-block btn"
          >Personal projects</a
        >
      </li>
      <li><a href="#work" class="btn-ghost btn-block btn">Work</a></li>
      <!-- <li><a href="#skills" class="btn btn-xs">Skills</a></li> -->
    </ul>
  </span>
  <div class="flex content-center">
    <div class="hidden w-32 flex-none sm:block">
      <ul>
        <li><a href="#values" class="btn-ghost btn-block btn">Values</a></li>
        <li>
          <a href="#education" class="btn-ghost btn-block btn">Education</a>
        </li>
        <li>
          <a href="#projects" class="btn-ghost btn-block btn"
            >Personal projects</a
          >
        </li>
        <li><a href="#work" class="btn-ghost btn-block btn">Work</a></li>
        <!-- <li><a href="#skills" class="btn btn-xs">Skills</a></li> -->
      </ul>
    </div>
    <div
      class="carousel-vertical carousel rounded-box h-96 w-full flex-initial"
    >
      <div id="values" class="carousel-item h-full">
        <AboutCard :about_card="values" />
      </div>
      <div id="education" class="carousel-item h-full">
        <AboutCard :about_card="education" />
      </div>
      <div id="projects" class="carousel-item h-full">
        <AboutCard :about_card="personal_projects" />
      </div>
      <div id="work" class="carousel-item h-full">
        <AboutCard :about_card="work" />
      </div>
    </div>
  </div>
</template>

<script setup>
const values = {
  name: "Values",
  question:
    "Everyone wants to make the world better. What does better look like for you?",
  link: "/values",
  points: [
    {
      name: "Truth",
      link: "/values#Truth",
    },
    {
      name: "Equality",
      link: "/values#Equality",
    },
    {
      name: "Improvement",
      link: "/values#Improvement",
    },
    {
      name: "Well-being",
      link: "/values#Well-being",
    },
    {
      name: "Change the System",
      link: "/values#Change the System",
    },
  ],
};
const education = {
  name: "Education",
  question: "You can only use what you know. What are you not using?",
  link: "/education",
  points: [
    {
      name: "Academic papers",
      link: "/papers",
    },
    {
      name: "Masters of Computer Science, Georgia Tech",
      link: "/education#omscs",
    },
    {
      name: "PhD in Mathematics, University of Warwick",
      link: "/education#phd",
    },
    {
      name: "Masters of Mathematics, University of Warwick",
      link: "/education#mmath",
    },
    {
      name: "Youtube, My bedroom",
      link: "/education#youtube",
    },
  ],
};
const personal_projects = {
  name: "Personal projects",
  question:
    "Everyone has ideas, its what you make that says who you are. Who are you?",
  link: "/projects",
  points: [
    {
      name: "Personal Website",
      link: "/projects/personal_website",
    },
    {
      name: "Obsidian",
      link: "/projects/obsidian",
    },
  ],
};
const work = {
  name: "Work",
  question:
    "If we are supposed to love life and achieve a work life balance. How do you feel about work?",
  link: "/work",
  points: [
    {
      name: "Engineer, Man Group",
      link: "/work#man",
    },
    {
      name: "Head of Data, CC Data",
      link: "/work#ccdata",
    },
    {
      name: "Science and Engineering Fast stream, Cabinet Office",
      link: "/work#faststream",
    },
    {
      name: "Teacher and Lecturer, University of Warwick",
      link: "/work#teaching",
    },
  ],
};
</script>
