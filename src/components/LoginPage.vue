<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      const apiUrl = 'http://localhost:8080/login';
      const credentials = {
        username: this.username,
        password: this.password
      };

      axios.get(apiUrl, { params: credentials })
        .then(response => {
          if (response.data.success) {
            // Login successful, handle token or redirect
            console.log('Login successful!');
            // Store token or user data in local storage or Vuex
          } else {
            // Login failed, display error message
            console.error('Login failed:', response.data.error);
          }
        })
        .catch(error => {
          console.error('Error logging in:', error);
        });
    }
  }
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>