addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});


var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:columntemp
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: getoneculumn(dataobj,0)
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: columntemp[0],
            min: 0,
            max: 250,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name:columntemp[1],
            min: 0,
            max: 250,
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: columntemp[2],
            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:columntemp[0],
            type:'bar',
            data:getoneculumn(dataobj,1)
        },
        {
            name:columntemp[1],
            type:'bar',
            yAxisIndex: 1,
            data:getoneculumn(dataobj,2)
        },
        {
            name:columntemp[2],
            type:'line',
            yAxisIndex: 2,
            data:getoneculumn(dataobj,3)
        }
    ]
};
