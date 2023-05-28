<template>
  <div class="grid grid-cols-2 p-6">
    <div>
      <!-- TODO #4 Make the font sizes change with screen size -->
      <h2 class="font-bold block text-xl text-center p-4">Alex Wendland</h2>
      <p class="block text-xl p-1">Mathematician,</p>
      <p class="block text-xl p-1">Developer,</p>
      <p class="block text-xl p-1">Effective Altruist.</p>
    </div>
    <img src="~/assets/images/me.jpg" alt="An extraordinarily handsome man." class="rounded-xl shadow-xl" />
  </div>
  <div class="grid grid-cols-7">
    <div class="self-start sticky h-5/6 top-24 col-span-1 border-r-4 border-black border-double py-20">
      About
    </div>

    <div class="col-span-6 px-4">
      <div class="py-24">
        <h1 class='font-bold text-lg p-2'>Values</h1>
        <p>Everyone wants to make the world better. What does better look like for you?</p>
        <ul class="px-10">
          <li>Truth</li>
          <li>Equality</li>
          <li>Well-being</li>
          <li>Improvement</li>
          <li>Change the system</li>
        </ul>
      </div>
    </div>
  </div>
</template>
