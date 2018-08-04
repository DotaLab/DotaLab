<template>
    <div class="onlogin">
      <h1 style="font-family:'Microsoft YaHei';color: #ababab">Login</h1>
      <el-input type = "text" style = "width:70%;" v-model="steamid" name="steamid"  placeholder = "StreamID"></el-input>
      <br>
      <br>
      <el-input type = "password" style = "width:70%;" v-model="password" name="password"  placeholder = "Password"></el-input>
      <br>
      <br>
      <br>
      <router-link to="" ><el-button type = "newbottun" style = "width:20%;" >登录</el-button></router-link>
      <router-link to="/MyRegister" ><el-button type = "newbottun" style = "width:20%;" >注册</el-button></router-link>
    </div>
</template>

<script>
    export default {
        name: "MyLogin"
    }
</script>

<style scoped>
  .onlogin{
    background: rgba(192, 192,192,0.5);
    text-align: center; /*让div内部文字居中*/
    border-radius: 20px;/*边缘弧度*/
    width: 500px;
    height: 300px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
