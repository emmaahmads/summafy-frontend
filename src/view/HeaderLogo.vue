<template>
    <header class="header">
      <img src="@/assets/summafy-logo.png" alt="Logo" class="logo" />
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderLogo'
  };
  </script>
  
  <style scoped>
  .header {
    display: outside-flex;
    align-items: center;
    padding: 20px;
    background-color: #fff;
  }
  
  .logo {
    height: 200px;
    width: auto;
    margin-right: 20px;
  }
  
  .title {
    font-size: 24px;
    color: #333;
  }
  </style>