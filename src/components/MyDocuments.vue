<template>
  <div class="container">
    <h1>View Documents</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Document Link</th>
          <th>Details</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="document in documents" :key="document.id">
          <td>
            <a :href="document.download" class="btn btn-primary">Download</a>
          </td>
          <td>
            <ul>
              <li>Name: {{ document.filename }}</li>
              <li>Owner: {{ document.userId }}</li>
              <li>Size: {{ document.size }}</li>
              <li>Created: {{ document.createdAt }}</li>
              <li>Summary/description: {{ document.summary }}</li>
            </ul>
          </td>
          <td>
            <button @click="deleteDocument(document.filename)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p><router-link to="/dashboard" class="btn btn-secondary">Go to Dashboard</router-link></p>
  </div>
</template>

<script>
import axios from '../axios';
import { authState } from '../auth';

export default {
  data() {
    return {
      documents: []
    };
  },
  mounted() {
    this.fetchDocuments();
  },
  methods: {
    async fetchDocuments() {
      // Replace with your API endpoint for fetching documents
      try {
        const response = await axios.get('/api/v1/viewdoc/0', {
          headers: { 'Authorization': 'Bearer ' + authState.token }
        });
        this.documents = response.data.documents || [];
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    },
    async deleteDocument(filename) {
      if (!confirm('Are you sure you want to delete this document?')) return;
      try {
        const response = await axios.delete(`/api/v1/delete/${filename}`, {
          headers: { 'Authorization': 'Bearer ' + authState.token }
        });
        if (response.data && response.data.message) {
          alert('Document deleted successfully');
          this.documents = this.documents.filter(doc => doc.filename !== filename);
        }
      } catch (error) {
        alert('Error deleting document: ' + (error.response?.data?.error || error.message));
      }
    }
  }
};
</script>

<style scoped>
.container {
  font-family: 'Arial', sans-serif;
  padding: 20px;
}
.toggle-button {
  margin-bottom: 20px;
}
.table {
  width: 100%;
  border-collapse: collapse;
}
.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
}
.table th {
  background-color: #f2f2f2;
}
.btn {
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  background-color: #007bff;
  border: none;
  cursor: pointer;
}
.btn-secondary {
  background-color: #6c757d;
}
.btn-danger {
  background-color: #dc3545;
}
.btn-primary:hover, .btn-secondary:hover, .btn-danger:hover {
  background-color: #0056b3;
}
</style>