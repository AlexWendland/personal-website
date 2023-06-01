<template>
  <div>
    <header class="shadow-sm bg-stone-400 sticky top-0 z-50 font-serif">
      <!-- TODO #3 Sort navbar wrapping to snap to list when screen gets too small -->
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <ul class="flex flex-wrap gap-4 align-middle">
          <li>
            <NuxtLink to='/'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="inline-block w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Home</NuxtLink>
          </li>
          <li>
            <a href="https://obsidian.awendland.co.uk" class="gray-button">Obsidian</a>
          </li>
          <li>
            <a href="https://github.com/AlexWendland" class="gray-button">Github</a>
          </li>
        </ul>
        <!-- TODO #2 Create proper bug reporting system -->
        <div class="flex text-center">
          <a href="https://github.com/AlexWendland/personal-website/issues/new" class="red-button align-middle">Report a
            bug</a>
        </div>
      </nav>
    </header>

    <div class="container mx-auto p-4 font-serif">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>