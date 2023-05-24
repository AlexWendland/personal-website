<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" :alt="product.title" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h1 class="text-4xl my-7">{{ product.title }}</h1>
        <p class="mb-7">{{ product.description }}</p>
        <p class="text-2xl font-bold my-4">${{ product.price }}</p>
        <p class="text-gray-500 my-4">Category: {{ product.category }}</p>
        <p class="text-gray-500 my-4">Rating: {{ product.rating.rate }}</p>
        <p class="text-gray-500 my-4">Reviews: {{ product.rating.count }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>