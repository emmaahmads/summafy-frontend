<template>
  <div class="flex justify-center items-center h-screen bg-blue-300">
    <div class="text-4xl mb-8">
      Hello Welcome to Tailwind CSS
    </div>
    <div class="login-page bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username: </label>
          <input type="text" id="username" v-model="username" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password: </label>
          <input type="password" id="password" v-model="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
      </form>
    </div>
    <div class="mt-4">
      <p class="text-center text-gray-600">Google login</p>
    </div>
    <div class="mt-4">
      <p class="text-center text-gray-600"><RouterLink to="/signup" class="text-indigo-600 hover:text-indigo-500">Sign up</RouterLink></p>
    </div>
  </div>
</template>

<script>
import axios from '../axios';
import { login, logout } from '../auth';

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
.login-page {
  font-family: 'Arial', sans-serif;
}
</style>
