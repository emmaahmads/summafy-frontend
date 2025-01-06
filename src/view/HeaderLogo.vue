<template>
    <header class="header">
      <!-- <img src="@/assets/summafy-logo.png" alt="Logo" class="logo" /> -->
      <h1 class="title">Summafy</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderLogo'
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f8f9fa;
  }
  
  .logo {
    height: 50px;
    margin-right: 10px;
  }
  
  .title {
    font-size: 24px;
    color: #333;
  }
  </style>