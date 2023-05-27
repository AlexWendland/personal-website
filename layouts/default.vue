<template>
  <div>
    <header class="shadow-sm bg-stone-400 sticky top-0 z-50">
      <nav class="container mx-auto p-4 flex justify-between">
        <ul class="flex flex-wrap gap-4 align-middle">
          <li>
            <NuxtLink to='/'>Home</NuxtLink>
          </li>
          <li>
            <a href="https://publish.obsidian.md/awendland/Welcome" class="gray-button">Obsidian</a>
          </li>
          <li>
            <a href="https://github.com/AlexWendland" class="gray-button">Github</a>
          </li>
        </ul>
        <!-- TODO #2 Create proper bug reporting system -->
        <div class="flex align-middle">
          <a href="https://github.com/AlexWendland/personal-website/issues/new" class="red-button align-middle">Report a
            bug</a>
        </div>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width:)
</style>