<template>
  <div class="dashboard-page">
    <div class="container">
      <header class="header">
        <p>Hello, {{ user }}!</p>
      </header>
      <section class="activity-history">
        <h2>Activity History</h2>
        <ul>
          <li v-for="activity in activities" :key="activity.id">
            <span class="activity-date">{{ activity.Date }}</span>
            <span class="activity-user">{{ activity.User }}</span>
            <span class="activity-description">{{ activity.Activity }}</span>
            <span class="activity-document" v-if="activity.Document">
              <a :href="activity.Document.Href">{{ activity.Document.Rel }}</a>
            </span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import axios from '../axios';
import { authState } from '../auth';

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
    fetchDashboardData() {
      const apiUrl = 'http://localhost:8082/api/v1/dashboard';
      console.log('Fetching dashboard data...');
      axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${authState.token}`
        }
      })
        .then(response => {
          console.log('Received response:', response.data);
          this.user = response.data.user;
          this.activities = response.data.act;
        })
        .catch(error => {
          console.error('Error fetching dashboard data:', error);
        });
    },
    // handleFileUpload(event) {
    //   const file = event.target.files[0];
    //   if (!file) {
    //     console.error('No file selected');
    //     return;
    //   }

    //   const formData = new FormData();
    //   formData.append('file', file);

    //   const apiUrl = 'http://localhost:8082/api/v1/upload';
    //   axios.post(apiUrl, formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   })
    //   .then(response => {
    //     console.log('File uploaded successfully:', response.data);
    //     // Handle successful upload, e.g., update activity history
    //   })
    //   .catch(error => {
    //     console.error('Error uploading file:', error);
    //   });
    // }
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