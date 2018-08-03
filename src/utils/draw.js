

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
                    //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
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

export function drawXPBar(ydata,data){
    var B = new Array();var H = new Array();
    var R = new Array();var Q = new Array();
    for(var i=0;i<10;i++){
        B[i] = data[i][0];
        H[i] = data[i][1];
        R[i] = data[i][3];
        Q[i] = data[i][2];
    }
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['小兵', '英雄','其他','肉山']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ydata
        },
        series: [
            {
                name: '小兵',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: B
            },
            {
                name: '英雄',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: H
            },
            {
                name: '其他',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: Q
            },
            {
                name: '肉山',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: R
            },
        ]
    };
    return option;
}

export function drawGoldBar(ydata,data){
    var B = new Array();var H = new Array();
    var R = new Array();var Q = new Array();
    var P = new Array();
    for(var i=0;i<10;i++){
        B[i] = data[i][0];
        H[i] = data[i][11];
        R[i] = data[i][12];
        Q[i] = data[i][13];
        Q[i] = data[i][14];
    }
    var options = {
        angleAxis: {
            type: 'category',
            data: ydata,
            z: 10
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: B,
            coordinateSystem: 'polar',
            name: '其他',
            stack: 'a'
        }, {
            type: 'bar',
            data: H,
            coordinateSystem: 'polar',
            name: '建筑',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: 'polar',
            name: '击杀',
            stack: 'a'
        },
        {
            type: 'bar',
            data: R,
            coordinateSystem: 'polar',
            name: '补兵',
            stack: 'a'
        },
        {
            type: 'bar',
            data: Q,
            coordinateSystem: 'polar',
            name: '肉山',
            stack: 'a'
        },
    ],
        legend: {
            show: true,
            data: ['其他','建筑','击杀','补兵','肉山']
        }
    };
    return options;
}
