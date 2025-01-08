<template>
    <div class="signup-page">
      <h1>Sign Up</h1>
      <form id="signup-form" @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div>
          <label for="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
   import {login} from '../auth';

  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirm_password: ''
      };
    },
    methods: {
      async handleSubmit() {
        console.log('Form submitted');
  
        const formData = {
          username: this.username,
          email: this.email,
          password: this.password,
          confirm_password: this.confirmPassword
        };
  
        console.log('Submitting data:', formData);
  
        try {
          const response = await fetch('http://localhost:8082/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
  
          console.log('Response:', response);
  
          const data = await response.json();
          console.log('Response data:', data.status);
          if (data.status) {
            login(this.username, data.token)
            this.$router.push('/dashboard');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .signup-page {
    font-family: 'Arial', sans-serif;
    padding: 20px;
  }
  
  .signup-page h1 {
    margin-bottom: 20px;
  }
  
  .signup-page form {
    display: flex;
    flex-direction: column;
  }
  
  .signup-page label {
    margin-bottom: 5px;
  }
  
  .signup-page input {
    margin-bottom: 15px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .signup-page button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  .signup-page button:hover {
    background-color: #0056b3;
  }
  </style>