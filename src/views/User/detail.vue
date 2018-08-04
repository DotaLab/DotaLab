<template>
    <div>
         <Navigation :navi='DetailDate' ></Navigation>
         <keep-alive>
          <router-view></router-view>
         </keep-alive>
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

<style>

</style>
