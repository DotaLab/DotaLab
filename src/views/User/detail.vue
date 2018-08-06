<template>
<div >
         <div class="nav">
             <div class="nav_top">
         <Navigation :navi='DetailDate' style="" ></Navigation>
             </div>
      
          <hr>

         <keep-alive>
          <router-view></router-view>
         </keep-alive>
          </div>
     
</div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
    components:{
        Navigation
    },
    data () {
        return {
         DetailDate: [
        {
          name: '比赛概观',
          path: 'overviews',
          active: false
        },
        {
          name: '发育情况',
          path: 'farm',
          active: false
        },
        {
          name: '趋势图',
          path: 'graphs',
          active: false
        },
        ],
        }
    }

}
</script>

<style scoped>
.nav{
    width: 1200px;
    margin: 0 auto;
    background-color: black;
    padding: 10px;
    /* height: 60px; */
    /* line-height: 60px;; */
}
.nav_top{
    position: relative;
    left: 32%;

}
</style>