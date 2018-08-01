<template >
  <div class="">
     <slider :sli="slides" :inv="invTime" @onchange= "doSomething"></slider>
  </div>
</template>
<script>
import slider from '@/components/slider'

export default {
  name: 'News',
  components: {
    slider,
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
        {
          src: require('../assets/slideShow/8.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/9.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/10.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home{
    position: relative;
    top:-20px;
}
</style>