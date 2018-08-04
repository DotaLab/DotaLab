<template>
<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
     <div class="slide-img">
        <a href="sli[nowIndex].href">
            <img :src="sli[nowIndex].src">
        </a>   
         <div   class="bef" @click="goto(prevIndex)">&lt;</div>
        <div   class="aft" @click="goto(nextIndex)">&gt;</div>
    </div>
     
      <ul class="slide-pages">
       
        <li v-for="(item , index) in sli" :key="index" @click="goto(index)">
        <a :class="{on: index === nowIndex}"></a>
        </li>
       
     </ul>

</div>
<!-- <div class="slide-show">
 <el-carousel :interval="4000" type="card" >
    <el-carousel-item v-for="(item , index) in sli" :key="index">
     <div class="slide-img">
        <a href="sli[index].href">
            <img :src="sli[index].src">
        </a>   
    </div>
    </el-carousel-item>
  </el-carousel>
</div> -->

</template>
<script>
//   <!-- <li v-for="(pic , index) in sli" :key="index"  :class="setClass(index)" >
//                  <img :src="sli[index].src">
//             </li> -->

export default {
    props: {
        sli: {
            type: Array,
            default: []
        },
        inv: {
            type: Number,
            default: 1000
        }
    },
    data () {
        return {
            nowIndex: 1
        }
    },
    computed: {
        prevIndex () {
            if ( this.nowIndex === 0 ){
                return  this.sli.length- 1
            }
            else{
                return this.nowIndex-1
            }
        },
        nextIndex () {
            if ( this.nowIndex === this.sli.length -1 ){
                return  0
            }
            else{
                return this.nowIndex + 1
            }
        }
    },
    
    methods: {
        setClass(index){
            let obj = {}
            obj['p'+index] =true ;
            return obj
        },
        goto (index) {
            this.nowIndex = index
            this.$emit('onchange' , index )
        },
        runInv () {
            this.invId = setInterval(() => {
                //   console.log(this.invId)
                  this.goto(this.nextIndex)
            }, this.inv)
        },
        clearInv () {
            clearInterval(this.invId)
        }
    },
    mounted () {
       //  console.log(this.invId)
        this.runInv()
    }
}

</script>
  
<style scoped>
@import url("//unpkg.com/element-ui@2.4.5/lib/theme-chalk/index.css");
li{
    list-style: none;
}
.bef{
    position: relative;
    font-size: 32px;
    top: 220px;
    left: 20px;
    cursor: pointer;
   
    width: 40px;
    height: 40px;;
    line-height: 40px;
    text-align: center
}
.bef:hover{
 background-color: rgb(172, 182, 182);
  opacity: 0.5;
  border-radius: 20px;
}
.aft{
    position: relative;
    font-size: 32px;
    top: 180px;
    left: 96%;
    cursor: pointer;
     width: 40px;
    height: 40px;;
    line-height: 40px;
    text-align: center

}
.aft:hover{
 background-color: rgb(172, 182, 182);
 opacity: 0.5;
   border-radius: 20px;
}
.slide-show {
  position: relative;
  width: 100%;
  top:-20px;
  height: 500px;
  overflow: hidden;
}
.slide-img {
  width: 100%;
    height: 600px;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
/* .el-carousel__container{
    position: relative;
    height: 600px;;
}
.el-carousel__item .el-carousel__item--card .is-in-stage{
    width: 800px;
    height: 800px;;
} */
.slide-pages {
  position: absolute;
    bottom: -2px;
    left: 40%;

}
.slide-pages li {
  float: left;
    width: 60px;
    height: 8px;
    background-color: rgb(165, 152, 152);
    margin: 0 10px;
      cursor: pointer;
}


</style>
