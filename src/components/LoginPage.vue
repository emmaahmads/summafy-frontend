<template>
  <div class="login-page bg-background text-secondary flex justify-center items-center h-screen">
    <div class="bg-surface p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-primary text-3xl font-bold mb-4">Login</h1>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="username" class="block text-accent">Username:</label>
          <input type="text" id="username" v-model="username" required class="bg-surface border border-accent p-2 rounded w-full" />
        </div>
        <div>
          <label for="password" class="block text-accent">Password:</label>
          <input type="password" id="password" v-model="password" required class="bg-surface border border-accent p-2 rounded w-full" />
        </div>
        <button type="submit" class="bg-primary text-surface p-2 rounded w-full">Login</button>
      </form>
      <div class="mt-4">
        <p class="text-accent">Google login</p>
      </div>
      <div class="mt-4">
        <p><RouterLink to="/signup" class="text-primary hover:underline">Sign up</RouterLink></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios';
import {login, logout} from '../auth';
//import sha256 from 'crypto-js/sha256';
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      const apiUrl = '/login';
      const credentials = {
        username: this.username,
        password: this.password
      };
      axios.post(apiUrl, credentials)
        .then(response => {
          if (response.data.success) {
            console.log('Login successful!');
            login(this.username, response.data.token);
            this.$router.push('/dashboard');
          } else {
            console.error('Login failed:', response.data.error);
            logout();
          }
        })
        .catch(error => {
          console.error('Error logging in:', error);
          logout();
        });
    }
  }
};
</script>

<style scoped>

</style>