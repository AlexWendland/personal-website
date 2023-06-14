<template>
  <div>
    <p></p>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup>
const counter = useState("counter", () => Math.round(Math.random() * 1000));
</script>
