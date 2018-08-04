<template>
    <div class="all">
      <div class="nav">
        <h1>导航</h1>
      </div>

      <div class="detail-all">
        <div class="detail-left">
          <div class="detail-title"><h1>最新资讯</h1></div>
         <div class="details">
             <li v-for="tab in tabs">
               {{ tab.text }}
             </li>
         </div>
        </div>

        <div class="detail-mid">
          <div class="detail-title"><h1>最新资讯</h1></div>
          <div class="details">
            <li v-for="tab in tabs">
              {{ tab.text }}
            </li>
          </div>
        </div>

        <div class="detail-right">
          <div class="detail-title"><h1>最新资讯</h1></div>
          <div class="details">
            <li v-for="tab in tabs">
              {{ tab.text }}
            </li>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "News",
      data () {
        return {
          tabs: [
            { text: '巴士' },
            { text: '快车' },
            { text: '专车' },
            { text: '顺风车' },
            { text: '出租车' },
            { text: '代驾' },
            { text: '顺风车' },

          ]
        }
      }
    }
</script>

<style scoped>
  .all{
    background: rgba(192, 192,192,0.5);
    border-radius: 10px;
    width: 1350px;
    height: 500px;
    margin: auto;
    position: relative;

  }
  .nav{
    background: #5f5f5f;
    font-size: 15px;
    width: 1300px;
    height: 80px;
    margin: auto;
    position: relative;
    top: 8px;
    padding-top:10px;
  }
  .detail-all{
    background: darkgray;
    height:400px;
    width: 1300px;
    margin: 10px auto;
    position: relative;
  }
  .detail-left{
    background: #363232;
    top: 10px;
    width: 30%;
    height: 350px;
    position: relative;
    margin: 10px 10px 10px 40px;
    left: 0;
    float: left;
  }
  .detail-mid{
    background: #363232;
    position: relative;
    top: 10px;
    width: 30%;
    height:350px;
    float: left;
    margin: 10px;
  }
  .detail-right{
    background: #363232;
    position: relative;
    top: 10px;
    width: 30%;
    height: 350px;
    float: left;
    margin: 10px;
  }
  .detail-title{
    background: dimgray;
    color: azure;
    font-weight:bold;
    font-family: "Microsoft YaHei UI";
    padding-left:60px;
    text-align:left;
  }
  .details{
    background: dimgray;
    text-align:left;
    padding-left:60px;
    height: 250px;
    position: relative;
    margin-bottom: 10px;
    color: azure;
  }


</style>
