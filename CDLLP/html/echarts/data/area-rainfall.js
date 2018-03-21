addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});
option = {
    title : {
        text:titleobj.text,
        subtext:titleobj.subtext,
        left:titleobj.left,
        top:titleobj.top,
        align: 'right'
    },
    grid: {
        bottom: 80
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        }
    },
    legend: {
        data:columntemp,
        x: 'left'
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 65,
            end: 85
        },
        {
            type: 'inside',
            realtime: true,
            start: 65,
            end: 85
        }
    ],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: false},
            data :getoneculumn(dataobj,0)
        }
    ],
    yAxis: [
        {
            name: columntemp[0],
            type: 'value',
            /*max: 500*/
        },
        {
            name: columntemp[1],
            nameLocation: 'start',
           /* max: 5,*/
            type: 'value',
            inverse: true
        }
    ],
    series: [
        {
            name:columntemp[0],
            type:'line',
            animation: false,
            areaStyle: {
                normal: {}
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            },
          /*  markArea: {
                silent: true,
                data: [[{
                    xAxis: '2009/9/12'
                }, {
                    xAxis: '2009/9/22'
                }]]
            },*/
            data:getoneculumn(dataobj,1)

        },
        {
            name:columntemp[1],
            type:'line',
            yAxisIndex:1,
            animation: false,
            areaStyle: {
                normal: {}
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            },
          /*  markArea: {
                silent: true,
                data: [[{
                    xAxis: '2009/9/10'
                }, {
                    xAxis: '2009/9/20'
                }]]
            },*/
            data:getoneculumn(dataobj,2)

        }
    ]
};
