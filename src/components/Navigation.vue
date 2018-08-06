 <template>
     <div class="navigation">
        <ul>
        <router-link tag="li" v-for="(item , index) in navi" :key="index" :to="{ path: item.path }" >
       {{ item.name }}
        </router-link>
        </ul>
     </div>
 </template>
 <script>
export default {
    props: {
        navi: {
            type: Array,
            default: []
        }
     },
    data() {
      return {   
      }  
    }
  

}
</script>
<style scoped>
ul{
  list-style: none;
}
.navigation{
  height: 60px;;
}
li{
    padding: 1px 20px;
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

