<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const data = ref([]);
    const isLoading = ref(false);
    const errorMessage = ref('');

    const gotopokemon = async () => {
      isLoading.value = true;
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/32');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        data.value = responseData;
      } catch (error) {
        console.error('Error fetching data:', error);
        errorMessage.value = 'Failed to fetch data. Please try again later.';
      } finally {
        isLoading.value = false;
      }
    };

    return {
      data,
      isLoading,
      errorMessage,
      gotopokemon
    };
  }
}
</script>

<template>
  <div class="blog">
    <h1>BlogPage</h1>
    <button @click="gotopokemon" :disabled="isLoading">Go to Pokemon</button>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<style scoped>
</style>
