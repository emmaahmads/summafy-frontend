<template>
    <div class="upload-documents bg-background text-secondary p-4">
      <h1 class="text-primary text-3xl font-bold mb-4">Upload Documents</h1>
      <input type="file" multiple @change="handleFileUpload" class="bg-surface border border-accent p-2 rounded mb-4" />
      <button @click="uploadFiles" class="bg-primary text-surface p-2 rounded">Upload</button>
    </div>
  </template>
  
  <script>
  import { authState } from '../auth';
  
  export default {
    data() {
      return {
        files: []
      };
    },
    methods: {
      handleFileUpload(event) {
        this.files = event.target.files;
      },
      async uploadFiles() {
        const formData = new FormData();
        for (let i = 0; i < this.files.length; i++) {
          formData.append('files', this.files[i]);
        }
  
        try {
          const response = await fetch('http://localhost:8082/api/v1/upload', {
            headers: {
              'Authorization': 'Bearer ' + authState.token
            },
            method: 'POST',
            body: formData
          });
          if (response.ok) {
            console.log('Files uploaded successfully');
            // Handle successful upload, e.g., show a success message or update the UI
          } else {
            console.error('Error uploading files:', response.statusText);
          }
        } catch (error) {
          console.error('Error uploading files:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>