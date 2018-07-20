<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-link to="/News">新闻</router-link>

  </div>
</template>

<script>
  import First from '@/components/First'
  import Foot from '@/components/foot'
  export default {
  name: 'App',
  component:{
    First,
    Foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
