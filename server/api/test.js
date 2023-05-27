export default defineEventHandler(async (event) => {

    const { name } = getQuery(event)

    const { age } = await readBody(event)

    // const { currencyKey } = useRuntimeConfig()

    // const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

    return {
        message: `Hello, ${name}! You are ${age} years old.`,
    }
})