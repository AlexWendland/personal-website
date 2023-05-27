<!-- TODO #1 Fix the error page -->

<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Oops! Something went wrong.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn mt-7" @click="handleClearError">Go Back Home</button>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true
  }
})

const handleClearError = () => clearError({ redirect: '/' })

</script>

<style scoped></style>