<template>
  <div>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/test?name=Alex', {
  method: 'post',
  body: { age: 30 }
})
</script>