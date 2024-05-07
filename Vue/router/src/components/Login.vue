<script>
import { ref } from "vue";
const emailInput = ref("");
const login = () => {
  console.log("Email:", emailInput.value);
  emailInput.value = "";
};
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email:</label>
    <input type="email" v-model="emailInput" placeholder="Email" />
    <button @click="login">Login</button>
  </main>
</template>
