<template>
      <div class="detail-all">
        <div class="detail-left">
          <div class="detail-title"><span>&nbsp;&nbsp;官方公告</span><p >...</p></div>
  
          <hr style="width:200px height:1px">
         <div class="details">
           
           
         </div>
        </div>

        <div class="detail-mid">
          <div class="detail-title"><span>&nbsp;&nbsp;官方公告</span><p >...</p></div>
          <div class="details">
          
         
          </div>
        </div>

        <div class="detail-right">
          <div class="detail-title"><span>&nbsp;&nbsp;官方公告</span><p >...</p></div>

          <div class="details">
         
          </div>
        </div>
      </div>
     

 
</template>

<script>
    export default {
        name: "News",
      data () {
        return {
          tabs: [
            { text: '巴士' },
            { text: '快车' },
            { text: '专车' },
            { text: '顺风车' },
            { text: '出租车' },
            { text: '代驾' },
            { text: '顺风车' },

          ]
        }
      }
    }
</script>

<style scoped>
p{
  position: relative;
    list-style: none;
    display: inline-block;
    float: right;
    padding-right: 10px;
    margin-top: -5px;
}
span{
  margin-left: 15px;
}
span::before{
  content:'|';
   color: #01B4EE;
  display:inline-block;
}

  .detail-all{
  
    height:400px;
    width: 1300px;
    margin: 5px auto;
    position: relative;
  }
  .detail-left{
    background: #180909;
    top: 10px;
    width: 30%;
    height: 350px;
    position: relative;
    margin: 2px 2px 2px 35px;
    left: 0;
    float: left;
  }
  .detail-mid{
    background: #363232;
    position: relative;
    top: 10px;
    width: 30%;
    height:350px;
    float: left;
    margin: 2px;
  }
  .detail-right{
    background: #363232;
    position: relative;
    top: 10px;
    width: 30%;
    height: 350px;
    float: left;
    margin: 2px;
  }
   .detail-left .detail-title{
  color: aliceblue;
  height: 50px;
  line-height: 50px;
 width: 380px;
  font-family: 'Trebuchet MS';
 font-size: 25px;
  }
 .detail-title{
  color: aliceblue;
  height: 50px;
  line-height: 50px;
  background-color: black;
  width: 330px;
  margin: 5px 10px;
    font-family: 'Trebuchet MS';
 font-size: 25px;
  }
.details {
  position: relative;  
  }
.details ul {
 padding: 10px 15px;
  }
.details li {
    padding: 5px;
    list-style: none;
    margin: 5px;
   
  }
  .details li a{
    color: aliceblue;
    text-decoration: none;
  }
  
</style>