<template>
  <div id="app">
     <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}" class="head-logo">
          <img src="./assets/logo.png">

        </router-link>
         <HomePage class="regiter"></HomePage>
        
        <div class="head-nav">
          
          <ul>
             
            <li><router-link :to="{path: '/registe'}">登录</router-link></li>
            <li>|</li>
            <li>注册</li>
            <li>|</li>
            <li>关于</li>
          </ul>
        </div>  
      </div>
    </div>
    <div class="container">

      <router-view></router-view>

    </div>
    <div class="app-foot">
         <p>© cdut</p>
    </div>
  </div>
</template>

<script>
import HomePage from './views/HomePage/HomePage' 
export default {
  name: 'App',
  components:{
    HomePage
  }
}
// E:\GitHub\DotaLab\src\views\HomePage\HomePage.vue
// E:\GitHub\DotaLab\src\App.vue
</script>

<style >
#app {

  /* margin-top: 60px; */
/*  
  width: 100%;
  height: 100%;
  background:url(./assets/images/tim.jpg) center 0 no-repeat;
  background-size: cover;
  position: fixed; */
  background-color: #2d3a4b;


  
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #031046;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
  margin-top: 20px;
}
.regiter{
  width: 800px;
  float: left;
  margin-left: 50px;
}
.head-logo img {
  width: 50px;
}
.head-nav {
  float: left;
}
.head-nav ul {
  overflow: hidden;
  list-style: none;
}
.head-nav li {
  cursor: pointer;
  float: left;
  padding: 10px;
  height: 50px;
  line-height: 50px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #01061a;
  color: rgb(245, 241, 241);
  clear: both;

}
.container {
width: 1520px;
  /* background: url(./assets/images/tim.jpg); */
}

</style>
