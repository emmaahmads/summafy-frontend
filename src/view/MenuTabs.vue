<template>
  <div class="menu-tabs">
    <ul>
      <li><a href="/all-activities">All Activities</a></li>
      <li><a href="/my-documents">My Documents</a></li>
      <li><a href="/upload-new-documents">Upload New Documents</a></li>
      <li><a href="/signout">Sign Out</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuTabs'
};
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