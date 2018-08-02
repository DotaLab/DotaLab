 <template>
     <div class="navigation">
        <ul>
        <router-link tag="li" v-for="(item , index) in tableData" :key="index" :to="{ path: item.path }" >
       {{ item.name }}
        </router-link>
        </ul>
     </div>
 </template>
 <script>
export default {
data() {
      return {
        tableData: [
        {
          name: '历史战绩',
          path: '/Userpage/overmatches',
          active: false
        },
        {
          name: '天梯记录',
          path: '/Userpage/ranktable',
          active: false
        },
        {
          name: '个人数据',
          path: '/User/Matches',
          active: false
        },
        {
          name: '常用英雄',
          path: 'heros',
          active: false
        }
        ],
        // 'pic':"'C:\Users\15407\Desktop\home\src\assets\106.jpg' "
        
      }
}     
}
</script>
<style scoped>
ul{
  list-style: none;
}

li{
    padding: 5px 20px;
 margin: 0 2px;
  float: left;
  font-size: 20px;
  position: relative;

}
li::before {
    content: "";
    position: absolute; 
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-bottom: 2px solid rgb(252, 7, 7);
     transition: 0.2s all linear;
}
li:hover::before {
    width: 100%;
    left: 0;
     transition-delay: 0.1s;
}
li:hover ~ li::before {
    left: 0;
}
</style>

