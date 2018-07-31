

export function geticon(rank_tier) {
    var reselt = new Array();
    var base = '../../static/rank-icon/';
    var iconURL = '';
    var starURL = '';
    var intRankTier = 0;
    var star_show = 1;
    if(rank_tier != parseInt(rank_tier, 10)) {
       iconURL = base + 'rank_icon_0.png';
       
    }else{
         intRankTier = parseInt(rank_tier, 10);
          iconURL = base + 'rank_icon_' + parseInt(intRankTier / 10, 10) + '.png';
          starURL = base + 'rank_star_' + parseInt(intRankTier % 10, 10) + '.png';
          if(parseInt(intRankTier % 10, 10) == 0){
             starURL = '';
             star_show = 0
          }
    }
    reselt.push(iconURL);
    reselt.push(starURL);
    reselt.push(star_show);
    return reselt;
}

export  function pieoDraw(optiondata){
    var options = {
        graphic: {
            type: "text", // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
            top: "center", // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
            left: "center", // 同上
            style: {
              text: "胜负关系", // 文本块文字。可以使用 \n 来换行。[ default: '' ]
              fill: "green", // 填充色。
              fontSize: 12 // 字体大小
                    // fontWeight: 'bold'		// 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
            }
          },
          color:['green', 'red'],
          series: [
          {
              type: "pie",
              radius: ["60%", "75%"],
              hoverAnimation: false, //悬停的动画效果
              clockWise: true,
              startAngle: 180,
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      text: "胜率",
                      show: false,
                      position: "outside"
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: "12"
                          // fontWeight: 'bold' 是加粗
                      }
                  }
              },
              labelLine: {
                normal: {
                show: true
              }
          },
          data: [{ value: optiondata[0], name: "胜场"}, { value: optiondata[1], name: "负场" }]
        }]
    }
    var timer = new Date()
    console.log("加载完成:"+ timer)

    return options;
}



export function drawLine(optiondata){
    var options = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {},
        xAxis: {type: 'category',value:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]},
        yAxis: {type: 'value'},
        series: [
          {
            name:'击杀数',
            type:'line',
            stack: '总量',
            data:optiondata[0]
          },
          {  
            name:'死亡数',
            type:'line',
            stack: '总量',
            data: optiondata[1]
          },
          {
          name:'助攻数',
          type:'line',
          stack: '总量',
          data:optiondata[2]
        },
       ]
   }
   return options;
}
