

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
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
            {
                name: '胜率',
                type: 'gauge',
                radius:50,
                startAngle:180,
                endAngle:0,
                center: ['50%', '90%'],
                axisLine: {
                    show:true,
                    // 属性lineStyle控制线条样式
                    lineStyle: {
                        width: 10,
                        color:[[50/100, '#63869e'],[1,'#FFFFFF']]
                    }
                },
                //分隔线样式。
                splitLine: {
                    show: false,
                },
                //刻度样式。
                axisTick: {
                    show: false,
                },
                //刻度标签。
                axisLabel: {
                    show:false,
                },
                //仪表盘指针。
                pointer: {
                    show: false,
                    //指针长度
                },
                //仪表盘标题。
                title: {
                    show: true,
                    offsetCenter: [0, '-40%'], // x, y，单位px
                    textStyle: {
                        color: '#hhh',
                        fontSize: 30
                    }
                },
                detail: {
                    show: false,
                    offsetCenter: [0, '-10%'],
                    formatter: '{value}%',
                    textStyle: {
                        fontSize: 30
                    }
                },

                data: [{value: 75}]
            }
        ]
    };
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
        xAxis: {type: 'category',
        data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            show:true,
            "axisTick":{
                "show":true
              },},
        yAxis: {type: 'value'},
        series: [
          {
            name:'击杀数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:optiondata[0]
          },
          {  
            name:'死亡数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: optiondata[1]
          },
          {
          name:'助攻数',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:optiondata[2]
        },
       ]
   }
   return options;
}
