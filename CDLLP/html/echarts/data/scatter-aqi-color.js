
addtable(dataobj);
//查询列名（参数）
var columntemp = getcolumnname(dataobj);
//第一列横坐标
xAxisobj.name = columntemp[0].name;
//第二列纵坐标
yAxisobj.name = columntemp[1].name;
//查询类目  最后一个类目
var legenddata = getlegend(dataobj,columntemp.length-1);
//数据分类
var dataobjtemp = getdataforlegend(dataobj,legenddata,columntemp.length-1);
var serisetemp=[];
dataobjtemp.forEach(function(datatemp){
    serisetemp.push({
        name: datatemp.name,
        type: 'scatter',
        itemStyle: {
            normal: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        data:datatemp.arr
    })
});

option = {
    backgroundColor: '#404a59',
    color: [
        '#dd4444', '#fec42c', '#80F1BE','#ed0bd5','#fbb714'
    ],
    legend: {
        y: 'top',
        data: legenddata,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        x: '10%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            var str="";
            for(var i=0;i<columntemp.length;i++)
            {
                str+=columntemp[i].text+"："+value[i]+'<br>';
            }
            return str;
        }
    },
    xAxis: {
        type: 'value',
        name:  xAxisobj.name,
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        min:xAxisobj.min,
        max: xAxisobj.max,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        min:yAxisobj.min,
        max:yAxisobj.max,
        name:  yAxisobj.name,
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: [columntemp[2].name],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        },
        {
            left: 'right',
            bottom: '5%',
            dimension: 3,
            min: 0,
            max: 50,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: [columntemp[3].name],
            textGap: 20,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                colorLightness: [1, 0.5]
            },
            outOfRange: {
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
    series:serisetemp
};