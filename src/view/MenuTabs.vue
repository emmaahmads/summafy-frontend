<template>
  <nav class="menu-tabs bg-background p-4">
    <ul class="flex space-x-4">
      <li v-if="authState.isAuthenticated"><RouterLink to="/dashboard" class="text-primary hover:underline">All Activities</RouterLink></li>
      <li v-if="authState.isAuthenticated"><RouterLink to="/documents" class="text-primary hover:underline">My Documents</RouterLink></li>
      <li v-if="authState.isAuthenticated"><RouterLink to="/upload" class="text-primary hover:underline">Upload Documents</RouterLink></li>
      <li v-if="authState.isAuthenticated"><RouterLink to="/logout" class="text-primary hover:underline">Sign Out</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { authState } from '../auth';
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.menu-tabs {
  background-color: #f8f9fa;
  padding: 10px;
}

.menu-tabs ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

.menu-tabs li {
  margin: 0 10px;
}

.menu-tabs a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.menu-tabs a:hover {
  text-decoration: underline;
}
</style>