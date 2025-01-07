<template>
  <div id="app">
    <HeaderLogo />
    <MenuTabs />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderLogo from './view/HeaderLogo.vue';
import MenuTabs from './view/MenuTabs.vue';

export default {
  name: 'App',
  components: {
    HeaderLogo,
    MenuTabs
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