<template >
  <div>
     <slider :sli="slides" :inv="invTime" @onchange= "doSomething"></slider>
    <div class="all">
       <div class="nav">
         <div class="nav_left">
           {{ NewsName }}
         </div>
         <div class="nav_right">
         <Navigation :navi='NewsDate' ></Navigation>
         </div>
       </div>
         <keep-alive>
          <router-view></router-view>
         </keep-alive>

       </div>
  
  </div>

</template>
<script>
import slider from '@/components/slider'
import Navigation from '@/components/Navigation'
export default {
  name: 'News',
  components: {
    slider,
    Navigation
  },
 
  methods: {
    doSomething () {
      console.log('change ')
    }
  },
  data () {
    return {
      msg : 'hhhh',
      invTime: 2000,
      slides: [
        { // E:\GitHub\DotaLab\src\assets\slideShow\1.png
         
          src: require('E:/GitHub/DotaLab/src/assets/slideShow/8.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('E:/GitHub/DotaLab/src/assets/slideShow/9.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('E:/GitHub/DotaLab/src/assets/slideShow/8.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        }
      ],
      name: {
        '/Press':'综合新闻',
        '/News_s':'官方公告',
         '/Press':'综合新闻',
        '/News_s':'官方公告',

    },
      NewsDate: [
        {
          name: '综合新闻',
          path: 'Press',
          active: false
        },
        {
          name: '官方公告',
          path: 'News_s',
          active: false
        },
        {
          name: '赛事新闻',
          path: 'News_t',
          active: false
        },
        {
          name: '论坛资讯',
          path: 'News_f',
          active: false
        }
        ]
    }
  },
  computed: {
    NewsName () {
      return this.name[this.$route.path]

    }
  }
}
</script>

<style scoped>
.home{
    position: relative;
    top:-20px;
}
.all{
    background: rgba(192, 192,192,0.5);
    border-radius: 10px;
    width: 1250px;
    height: 450px;
    margin: auto;
}
.nav{
 position: relative;
 background-color: black;
 width: 1180px;
 line-height: 60px;
 margin: auto;
 height: 60px;
 top:10px;

}
.nav_left{
  position: relative;
  float: left;
  left: 25%;
  color:aliceblue;
  font-size: 35px;
}
.nav_right{
  position: relative;
  left: 40%;
  
}
.news_comp{ 
  position: relative;
  margin: 20px;

}



</style>