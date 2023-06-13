<template>
  <div>
    <header class="navbar bg-stone-400 sticky top-0 z-50 font-serif rounded-b-lg">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NuxtLink to='/'>Homepage</NuxtLink>
            </li>
            <li><a href="https://obsidian.awendland.co.uk">Obsidian</a></li>
            <li><a href="https://github.com/AlexWendland">Github</a></li>
            <li>
              <NuxtLink to='/projects/'>Projects</NuxtLink>
            </li>
            <li>
              <a href="https://github.com/AlexWendland/personal-website/issues/new"
                class="btn btn-error btn-outline normal-case btn-sm">Report a
                bug</a>
            </li>
          </ul>
        </div>
        <NuxtLink to='/' class="btn btn-ghost normal-case text-xl">Alex Wendland</NuxtLink>
      </div>
      <div class="navbar-end">
        <a href="https://github.com/AlexWendland/personal-website/issues/new"
          class="btn btn-error normal-case btn-md invisible sm:visible">Report a
          bug</a>
      </div>
    </header>
    <div class="container mx-auto font-serif max-w-screen-md p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>