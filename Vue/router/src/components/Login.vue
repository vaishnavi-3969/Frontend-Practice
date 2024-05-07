<script>
import { ref } from "vue";
// import { useRouter } from 'vue-router';

export default {
  setup() {
    const emailInput = ref("");

    const login = () => {
      if(emailInput.value.includes('@') && emailInput.value.length>3){
        // useRouter.push('/user');
      } else {
        alert('Please enter a valid email address');
      }
    };

    return {
      emailInput,
      login
    };
  }
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email:</label>
    <input type="email" v-model="emailInput" placeholder="Email" />
    <button @click="login">Login</button>
  </main>
</template>
