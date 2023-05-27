<template>
  <div>

    <Head>
      <title>Test Site | {{ product.title }}</title>
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

const { data: product } = await useFetch(uri)

if (!product.value) {
  throw createError({
    statusCode: 404,
    message: "Product not found",
    fatal: true
  })
}
</script>