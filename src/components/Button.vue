<template >
  
      <div class="buttons">
    <router-link v-for="(item,index) in buttons" :to="{ path: item.path }" :key="index" >
      <div class="item"><button  class="btn ripple"> {{item.name}}</button></div>
           <!-- <div class="item">  <button  class="btn ripple"> 装备信息</button></div>
              <div class="item">   <button  class="btn ripple"> 近期活动</button></div> -->
     
    </router-link>
   </div>

</template>
<script>

export default {
  components: {
  },
  methods: {
      goNews:function () {
          this.$router.push({path:'/News'})
      }
  },
  data () {
    return { 
         buttons: [
        {
          name: '英雄信息',
          path: 'Hero',
          active: false
        },
        {
          name: '装备信息',
          path: '',
          active: false
        },
         {
          name: '近期活动',
          path: 'News',
          active: false
        }
      ] 
    }
  }
}
</script>
<style scoped>
.btn {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: none;
	position:relative;
	margin:1em 15em;
	outline:none;
	letter-spacing:.2em;
	font-weight:bold;
	background:#999;
	cursor:pointer;
	overflow:hidden;

	color:#fff;
  float: left;

}

.buttons{
  width: 1520px;
  
}
.buttons .item{
    width: 33%;
    float: left;
}
 .ripple {
    position: relative;
    overflow: hidden
  }
/*button 水波纹点击效果*/
  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s
  }

  .ripple:active:after {
    transform: scale(0, 0);
    opacity: .2;
    transition: 0s
  }

</style>

