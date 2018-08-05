<template>
  <el-table
    :data="tableData"
    style="width: 100%; padding=0px"
    :row-class-name="tableRowClassName">
 <el-table-column
      label="玩家名称"
      width="180" 
      >
      <template slot-scope="scope">
        <div class="friend">
            <div class="pic" style="float:left"><img :src='scope.row.avatar' style="width:55px;height:55px"></div>
            <div class="name" style="overflow: hidden">
                <div >{{scope.row.personaname}}</div>
                <div>{{scope.row.last_time}}</div>
            </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="with_games"
      sortable
      label="次数"
      width="120"
      >
    </el-table-column>
     <el-table-column
      prop="with_win"
      label="己方胜场"
      width="120"
      sortable
      >
     </el-table-column>
  </el-table>
</template>

<style>
.friend{
  width: 150px;
    height: 30px;;
}
.friend.pic{
  display: inline;

}
.friend.name{
  display: inline;

}
  .el-table .warning-row {
    background: rgb(39, 39, 49);
  }

  .el-table .success-row {
    background: #171722;
  }
</style>

<script>
 import {formatSeconds} from '@/utils/tool'
import {fromnowadays} from '@/utils/tool'
  export default {
    created(){
        
        var shows = 5;
        for(var i=0;i<shows;i++){
             this.tableData[i] = this.$store.state.UserPeerser[i];
        }
        for(var i=0;i<shows;i++){
             this.tableData[i].last_time = fromnowadays(this.$store.state.UserPeerser[i].last_played);
        }

    },
    data() {
      return {
        tableData: [],
      }
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex%2==0) {
          return 'warning-row';
        } else if (rowIndex%2!=0) {
          return 'success-row';
        }
        return '';
      }
    }
  }
</script>
