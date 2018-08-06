<template >
 <div style="text-align:center"  >
    <el-carousel :interval="4000" type="card" height=420px style="width:1500px;">
      <el-carousel-item v-for="(item,key) in slides" :key="key">
        <div class="slide-img">
          <a href="item.href">
              <img :src="item.src" style="width:100%">
          </a>   
      </div>
      </el-carousel-item>
    </el-carousel>
    <button1></button1> 
</div>
</template>
<script>
import button1 from '@/components/Button'
import slider from '@/components/slider'
export default {
  name: 'App',
  components: {
    slider,
    button1,
  },
  methods: {
    doSomething () {
      console.log('change ')
    }
  },
  created(){
    this.slides = [
        {
            // E:\GitHub\DotaLab\src\assets\slideShow\8.jpg
          src: require('@/assets/slideShow/Home_1.jpg'),
          title: 'xxx1',
          href: 'http://dota2.uuu9.com/201807/569515.shtml'
        },
        {
          src: require('@/assets/slideShow/Home_2.png'),
          title: 'xxx2',
          href: 'http://dota2.uuu9.com/201808/572687.shtml'
        },
        {
          src: require('@/assets/slideShow/Home_3.jpg'),
          title: 'xxx3',
          href: 'http://dota2.uuu9.com/201808/572670.shtml'
        }
      ]
  },
  data () {
    return {
      msg : 'hhhh', 
      invTime: 2000,
      slides: [
        {
            // E:\GitHub\DotaLab\src\assets\slideShow\8.jpg
          src: require('@/assets/slideShow/Home_1.jpg'),
          title: 'xxx1',
          href: 'http://dota2.uuu9.com/201807/569515.shtml'
        },
        {
          src: require('@/assets/slideShow/Home_2.png'),
          title: 'xxx2',
          href: 'http://dota2.uuu9.com/201808/572687.shtml'
        },
        {
          src: require('@/assets/slideShow/Home_3.jpg'),
          title: 'xxx3',
          href: 'http://dota2.uuu9.com/201808/572670.shtml'
        }
      ]
    }
  },
  deactivated () {
    this.$destroy()
  }
}
</script>

<style scoped>
.slide-img {
  width: 100%;
    height: 600px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>