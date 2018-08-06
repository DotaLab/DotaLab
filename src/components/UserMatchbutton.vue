<template>
    <div class="bottom">
      <div class="bottom_left">
        <div>
          <Ttable></Ttable>
        </div>
      </div>


      <div class="bottom_right">
        <Peertable></Peertable>
      </div>
    </div>
</template>

<script>
import Ttable from '@/components/Table/Table'
import Peertable from '@/components/Table/PeerTable'
export default {
     components:{
        Ttable,
        Peertable,
    },
    created(){
    }

    
}
</script>

<style scoped>

/* 底部 */
.bottom {
  width: 100%;

  margin: 10px;
  /* border: 1px dashed #dcdddd; */
}
.bottom_left {
  border: 1px dashed #dcdddd;
  margin: 18px;
  width: 55%;
  height: 90%;
  float: left;
}
.bottom_left .bottom_left_title {
  line-height: 40px;
  background: #2a2c3b;
  height: 40px;
}
.bottom_right {
  border: 1px dashed #dcdddd;
  width: 35%;
  float: right;
  height: 90%;
  padding: 10px;
  margin: 20px;
}
.el-table th{
        background:#060713; /*表头颜色*/
        font-size: 12px;

        text-align: center
    }
.el-table td{
        background:#252525; /*颜色*/
        font-size: 12px;
        height:5px;
        text-align: center
    }
</style>

