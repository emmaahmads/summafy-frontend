<template>
    <div class="container">
      <button class="toggle-button" @click="toggleDarkMode">Toggle Dark Mode</button>
  
      <h1>View Documents</h1>
  
      <table class="table">
        <thead>
          <tr>
            <th>Document Link</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="document in documents" :key="document.id">
            <td>
              <form :action="document.download" method="get">
                <button type="submit" class="btn btn-primary">Download</button>
              </form>
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
          </tr>
        </tbody>
      </table>
  
      <p><router-link to="/dashboard" class="btn btn-secondary">Go to Dashboard</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        documents: [
          // Example data, replace with actual data from your API
          {
            id: 1,
            download: '/path/to/download1',
            filename: 'Document1.pdf',
            userId: 'User1',
            size: '1MB',
            createdAt: '2023-01-01',
            summary: 'Summary of Document 1'
          },
          {
            id: 2,
            download: '/path/to/download2',
            filename: 'Document2.pdf',
            userId: 'User2',
            size: '2MB',
            createdAt: '2023-02-01',
            summary: 'Summary of Document 2'
          }
        ]
      };
    },
    methods: {
      toggleDarkMode() {
        if (document.body) {
          document.body.classList.toggle('dark-mode');
        } else {
          console.error('document.body is null');
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
  
  .btn-primary:hover, .btn-secondary:hover {
    background-color: #0056b3;
  }
  </style>