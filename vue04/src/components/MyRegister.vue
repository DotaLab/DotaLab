<template>
  <div class="onregester">
    <h1 style="font-family:'Microsoft YaHei';color: #ababab">Register</h1>
    <el-form :model="register" :rules="rules"  >

      <el-form-item class="labelStyle" label="用户名:" prop="username">
    <el-input type = "text" style = "width:60%;" class="inputStyle" v-model="register.username" placeholder = "请使用邮箱注册"></el-input>
      </el-form-item>

      <el-form-item class="labelStyle_steam" label="Steam账号："prop="steamID">
    <el-input type = "text" style = "width:55%;"  class="inputStyle" v-model="register.steamID"  placeholder = "SteamID"></el-input>
      </el-form-item>

      <el-form-item class="labelStyle" label="密 码：" prop="psd">
    <el-input type = "text" style = "width:60%;"  class="inputStyle" v-model="register.psd" placeholder = "密码由6-16个字母和数字组成"></el-input>
      </el-form-item>

      <el-form-item class="labelStyle" label="密 码：" prop="repsd">
    <el-input type = "text" style = "width:60%;"  class="inputStyle" v-model="register.repsd" placeholder = "再次输入密码"></el-input>
      </el-form-item>
    <el-button type = "newbottun" style = "width:20%;" @click="getMD5">注册</el-button>
    </el-form>
  </div>
</template>

<script>
  import md5 from 'js-md5'
    export default {
      name: "MyRegister",
      data() {
        var validateName=(rule,value,callback)=>{
          var regEmail= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
          if(value==''){
            callback(new Error('用户名不能为空'));
          }else if(!regEmail.test(value)){
            callback(new Error('请输入正确邮箱格式如：xxxxxxx@163.com'));
          }

        };
        var validateSteam=(rule,value,callback)=>{
          if(value==''){
            callback(new Error('steam账号不能为空'));
          }
        };
         var validatePsd=(rule,value,callback)=>{
           var regPassword =/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z\d]{6,16}$/;
           var letters=/^[A-Za-z]+$/;
           if(value==''){
             callback(new Error('密码不能为空'));
           }else if(value.length < 6){
             callback(new Error('密码不能少于六位数'));
           } else if(!regPassword.test(value)){
             if(value.length >16){
               callback(new Error('密码不能超过十六位数'));
             }else if(!letters.test(value)){
               callback(new Error('密码不能为纯数字、汉字或特殊字符'));
             }else{
               callback(new Error('密码不能为纯英文、汉字或特殊字符'));
             }
           }
         };
        var validateREPsd=(rule,value,callback)=>{
          if(value==''){
            callback(new Error('密码不能为空'));
          }else if(value!=this.register.psd){
            callback(new Error('两次输入密码不一致'));
          }
        };
        return {
       register:{
         username:'',
         steamID:'',
         psd:'',
         repsd:''
       },
          rules:{
            username:[
              {validator:validateName}
            ],
            steamID:[
              {validator:validateSteam}
            ],
            psd:[
              {validator:validatePsd,trigger:'blur'}
            ],
            repsd:[
              {validator:validateREPsd}
            ]
          }
        }
      },
      methods:{
        getMD5(){
          var username,steam_id,password;
          console.log(this.register.username);
          console.log(this.register.steamID);
          console.log(this.register.psd);
          username = md5(this.register.username);
          steam_id = md5(this.register.steamID);
          password = md5(this.register.psd);
          console.log(username);
          console.log(steam_id);
          console.log(password);
        }
      }
    }
</script>

<style scoped>
.onregester{
  background: rgba(192, 192,192,0.5);
  text-align: center; /*让div内部文字居中*/
  border-radius: 20px;/*边缘弧度*/
  width: 500px;
  height: 400px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
  .labelStyle{
    font-family: "Microsoft YaHei";
    font-size: 30px;
    font-weight: bold;
    padding-left: 70px;
    color:#ABABAB;
  }
  .inputStyle{
    float:left;
  }
.labelStyle_steam{
  font-family: "Microsoft YaHei";
  font-size: 20px;
  font-weight: bold;
  padding-left: 30px;

}
</style>
