<template>
  <div class="dashboard-page bg-background text-secondary">
    <div class="container mx-auto p-4">
      <header class="header mb-4">
        <h1 class="text-primary text-3xl font-bold">Summafy Dashboard</h1>
        <p class="text-accent">Hello, {{ user }}!</p>
        <p class="text-accent">Here you can upload documents and view the history of activities.</p>
      </header>

      <nav class="nav-links mb-4">
        <ul class="flex space-x-4">
          <li>
            <input type="file" multiple @change="handleFileUpload" class="bg-surface border border-accent p-2 rounded" />
          </li>
          <li><RouterLink to="/view" class="text-primary hover:underline">View Documents</RouterLink></li>
          <li><RouterLink to="/logout" class="text-primary hover:underline">Logout</RouterLink></li>
        </ul>
      </nav>

      <section class="activity-history">
        <h2 class="text-secondary text-2xl font-semibold mb-2">Activity History</h2>
        <ul>
          <li v-for="activity in activities" :key="activity.id" class="mb-4 p-4 bg-surface rounded shadow">
            <span class="activity-date block text-accent">{{ activity.date }}</span>
            <span class="activity-user block text-accent">{{ activity.user }}</span>
            <span class="activity-description block text-accent">{{ activity.description }}</span>
            <span class="activity-document block text-accent" v-if="activity.document">
              <a :href="activity.document.href" class="text-primary hover:underline">{{ activity.document.rel }}</a>
            </span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return {
      user: '',
      activities: []
    };
  },
  mounted() {
    this.fetchDashboardData();
  },
  methods: {  
    async fetchDashboardData() {
      const apiUrl = 'api/v1/dashboard';
      console.log('Fetching dashboard data...');
      try {
        const response = await axios.get(apiUrl)
        console.log('Received response:', response.data);
        this.user = response.data.user;
        this.activities = response.data.act;
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
      
    },
  }
};
</script>

<style scoped>
.dashboard-page {
  font-family: 'Arial', sans-serif;
}

.header {
  margin-bottom: 20px;
}

.nav-links ul {
  list-style-type: none;
  padding: 0;
}

.nav-links li {
  margin-bottom: 10px;
}

.activity-history {
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 20px;
}

.activity-history ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  justify-content: space-evenly;
  display: grid;
}

.activity-history li {
  margin-bottom: 10px;
  display: list-item;
  padding: 10px 0;  
  justify-self: left;
  justify-content: space-evenly;
  border-bottom: 1px solid #ddd;
}

.activity-history li:last-child {
  border-bottom: none;
}

.activity-date,
.activity-user,
.activity-description,
.activity-document {
  display: inline-block;
  margin-right: 10px; 
}
</style>