<template >
 <div >
      <slider :sli="slides" :inv="invTime" @onchange= "doSomething"></slider>
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
  data () {
    return {
      msg : 'hhhh',
      invTime: 2000,
      slides: [
        {
            // E:\GitHub\DotaLab\src\assets\slideShow\8.jpg
          src: require('@/assets/slideShow/8.jpg'),
          title: 'xxx1',
          href: 'www.baidu.com'
        },
        {
          src: require('@/assets/slideShow/9.jpg'),
          title: 'xxx2',
          href: 'www.baidu.com'
        },
        {
          src: require('@/assets/slideShow/3.png'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>