<template>
    <div class="onlogin">
      <h1 style="font-family:'Microsoft YaHei';color: #ababab">Login</h1>
      <el-input type = "text" style = "width:70%;" v-model="username" name="steamid"  placeholder = "UserName"></el-input>
      <br>
      <br>
      <el-input type = "password" style = "width:70%;" v-model="password" name="password"  placeholder = "Password"></el-input>
      <br>
      <br>
      <br>
      <router-link to="" ><el-button type = "newbottun" style = "width:20%;" @click="getLogin">登录</el-button></router-link>
      <router-link to="/register" ><el-button type = "newbottun" style = "width:20%;" >注册</el-button></router-link>
    </div>
</template>

<script>
  import md5 from 'js-md5'
  import Axios from 'axios';
  import {fetchUser} from '@/api/user.js'
    export default {
        name: "MyLogin",
        data () {
          return {
            username:'',
            password:''
          }
        },
        methods:{
          getLogin(){
            var password_ms = md5(this.password + this.$store.state.mask);
            var params = new URLSearchParams();
            params.append('username', this.username);
            
            Axios.post('http://www.micahmiao.cn/user/select/usercount',params).then(response=>{
              var username_flag = response.data
              if(username_flag){
                params.append('password', password_ms);
                Axios.post('http://www.micahmiao.cn/user/select/user',params).then(res2 =>{
                  if(res2.data == 1){
                        alert("登陆成功")
                      var params2 = new URLSearchParams();
                      params2.append('username', this.username);
                      Axios.post('http://www.micahmiao.cn/user/select/accountid',params2).then(res3=>{
                      this.$store.state.UserId = res3.data
                      fetchUser(this.$store.state.UserId).then(response4=>{
                       console.log(this.$store.state.UserId)
                         this.$store.state.Username = response4.data.profile.personaname
                          this.$store.state.Userimg = response4.data.profile.avatarmedium
                         
                          alert(this.$store.state.Userimg)
                          })
                      this.$store.state.loginstats = true 
                      this.$router.push({path:'/'})
                     

                })
                  }else{
                    this.password = ''
                    this.username = ''
                    alert("密码错误")
                  }
                })
              }else{
                alert("用户名错误")
                this.password =''
                this.username =''
              }
            })
          }
        }

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
