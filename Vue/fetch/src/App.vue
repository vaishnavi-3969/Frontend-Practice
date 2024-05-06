<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

const pokedex = ref([1, 2, 3]);

const fetchPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=191');
  const data = await response.json();
  pokedex.value = data.results;
};

onMounted(() => {
  console.log("component mounted")
})+


</script>

<template>
  <div>
    <h1>New App</h1>
    <pre>{{ pokedex }}</pre>
    <button @click="fetchPokemon">Fetch Pokemon</button>
  </div>
</template>

<style scoped></style>
