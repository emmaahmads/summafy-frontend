<template>
    <header class="header">
      <!-- <img src="@/assets/summafy-logo.png" alt="Logo" class="logo" /> -->
      <h1 class="logo">Summafy</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderLogo'
  };
  </script>
  
  <style scoped>
  .header {
    align-items: center;
    background-color: #fff;
    font-style: italic;
    font-size: 100px;
    justify-content: center;
    font-family: sans-serif;
  }
  
  .logo {
    height: 150px;
    width: auto;
    margin-right: 20px;
  }
  
  .title {
    font-size: 24px;
    color: #333;
  }
  </style>