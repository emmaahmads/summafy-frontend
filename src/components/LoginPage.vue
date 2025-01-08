<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username: </label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password: </label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
 </div>
  <div>
    <p>Google login</p>
  </div>
  <div>
    <p><RouterLink to="/signup">Sign up</RouterLink></p>
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
.login-page {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  font-size: small;
  font-style: normal;
}
h1 {
  font-family: 'Arial', sans-serif;
}

label, input, button {
  font-family: sans-serif;
}
</style>