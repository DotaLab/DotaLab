<template>
<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
     <div class="slide-img">
        <a href="sli[nowIndex].href">
            <img :src="sli[nowIndex].src">
        </a>   
    </div>
     
      <ul class="slide-pages">
        <li @click="goto(prevIndex)"></li>
        <li v-for="(item , index) in sli" :key="index" @click="goto(index)">
        <a :class="{on: index === nowIndex}"></a>
        </li>
         <li @click="goto(nextIndex)"></li>
     </ul>

</div>

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
li{
    list-style: none;
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
    height: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
    bottom: -2px;
    left: 35%;

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
