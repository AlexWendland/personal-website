<template>
  <div data-theme="autumn">
    <header
      class="navbar sticky top-0 z-50 rounded-b-lg bg-base-100 font-serif"
    >
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn-ghost btn-circle btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <NuxtLink to="/">Homepage</NuxtLink>
            </li>
            <li><a href="https://obsidian.awendland.co.uk">Obsidian</a></li>
            <li><a href="https://games.awendland.co.uk">Games site</a></li>
            <li><a href="https://github.com/AlexWendland">Github</a></li>
            <li>
              <NuxtLink to="/projects/">Projects</NuxtLink>
            </li>
            <li><a href="https://github.com/AlexWendland/CV/blob/main/Wendland_Alex.pdf">CV</a></li>
            <li>
              <a
                href="https://github.com/AlexWendland/personal-website/issues/new"
                class="btn-error btn-outline btn-sm btn normal-case"
                >Report a bug</a
              >
            </li>
          </ul>
        </div>
        <NuxtLink to="/" class="btn-ghost btn text-xl normal-case"
          >Alex Wendland</NuxtLink
        >
      </div>
      <div class="navbar-end">
        <a
          href="https://github.com/AlexWendland/personal-website/issues/new"
          class="btn-error btn-outline btn-md btn invisible normal-case sm:visible"
          >Report a bug</a
        >
      </div>
    </header>
    <div class="container mx-auto max-w-screen-md p-4 font-serif">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
