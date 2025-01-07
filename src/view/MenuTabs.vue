<template>
  <nav class="menu-tabs">
    <ul>
      <li v-if="authState.isAuthenticated"><RouterLink to="/dashboard">All Activities</RouterLink></li>
      <li v-if="authState.isAuthenticated"><RouterLink to="/documents">My Documents</RouterLink></li>
      <li v-if="authState.isAuthenticated"><RouterLink to="/upload">Upload Documents</RouterLink></li>
      <li v-if="authState.isAuthenticated"><RouterLink to="/logout">Sign Out</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { authState, checkAuth } from '../auth';
import { RouterLink } from 'vue-router';

checkAuth();

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