<template>
  <div class="grid grid-cols-2 p-6">
    <div class="sm:text-xl">
      <!-- TODO #4 Make the font sizes change with screen size -->
      <h2 class="block p-4 text-center font-bold">Alex Wendland</h2>
      <div class="sm:content-central block p-1 sm:p-4">
        <p class="block p-1">Mathematician.</p>
        <p class="block p-1">Developer.</p>
        <p class="block p-1">Data specialist.</p>
        <p class="block p-1">Effective Altruist.</p>
      </div>
    </div>
    <img
      src="/images/me.jpg"
      alt="An extraordinarily handsome man."
      class="rounded-xl shadow-xl"
    />
  </div>

  <AboutBar />
</template>
