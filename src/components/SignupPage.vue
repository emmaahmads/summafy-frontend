<template>
  <div class="signup-page bg-background text-secondary p-4">
    <h1 class="text-primary text-3xl font-bold mb-4">Sign Up</h1>
    <form id="signup-form" @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="username" class="block text-accent">Username:</label>
        <input type="text" id="username" v-model="username" required class="bg-surface border border-accent p-2 rounded w-full" />
      </div>
      <div>
        <label for="email" class="block text-accent">Email:</label>
        <input type="email" id="email" v-model="email" required class="bg-surface border border-accent p-2 rounded w-full" />
      </div>
      <div>
        <label for="password" class="block text-accent">Password:</label>
        <input type="password" id="password" v-model="password" required class="bg-surface border border-accent p-2 rounded w-full" />
      </div>
      <div>
        <label for="confirm-password" class="block text-accent">Confirm Password:</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required class="bg-surface border border-accent p-2 rounded w-full" />
      </div>
      <button type="submit" class="bg-primary text-surface p-2 rounded">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { login } from '../auth';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
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
          login(this.username, data.token);
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
/* Add any additional styles here */
</style>