<script>
// import Counter from './components/Counter';

export default {
  components: {
    // Counter
  },
  data() {
    return {
      displayTitle: 'Hello, Vue 3!',
      characterList: [
        { name: 'Vue 3', description: 'The latest version of Vue.js' },
        {
          name: 'Vite',
          description:
            'A build tool that aims to provide a faster and leaner development experience for modern web projects'
        },
        {
          name: 'Pinia',
          description: 'A Vue.js Store that is designed to be type-safe and flexible'
        },
        { name: 'Vue Router', description: 'The official router for Vue.js' },
        { name: 'Vue Test Utils', description: 'Utilities for testing Vue components' },
        {
          name: 'Vue Dev Tools',
          description: 'A browser extension for debugging Vue applications'
        },
        { name: 'Awesome Vue', description: 'A curated list of awesome things related to Vue.js' }
      ],
      number: 1
    }
  }
}
</script>

<template>
  <h1>{{ displayTitle }}</h1>
  <ul>
    <li v-for="character in characterList" :key="character.name">
      <strong>{{ character.name }}</strong
      >: {{ character.description }}
    </li>
  </ul>
  <h3>Number: {{ number }}</h3>
  <p v-if="number > 0">The number is greater than 0.</p>
  <p v-else>The number is less than or equal to 0.</p>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: white;
}
</style>
