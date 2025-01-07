<template>
  <div id="app">
    <HeaderLogo />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderLogo from './view/HeaderLogo.vue';

export default {
  name: 'App',
  components: {
    HeaderLogo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>