

function onReady(instance, echarts) {
    // echarts.number 或 echarts.format 方法在这里获取
    console.log(instance, echarts);
  }

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
        B[i] = data[i][2];
        H[i] = data[i][1];
        R[i] = data[i][3];
        Q[i] = data[i][0];
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

export function drawMinTeam(data,time){
    var options = {
        title: {
            text: '团队经济经验变化图'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['经济','经验']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: time
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'经济',
                type:'line',
                stack: '总量',
                data:data[0]
            },
            {
                name:'经验',
                type:'line',
                stack: '总量',
                data:data[1]
            }
        ]
    };
    return options;
}

export function drawGoldMin(data,time,hero){
    var options = {
        title: {
            text: '个人经济变化图'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:hero
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: time
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:hero[0],
                type:'line',
                stack: '总量',
                data:data[0]
            },
            {
                name:hero[1],
                type:'line',
                stack: '总量',
                data:data[1]
            },
            {
                name:hero[2],
                type:'line',
                stack: '总量',
                data:data[2]
            },
            {
                name:hero[3],
                type:'line',
                stack: '总量',
                data:data[3]
            },
            {
                name:hero[4],
                type:'line',
                stack: '总量',
                data:data[4]
            },
            {
                name:hero[5],
                type:'line',
                stack: '总量',
                data:data[5]
            },
            {
                name:hero[6],
                type:'line',
                stack: '总量',
                data:data[6]
            },
            {
                name:hero[7],
                type:'line',
                stack: '总量',
                data:data[7]
            },
            {
                name:hero[8],
                type:'line',
                stack: '总量',
                data:data[8]
            },
            {
                name:hero[9],
                type:'line',
                stack: '总量',
                data:data[9]
            }
        ]
    };
    return options;
}

export function drawXPMin(data,time,hero){
    var options = {
        title: {
            text: '个人经验变化图'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:hero
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: time
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:hero[0],
                type:'line',
                stack: '总量',
                data:data[0]
            },
            {
                name:hero[1],
                type:'line',
                stack: '总量',
                data:data[1]
            },
            {
                name:hero[2],
                type:'line',
                stack: '总量',
                data:data[2]
            },
            {
                name:hero[3],
                type:'line',
                stack: '总量',
                data:data[3]
            },
            {
                name:hero[4],
                type:'line',
                stack: '总量',
                data:data[4]
            },
            {
                name:hero[5],
                type:'line',
                stack: '总量',
                data:data[5]
            },
            {
                name:hero[6],
                type:'line',
                stack: '总量',
                data:data[6]
            },
            {
                name:hero[7],
                type:'line',
                stack: '总量',
                data:data[7]
            },
            {
                name:hero[8],
                type:'line',
                stack: '总量',
                data:data[8]
            },
            {
                name:hero[9],
                type:'line',
                stack: '总量',
                data:data[9]
            }
        ]
    };
    return options;
}

export function drawScatter(dataAll) {
    var markLineOpt = {
        animation: false,
        data: [[{
            coord: [0, 0],
            symbol: 'none'
        }, {
            coord: [1, 1],
            symbol: 'none'
        }]]
    };
    
    var option = {
        title: {
            text: '英雄选择以及胜率散点图',
            x: 'center',
            y: 0
        },
        grid: [
            {x: '7%', y: '7%', width: '38%', height: '38%'},
            {x2: '7%', y: '7%', width: '38%', height: '38%'},
            {x: '7%', y2: '7%', width: '38%', height: '38%'},
            {x2: '7%', y2: '7%', width: '38%', height: '38%'}
        ],
        tooltip: {
            formatter: 'Group {a}: ({c})'
        },
        xAxis: [
            {gridIndex: 0, min: 0, max: 0.05},
            {gridIndex: 1, min: 0, max: 0.05},
            {gridIndex: 2, min: 0, max: 0.05},
            {gridIndex: 3, min: 0, max: 0.05}
        ],
        yAxis: [
            {gridIndex: 0, min: 0, max: 0.05},
            {gridIndex: 1, min: 0, max: 0.05},
            {gridIndex: 2, min: 0, max: 0.05},
            {gridIndex: 3, min: 0, max: 0.05}
        ],
        series: [
            {
                name: 'I',
                type: 'scatter',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: dataAll[0],
                markLine: markLineOpt
            },
            {
                name: 'II',
                type: 'scatter',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: dataAll[1],
                markLine: markLineOpt
            },
            {
                name: 'III',
                type: 'scatter',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: dataAll[2],
                markLine: markLineOpt
            },
            {
                name: 'IV',
                type: 'scatter',
                xAxisIndex: 3,
                yAxisIndex: 3,
                data: dataAll[3],
                markLine: markLineOpt
            }
        ]
    };
    return option;
}

export function drawColorBar(time,data) {
    var option = {
        xAxis: {
            type: 'category',
            data: time
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
            },
            data: data,
            type: 'bar'
        }]
    };
    console.log("结束")
    return option
}

