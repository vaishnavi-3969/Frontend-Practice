<script>
export default {
    setup() {
        const count = ref(0)
        const increment = () => {
            count.value++
        }
        const decrement = () => {
            count.value--
        }
        return { count, increment, decrement }
    }
}

</script>

<template>
    <div class="counter">
        <h1>Counter</h1>
        <p>Current count: {{ count }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>
