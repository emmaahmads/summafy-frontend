<template>
    <div class="container">
     
      <h1>View Documents</h1>
  
      <!--
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
          </tr>
        </tbody>
      </table>
      -->
  
      <p><router-link to="/dashboard" class="btn btn-secondary">Go to Dashboard</router-link></p>
    </div>
  </template>
  
  <script>
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