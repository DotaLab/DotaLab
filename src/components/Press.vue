<template>
      <div class="detail-all">
        <div class="detail-left">
          <div class="detail-title"><span>&nbsp;&nbsp;最新资讯</span><p >...</p></div>
          <hr style="width:200px height:1px">
         <div class="details">
           <ul>
          <li v-for="(item,index) in newsList" :key="index">
            <a :href="item.url" class="new-item" @click="increase(index)" target="_blank">{{ item.title }}</a> <span class="date"> {{ item.date }}</span>
              <span v-if="ishot(item.hot)" class="hot-tag">HOT</span>
              <!-- <span>{{ishot}}</span> -->
          </li>
        </ul>
      
         </div>
        </div>

        <div class="detail-mid">
          <div class="detail-title"><span>&nbsp;&nbsp;最新资讯 <p >...</p></span></div>
          <div class="details">
            <ul>
          <li v-for="(item,index) in newsList" :key="index">
            <a :href="item.url" class="new-item">{{ item.title }}</a> <span class="date">{{ item.date }}</span>
              <span v-if="ishot(item.hot)" class="hot-tag">HOT</span>
          </li>
        </ul>
         
          </div>
        </div>

        <div class="detail-right">
          <div class="detail-title"><span>&nbsp;&nbsp;最新资讯 <p >...</p></span></div>
          <div class="details">
           <ul>
          <li v-for="(item,index) in newsList" :key="index">
            <a :href="item.url" class="new-item">{{ item.title }}</a><span class="date">{{ item.date }}</span>
               <span v-if="ishot(item.hot)" class="hot-tag">HOT</span>
          </li>
        </ul>
          </div>
        </div>
      </div>
     

 
</template>

<script>
import axios from 'axios'
export default {
  name: "News",
  data () {
    return {
      newsList:[]
   
    }
  },
  created () {
    let n1 = axios.get('/static/data/db.json').then((Response) =>{ return Response.data})
    Promise.all([n1]).then((value)=>{
      const news = value[0]
      this.newsList = news 
      //  alert(this.newsList[4].hot)
    }).catch(function(){
      this.$route.push('/error')
    })
  },
   computed: {
    // isHot () {
    //   if(this.newsList[0].hot > 5)
    //      this.ishot = true
    //      alert(ishot)
    // }
   
   },
  //  created:() =>{
  //    console.log(this.ishot)
  //  },
  
   methods:{
     ishot: function(index){
       let h1;
        if(index > 5)
        { h1 =true; return h1;}
        else{
          h1=false ; return h1;
        }

     },
      increase: function(index) {
        this.newsList[index].hot++;
    }
   }
}
</script>

<style scoped>
.detail-title p{
  position: relative;
    list-style: none;
    display: inline-block;
    left: 175px;
    padding-right: 10px;
    margin-top: -5px;
}
.detail-title span{
  margin-left: 15px;
}
.detail-title span::before{
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
   .detail-mid .detail-left ,.detail-title{
  color: aliceblue;
  height: 50px;
  line-height: 50px;
  background-color: black;
  width: 360px;
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
    padding: 10px;
    list-style: none;
    margin: 5px;
   
  }
  .details li a{
    color: aliceblue;
    text-decoration: none;
  }
 .date{
   float: right;
 }
 .hot-tag{
   background: rgb(245, 8, 8)
 }
</style>